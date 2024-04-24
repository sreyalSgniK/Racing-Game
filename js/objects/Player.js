import * as THREE from 'three';
import Car from './Car';
// import { keyStates } from '../Controls';
import { saveAs } from 'file-saver'; // Import FileSaver.js for file saving
import { boxIntersectsPath, getRotationMatrix, createOBBWireframe} from '../utils';
import Track from './Track';

export default class Player extends Car {

    hitbox = THREE.Mesh;

    velocity = THREE.Vector3;

    track = Track;

    colliding = false;

    checkpointNumber = 0;

    constructor(scene = THREE.Scene, modelURL = String, initialPosition = THREE.Vector3) {
        super(scene, modelURL, initialPosition);

        this.velocity = new THREE.Vector3(0,0,0);

        this.track = scene.track;

        this.checkpointNumber = 0;

        super.loadGLTF(this.modelURL, this.scene, this.scale, this.rotationAngle).then(() => {
            super.setupHitbox();
        })
        .catch((error) => {
            console.error('Error loading model:', error);
        });

        this.isLogging = false;
        this.positions =[];

        this.keyStates = {};

        // this.axesHelper = new THREE.AxesHelper(5);
        // this.scene.add(this.axesHelper);

        // Handle key press events
        const handleKeyDown = (event) => {
            this.keyStates[event.code] = true;
        };

        const handleKeyUp = (event) => {
            this.keyStates[event.code] = false;
        };

        // Add event listeners for keydown and keyup events
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        this.speedBarElement = document.getElementById('speedBar');
    }


    handleInput(deltaTime) {
        // Decelerate movement speed when neither 'KeyW' nor 'KeyS' is pressed
        if (!this.keyStates['KeyW'] && !this.keyStates['KeyS']) {
            if (this.movementSpeed > 0) {
                this.movementSpeed -= this.deceleration * deltaTime; // Decelerate forward movement
            } else if (this.movementSpeed < 0) {
                this.movementSpeed += this.deceleration * deltaTime; // Decelerate backward movement
            }

            // Clamp movement speed to zero to prevent small oscillations around zero
            if (Math.abs(this.movementSpeed) < this.deceleration) {
                this.movementSpeed = 0;
            }
        }
        

        if (this.keyStates['KeyP']) {
            this.keyStates['KeyP'] = false;
            this.logPosition();
        }


        if (this.keyStates['KeyK']) {
            this.keyStates['KeyK'] = false;
            this.exportPositionsToFile();
        }

        if (this.keyStates['KeyW']) {
    
            if(this.movementSpeed < this.maxForwardSpeed){
                if(this.movementSpeed > 0) {
                    this.movementSpeed += this.acceleration * deltaTime;
                } else {
                    this.movementSpeed += this.acceleration * 2 * deltaTime;
                }
            }
            
            // console.log("Up");
        }
        if (this.keyStates['KeyS']) {
    
            if(this.movementSpeed > this.maxBackwardSpeed){
                if(this.movementSpeed > 0) {
                    this.movementSpeed -= this.acceleration * 2 * deltaTime;
                } else {
                    this.movementSpeed -= this.acceleration * deltaTime;
                }
            }
            
            // console.log("Down");
        }
        if (this.keyStates['KeyA']) {
            if (this.movementSpeed > 0) {
                this.movementSpeed -= this.turnDeceleration * deltaTime;
                this.carScene.rotation.y += this.rotationSpeed * deltaTime;
            } else if (this.movementSpeed < 0) {
                this.movementSpeed += this.turnDeceleration * deltaTime;
                this.carScene.rotation.y -= this.rotationSpeed * deltaTime;
            }
    
            // this.carScene.rotation.y += this.rotationSpeed * deltaTime;
            // (this.movementSpeed > 0) ? this.movementSpeed -= this.turnDeceleration * deltaTime : this.movementSpeed += this.turnDeceleration * deltaTime;
            
            // console.log("Left");
        }
        if (this.keyStates['KeyD']) {
            if (this.movementSpeed < 0) {
                this.movementSpeed += this.turnDeceleration * deltaTime;
                this.carScene.rotation.y += this.rotationSpeed * deltaTime;
            } else if (this.movementSpeed > 0) {
                this.movementSpeed -= this.turnDeceleration * deltaTime;
                this.carScene.rotation.y -= this.rotationSpeed * deltaTime;
            }
    
            // this.carScene.rotation.y -= this.rotationSpeed * deltaTime;
            // (this.movementSpeed > 0) ? this.movementSpeed -= this.turnDeceleration * deltaTime : this.movementSpeed += this.turnDeceleration * deltaTime;
            
            // console.log("Right");
        }

        this.carScene.position.x += this.movementSpeed * Math.sin(this.carScene.rotation.y) * deltaTime;
        this.carScene.position.z += this.movementSpeed * Math.cos(this.carScene.rotation.y) * deltaTime;
        
        
    }


