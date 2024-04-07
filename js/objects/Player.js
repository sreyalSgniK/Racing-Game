import * as THREE from 'three';
import Car from './Car';
// import { keyStates } from '../Controls';
import { saveAs } from 'file-saver'; // Import FileSaver.js for file saving

export default class Player extends Car {
    // scale = 0.03;
    // rotationAngle = 0.9*Math.PI;

    constructor(scene = THREE.Scene, modelURL = String) {
        super(scene, modelURL);

        super.loadGLTF(this.modelURL, this.scene, this.scale, this.rotationAngle);

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
        
        
        this.carScene.position.x += this.movementSpeed * Math.sin(this.carScene.rotation.y) * deltaTime;
        this.carScene.position.z += this.movementSpeed * Math.cos(this.carScene.rotation.y) * deltaTime;

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
            
            // console.log("Left");
        }
        if (this.keyStates['KeyD']) {
    
            this.carScene.rotation.y -= this.rotationSpeed * deltaTime;
            
            // console.log("Right");
        }
        
        
        // console.log(this.movementSpeed);
    }


    update(deltaTime) {
        if(!this.loading){
            this.handleInput(deltaTime);

            // console.log(this.movementSpeed);
        
        // console.log(this.carScene.position);
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
            return `this.path.add(new YUKA.Vector3(${formattedX}, ${formattedY}, ${formattedZ}));`;
        });
        const positionsText = positionStrings.join('\n');

        // Create a Blob containing all logged positions
        const blob = new Blob([positionsText], { type: 'text/plain;charset=utf-8' });

        // Use FileSaver.js to save the Blob as a text file
        saveAs(blob, 'positions.txt');

        console.log("Exported positions");
    }
}