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

    setupHitbox() {
        if (!this.carScene) return; // Ensure carScene is loaded

        this.boundingBox = new THREE.Box3().setFromObject(this.carScene);

        const boxSize = this.boundingBox.getSize(new THREE.Vector3());
        const boxCenter = this.boundingBox.getCenter(new THREE.Vector3());
        // console.log(boxCenter);

        const hitboxGeometry = new THREE.BoxGeometry(boxSize.x, boxSize.y, boxSize.z);
        const hitboxMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, visible: this.scene.debugMode, wireframe: true });
        this.hitbox = new THREE.Mesh(hitboxGeometry, hitboxMaterial);
        this.hitbox.position.copy(boxCenter);
        this.scene.add(this.hitbox);
    }

    scaleGLTF(scene, scale) {
        scene.scale.set(scale, scale, scale);
    }

    rotateGLTFonYAxis(scene, rotationAngle) {
        scene.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotationAngle);
    }

    loadGLTF(modelURL, scene, scale, rotationAngle) {
        return new Promise((resolve, reject) => {
            if (!this.modelURL) {
                reject(new Error('Model URL is not provided.'));
                return;
            }
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
                    resolve(); // Resolve the promise once loading is complete
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
        });
    }

    
    

    
}