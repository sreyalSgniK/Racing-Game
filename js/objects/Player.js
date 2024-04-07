import * as THREE from 'three';
import Car from './Car';
// import { keyStates } from '../Controls';
import { saveAs } from 'file-saver'; // Import FileSaver.js for file saving
import { boxIntersectsPath} from '../utils';

export default class Player extends Car {

    boxHelper = THREE.BoxHelper;
    hitbox = THREE.Mesh;

    velocity = THREE.Vector3;

    constructor(scene = THREE.Scene, modelURL = String) {
        super(scene, modelURL);

        this.velocity = new THREE.Vector3(0,0,0);

        super.loadGLTF(this.modelURL, this.scene, this.scale, this.rotationAngle).then(() => {
            super.setupHitbox();
        })
        .catch((error) => {
            console.error('Error loading model:', error);
        });

        this.isLogging = false;
        this.positions =[];

        this.keyStates = {};

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
        
    
        // if (this.keyStates['KeyL']) {
        //     this.keyStates['KeyL'] = false;
        //     this.boxHelper = new THREE.BoxHelper(this.carScene, 0xffff00);
        //     this.scene.add(this.boxHelper); 
        // }

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
                this.movementSpeed += this.acceleration * deltaTime;
            }
            
            // console.log("Up");
        }
        if (this.keyStates['KeyS']) {
    
            if(this.movementSpeed > this.maxBackwardSpeed){
                this.movementSpeed -= this.acceleration * 2 * deltaTime;
            }
            
            // console.log("Down");
        }
        if (this.keyStates['KeyA']) {
    
            this.carScene.rotation.y += this.rotationSpeed * deltaTime;
            (this.movementSpeed > 0) ? this.movementSpeed -= this.turnDeceleration * deltaTime : this.movementSpeed += this.turnDeceleration * deltaTime;
            
            // console.log("Left");
        }
        if (this.keyStates['KeyD']) {
    
            this.carScene.rotation.y -= this.rotationSpeed * deltaTime;
            (this.movementSpeed > 0) ? this.movementSpeed -= this.turnDeceleration * deltaTime : this.movementSpeed += this.turnDeceleration * deltaTime;
            
            // console.log("Right");
        }

        this.carScene.position.x += this.movementSpeed * Math.sin(this.carScene.rotation.y) * deltaTime;
        this.carScene.position.z += this.movementSpeed * Math.cos(this.carScene.rotation.y) * deltaTime;
        
        
        // console.log(this.movementSpeed);
    }

    

    // Function to calculate swept AABB (Axis-Aligned Bounding Box)
    getSweptAABB(box, velocity) {
        const min = box.min.clone();
        const max = box.max.clone();

        if (velocity.x < 0) {
            min.x += velocity.x;
        } else {
            max.x += velocity.x;
        }

        if (velocity.y < 0) {
            min.y += velocity.y;
        } else {
            max.y += velocity.y;
        }

        if (velocity.z < 0) {
            min.z += velocity.z;
        } else {
            max.z += velocity.z;
        }

        return new THREE.Box3(min, max);
    }

    // Function to handle collisions with swept AABB
    handleCollisions(playerSweptBox, botBox, leftBoundary, rightBoundary, deltaTime) {
        // Check for collision with the bot
        if (playerSweptBox.intersectsBox(botBox)) {
            // Resolve collision with the bot (e.g., separate objects)
            this.resolveCollision(this.carScene, this.scene.bot.carScene);
            this.movementSpeed -= this.acceleration * 2 *deltaTime;
        }

        // Check collision with the left boundary
        if (boxIntersectsPath(playerSweptBox, leftBoundary)) {
            // Push player away from the left boundary
            this.movementSpeed -= this.acceleration * 2 *deltaTime;
        }

        // Check collision with the right boundary
        if (boxIntersectsPath(playerSweptBox, rightBoundary)) {
            // Push player away from the right boundary
            this.movementSpeed -= this.acceleration * 2 *deltaTime;
        }
    }

    // Function to resolve collision between two objects
    resolveCollision(object1, object2) {
        // Example: Separate objects along the collision normal
        const separation = object1.position.clone().sub(object2.position).normalize();
        object1.position.add(separation.clone().multiplyScalar(0.2)); // Move object1 away
        object2.position.sub(separation.clone().multiplyScalar(0.2)); // Move object2 away
    }



    update(deltaTime) {
        if(!this.loading){
            this.handleInput(deltaTime);

            // console.log(this.movementSpeed);

            // console.log(this.carScene.position);

            // Update speed bar height (based on movementSpeed between 0 and maxForwardSpeed)
            const normalizedSpeed = (this.movementSpeed > 0) ? Math.min(Math.max(this.movementSpeed, 0), this.maxForwardSpeed) : Math.min(Math.max(Math.abs(this.movementSpeed), 0), this.maxForwardSpeed);
            const normalizedHeight = (normalizedSpeed / this.maxForwardSpeed) * 200; // Map speed to bar height (200px max)

            this.speedBarElement.style.height = `${normalizedHeight}px`;

            
        
            // Update the position of the hitbox to match the carScene position
            if (this.hitbox && this.carScene) {
                this.boundingBox = new THREE.Box3().setFromObject(this.carScene);
                
                this.hitbox.position.copy(this.boundingBox.getCenter(new THREE.Vector3()));
                this.hitbox.rotation.copy(this.carScene.rotation);
            }

            // if(this.boundingBox.intersectsBox(this.scene.bot.boundingBox) || boxIntersectsPath(this.boundingBox, this.scene.track.leftBoundary) || boxIntersectsPath(this.boundingBox, this.scene.track.rightBoundary)) 
            // {
            //     const newMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000, visible: this.scene.debugMode, wireframe: true });
            //     this.hitbox.material = newMaterial;
            // } else {
            //     const newMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, visible: this.scene.debugMode, wireframe: true });
            //     this.hitbox.material = newMaterial;
            // }

            this.previousPosition = this.carScene.position.clone();
            this.carScene.position.add(this.velocity.clone().multiplyScalar(deltaTime));

            // Calculate approximate velocity
            const deltaPosition = this.carScene.position.clone().sub(this.previousPosition);
            this.velocity = deltaPosition.divideScalar(deltaTime);

            const playerSweptBox = this.getSweptAABB(this.boundingBox, this.velocity);

            // Check collisions and handle physics
            this.handleCollisions(playerSweptBox, this.scene.bot.boundingBox, this.scene.track.leftBoundary, this.scene.track.rightBoundary, deltaTime);

            // Update the material of the hitbox based on collision state
            const collisionMaterial = new THREE.MeshBasicMaterial({
                color: 0xFF0000, // Red color indicates collision
                visible: this.scene.debugMode,
                wireframe: true
            });

            const noCollisionMaterial = new THREE.MeshBasicMaterial({
                color: 0xFFFFFF, // White color indicates no collision
                visible: this.scene.debugMode,
                wireframe: true
            });

            // Apply the appropriate material based on collision state
            this.hitbox.material = this.boundingBox.intersectsBox(this.scene.bot.boundingBox) ||
                                    boxIntersectsPath(this.boundingBox, this.scene.track.leftBoundary) ||
                                    boxIntersectsPath(this.boundingBox, this.scene.track.rightBoundary)
                ? collisionMaterial
                : noCollisionMaterial;

            // console.log(this.boundingBox.getCenter(new THREE.Vector3()));

            // // Update BoxHelper to match carScene
            // if (this.boxHelper && this.carScene) {
            //     this.boxHelper.setFromObject(this.carScene);
            //     this.boxHelper.update(); // Ensure BoxHelper updates its geometry
            // }

            // console.log(this.carScene.rotation);
            // console.log(this.boxHelper.rotation);
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