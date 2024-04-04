import * as THREE from 'three';
import Car from './Car';
// import { keyStates } from '../Controls';

export default class Player extends Car {
    scale = 0.01;

    constructor(scene = THREE.Scene, modelURL) {
        super(scene, modelURL);

        super.loadGLTF(this.modelURL, this.scene, this.scale);


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


    handleInput() {
        
        if(!this.loading){
            this.carScene.position.x += this.movementSpeed * Math.sin(this.carScene.rotation.y);
	        this.carScene.position.z += this.movementSpeed * Math.cos(this.carScene.rotation.y);

            if (this.keyStates['KeyW']) {
        
                if(this.movementSpeed < this.maxForwardSpeed){
                    this.movementSpeed += this.acceleration;
                }
                
                console.log("Up");
            }
            if (this.keyStates['KeyS']) {
        
                if(this.movementSpeed > this.maxBackwardSpeed){
                    this.movementSpeed -= this.acceleration;
                }
                
                console.log("Down");
            }
            if (this.keyStates['KeyA']) {
        
                this.carScene.rotation.y += this.rotationSpeed;
                
                console.log("Left");
            }
            if (this.keyStates['KeyD']) {
        
                this.carScene.rotation.y -= this.rotationSpeed;
                
                console.log("Right");
            }
        }
        
        console.log(this.movementSpeed);
    }


    update() {
        this.handleInput();
        
        // console.log(this.carScene);
    }
}