    // Function to handle collisions with OBB
    handleCollisions(playerOBB, botOBB, leftBoundaryHitbox, rightBoundaryHitbox, deltaTime) {

        // Update the material of the hitbox based on collision state
        const collisionMaterial = new THREE.MeshBasicMaterial({
            color: 0xFF0000, // Red color indicates collision
            visible: this.scene.debugMode,
            wireframe: true
        });

        

        // Check for collision with the bot
        if (playerOBB.intersectsOBB(botOBB)) {
            // Resolve collision with the bot (e.g., separate objects)
            this.colliding = true;
            this.hitbox.material = collisionMaterial;
            this.resolveCollision(this.carScene, this.scene.bot.carScene);
            this.movementSpeed -= this.acceleration * 2 *deltaTime;
            console.log("Hit car");
        }

        // Check collision with the left boundary
        if (boxIntersectsPath(playerOBB, leftBoundaryHitbox)) {
            // Push player away from the left boundary
            this.colliding = true;
            this.hitbox.material = collisionMaterial;
            console.log("Hit left wall");

            this.resetToLastCheckpoint();
        }

        // Check collision with the right boundary
        if (boxIntersectsPath(playerOBB, rightBoundaryHitbox)) {
            // Push player away from the right boundary
            this.colliding = true;
            this.hitbox.material = collisionMaterial;
            console.log("Hit right wall");

            this.resetToLastCheckpoint();
        }
    }

    // Function to resolve collision between two objects
    resolveCollision(object1, object2) {
        // Example: Separate objects along the collision normal
        const separation = object1.position.clone().sub(object2.position).normalize();
        object1.position.add(separation.clone().multiplyScalar(0.2)); // Move object1 away
        object2.position.sub(separation.clone().multiplyScalar(0.2)); // Move object2 away
    }

    handleFinish(playerOBB, finishLineHitbox) {
        if (playerOBB.intersectsOBB(finishLineHitbox) ){
            console.log("Player finished");
            this.colliding = true;
            this.hitbox.material = new THREE.MeshBasicMaterial({
                color: 0xA020F0, // Purple
                visible: this.scene.debugMode,
                wireframe: true
            });
            if(this.scene.playerPosition == 0) {
                this.scene.playerPosition = 1;
            }
            this.scene.currentState = this.scene.GAME_STATES.FINISHED;
        }

        
    }

    handleCheckpoints(playerOBB, checkpointHitbox) {
        // console.log(checkpointHitbox);

        for(let i = 0; i < checkpointHitbox.length; i++) {
            if(playerOBB.intersectsOBB(checkpointHitbox[i])) {
                this.colliding = true;
                this.hitbox.material = new THREE.MeshBasicMaterial({
                    color: 0xFFFF00, // Yellow
                    visible: this.scene.debugMode,
                    wireframe: true
                });
                // console.log("Passing");
            }

        }

        if(this.checkpointNumber < checkpointHitbox.length && playerOBB.intersectsOBB(checkpointHitbox[this.checkpointNumber])) {
            console.log("Passed checkpoint ", this.checkpointNumber);
            this.checkpointNumber++;
            
        }

    }

