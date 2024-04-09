import * as THREE from 'three';
import Car from './Car';
// import { keyStates } from '../Controls';

export default class Player extends Car {
    // scale = 0.03;
    // rotationAngle = 0.9*Math.PI;

    constructor(scene = THREE.Scene, modelURL = String) {
        super(scene, modelURL);

        super.loadGLTF(this.modelURL, this.scene, this.scale, this.rotationAngle);


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

        if (this.keyStates['KeyW']) {
    
            if(this.movementSpeed < this.maxForwardSpeed){
                this.movementSpeed += this.acceleration * deltaTime;
            }
            
            // console.log("Up");
        }
        if (this.keyStates['KeyS']) {
    
            if(this.movementSpeed > this.maxBackwardSpeed){
                this.movementSpeed -= this.acceleration * deltaTime;
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
}