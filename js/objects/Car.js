import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { createOBBWireframe, getHalfVector} from '../utils';
import { OBB } from 'three/addons/math/OBB.js';

// Abstract class for car used for players & bots
export default class Car {
    scene = THREE.Scene;
    
    modelURL = "";
    
    carScene = null;

    boundingBox = OBB;

    initialPosition = THREE.Vector3;
    

    // Model parameters
    scale = 0.03;
    rotationAngle = 0.9*Math.PI;

    // Car parameters
    movementSpeed = 0;
    rotationSpeed = 0.8;
    acceleration = 10;
    maxForwardSpeed = 75;
    maxBackwardSpeed = -30;
    deceleration = 3;
    turnDeceleration = 8;

    // Loading flag: Program will wait for the models to finish loading before continuing
    loading = true;

    constructor(scene = THREE.Scene, modelURL = String, initialPosition = THREE.Vector3) {
        this.scene = scene;
        this.modelURL = modelURL;
        this.initialPosition = initialPosition;
    }

    setupHitbox() {
        if (!this.carScene) return; // Ensure carScene is loaded

        const box = new THREE.Box3().setFromObject(this.carScene);

        const boxSize = box.getSize(new THREE.Vector3());
        const boxCenter = box.getCenter(new THREE.Vector3());

        // console.log(boxSize);

        this.boundingBox = new OBB(boxCenter, getHalfVector(boxSize), new THREE.Matrix3());
        // console.log(boxCenter);

        // const wireframe = createOBBWireframe(this.boundingBox);
        // this.scene.add(wireframe);

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
                    this.carScene.castShadow = true;
                    this.scaleGLTF(this.carScene, scale);
                    this.carScene.position.copy(this.initialPosition);
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