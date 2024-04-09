import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class Track {
    scene = THREE.Scene;
    
    trackURL = "";

    scale = 0.1;

    rotationAngle = Math.PI*5/6+Math.PI/2;

    trackScene = null;

    x = -1260;
    y = 0;
    z = -940;


    constructor(scene = THREE.Scene, trackURL = String) {
        this.scene = scene;
        this.trackURL = trackURL;
        this.loadGLTF(scene, trackURL);
    }

    setGLTFPosition(trackScene,x,y,z){
        trackScene.position.set(x,y,z);
    }

    scaleGLTF(trackScene, scale) {
        trackScene.scale.set(scale, scale, scale);
    }

    rotateGLTFonYAxis(trackScene, rotationAngle) {
        trackScene.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotationAngle);
    }

    loadGLTF(scene, trackURL) {
        this.loading = true; // Set loading flag to true
        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            trackURL,
            // called when the resource is loaded
            ( gltf ) => {
                this.trackScene = gltf.scene;
                

                this.setGLTFPosition(this.trackScene, this.x, this.y, this.z);
                this.scaleGLTF(this.trackScene, this.scale);
                this.rotateGLTFonYAxis(this.trackScene, this.rotationAngle);

                scene.add( gltf.scene );
                this.loading = false; // Set loading flag to false

            },
            // called while loading is progressing
            ( xhr ) => {

                // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            ( error ) => {

                console.log( 'An error happened' , error);

            }
        );
    }
}