    resetToLastCheckpoint() {
        this.movementSpeed = 0;
        const lastCheckpoint = (this.checkpointNumber==0) ? 0 : this.checkpointNumber-1;
        this.carScene.position.copy(this.track.checkpointHitbox[lastCheckpoint].center);

        const rotation = new THREE.Vector3(
            this.track.checkpointHitbox[lastCheckpoint].rotation,  // Second element of the first row (m12)
            this.track.checkpointHitbox[lastCheckpoint].rotation,  // Second element of the second row (m22)
            this.track.checkpointHitbox[lastCheckpoint].rotation   // Second element of the third row (m32)
        );

        // const rotation = new THREE.Vector3().setFromMatrix3Row(this.track.checkpointHitbox[lastCheckpoint].rotation, 1);
        // this.carScene.rotation.copy(rotation);
    }


    update(deltaTime) {
        if(!this.loading){

            this.handleInput(deltaTime);

            // Update speed bar height (based on movementSpeed between 0 and maxForwardSpeed)
            const normalizedSpeed = (this.movementSpeed > 0) ? Math.min(Math.max(this.movementSpeed, 0), this.maxForwardSpeed) : Math.min(Math.max(Math.abs(this.movementSpeed), 0), this.maxForwardSpeed);
            const normalizedHeight = (normalizedSpeed / this.maxForwardSpeed) * 200; // Map speed to bar height (200px max)

            this.speedBarElement.style.height = `${normalizedHeight}px`;
            
            // Update the position of the hitbox to match the carScene position
            if (this.hitbox && this.carScene) {
                const box = new THREE.Box3().setFromObject(this.carScene);
                const boxCenter = box.getCenter(new THREE.Vector3());

                this.boundingBox.center.copy(boxCenter);
                this.boundingBox.rotation = getRotationMatrix(this.carScene.rotation);

                this.hitbox.position.copy(boxCenter);
                this.hitbox.rotation.copy(this.carScene.rotation);
            }
            

            // Check collisions and handle physics

            this.colliding = false;

            this.handleCollisions(this.boundingBox, this.scene.bot.boundingBox, this.track.leftBoundaryHitbox, this.track.rightBoundaryHitbox, deltaTime);

            this.handleCheckpoints(this.boundingBox, this.track.checkpointHitbox);

            this.handleFinish(this.boundingBox, this.track.finishLineHitbox);

            if(!this.colliding) {
                this.hitbox.material = new THREE.MeshBasicMaterial({
                    color: 0xFFFFFF, // White color indicates no collision
                    visible: this.scene.debugMode,
                    wireframe: true
                });
            }

        }
    }

   


    logPosition() {
        const currentPosition = this.carScene.position.clone();
        this.positions.push(currentPosition);
        console.log('Position logged:', currentPosition);
    }

    exportPositionsToFile() {
        if (this.positions.length === 0) {
            console.log('No positions logged.');
            return;
        }

        // Format each position coordinate to 2 decimal places
        const positionStrings = this.positions.map(pos => {
            const formattedX = pos.x.toFixed(2);
            const formattedY = pos.y.toFixed(2);
            const formattedZ = pos.z.toFixed(2);
            // return `(${formattedX}, ${formattedY}, ${formattedZ})`;
            return `{ x: ${formattedX}, y: ${formattedY}, z: ${formattedZ}},`;
            // { x: 13.54, y: 0.00, z: -316.50 },
            // return `this.path.add(new YUKA.Vector3(${formattedX}, ${formattedY}, ${formattedZ}));`;
        });
        const positionsText = positionStrings.join('\n');

        // Create a Blob containing all logged positions
        const blob = new Blob([positionsText], { type: 'text/plain;charset=utf-8' });

        // Use FileSaver.js to save the Blob as a text file
        saveAs(blob, 'positions.txt');

        console.log("Exported positions");
    }
}