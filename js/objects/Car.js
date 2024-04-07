import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Abstract class for car used for players & bots
export default class Car {
    scene = THREE.Scene;
    
    modelURL = "";
    
    carScene = null;

    // Model parameters
    scale = 0.03;
    rotationAngle = 0.9*Math.PI;

    // Car parameters
    movementSpeed = 0;
    rotationSpeed = 0.8;
    acceleration = 10;
    maxForwardSpeed = 80;
    maxBackwardSpeed = -30;
    deceleration = 3;
    turnDeceleration = 8;

    // Loading flag: Program will wait for the models to finish loading before continuing
    loading = true;

    constructor(scene = THREE.Scene, modelURL = String) {
        this.scene = scene;
        this.modelURL = modelURL;
        
    }

    scaleGLTF(scene, scale) {
        scene.scale.set(scale, scale, scale);
    }

    rotateGLTFonYAxis(scene, rotationAngle) {
        scene.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotationAngle);
    }

    loadGLTF(modelURL, scene, scale, rotationAngle) {
        let loader = new GLTFLoader();
        loader.load(
            // resource URL
            modelURL,
            // called when the resource is loaded
            (gltf) => {
                this.carScene = gltf.scene;
                this.scaleGLTF(this.carScene, scale);
                scene.add(this.carScene);
                this.loading = false; // Set loading flag to false
            },
            // called while loading is progressing
            (xhr) => {

                // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            (error) => {
                console.log('An error happened', error);
            }
        );
    }

    
}