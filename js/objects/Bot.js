import * as THREE from 'three';
import * as YUKA from 'yuka';
import Car from './Car';
import {getRotationMatrix} from '../utils';

export default class Bot extends Car {

    acceleration = 3;
    maxSpeed = 80;
    deceleration = 2;
    velocity = 0;

    difficulty = "normal";


    constructor(scene, modelURL, initialPosition, track, difficulty) {
        super(scene, modelURL, initialPosition);

        this.track = track;

        this.difficulty = difficulty;

        this.velocity = new THREE.Vector3(0,0,0);

    
        super.loadGLTF(this.modelURL, this.scene, this.scale, this.rotationAngle).then(() => {
            super.setupHitbox();
        })
        .catch((error) => {
            console.error('Error loading model:', error);
        });

        this.setDifficulty(this.difficulty); 

        this.initializeAI();

    }

    initializeAI() {
        this.entityManager = new YUKA.EntityManager();

        this.vehicle = new YUKA.Vehicle();
        this.entityManager.add(this.vehicle);

        // Add FollowPathBehavior to the steering behavior
        this.followPathBehavior = new YUKA.FollowPathBehavior(this.track.path, 15);

        this.vehicle.steering.add(this.followPathBehavior);

        // Set initial position of the vehicle
        this.vehicle.position.copy(this.initialPosition);

        // Adjust bot's movement parameters
        this.vehicle.maxSpeed = this.maxSpeed; // Set maximum speed (adjust as needed)
        this.vehicle.acceleration = this.acceleration; // Set acceleration rate
        this.vehicle.deceleration = this.deceleration; // Set deceleration rate
    }

    handleFinish(OBB, finishLineHitbox) {
        if (OBB.intersectsOBB(finishLineHitbox) ){
            console.log("Bot Finished");
            if(this.scene.playerPosition == 0) {
                this.scene.playerPosition = 2;
            }
            
        }
    }

    update(deltaTime) {

        if (!this.loading) {
            // this.boxHelper.setFromObject(this.carScene);
            
            this.entityManager.update(deltaTime);
            this.updateCarScene(); // Update car's scene based on vehicle's position and rotation

            // Update the position of the hitbox to match the carScene position
            if (this.hitbox && this.carScene) {
                const boundingBox = new THREE.Box3().setFromObject(this.carScene);
                const boxCenter = boundingBox.getCenter(new THREE.Vector3());

                this.boundingBox.center.copy(boxCenter);
                this.boundingBox.rotation = getRotationMatrix(this.carScene.rotation);

                this.hitbox.position.copy(boxCenter);
                this.hitbox.rotation.copy(this.carScene.rotation);
            }

            this.previousPosition = this.carScene.position.clone();
            this.carScene.position.add(this.velocity.clone().multiplyScalar(deltaTime));

            // Calculate approximate velocity
            const deltaPosition = this.carScene.position.clone().sub(this.previousPosition);
            this.velocity = deltaPosition.divideScalar(deltaTime);

            this.handleFinish(this.boundingBox, this.track.finishLineHitbox);

        }
    }

    updateCarScene() {
        // Update the car's scene (model) based on the vehicle's position and rotation
        this.carScene.position.copy(this.vehicle.position);

        // Calculate the direction vector from the vehicle's velocity
        const direction = this.vehicle.velocity.clone().normalize();

        // Calculate the rotation angle to align the model with the direction vector
        const rotationAngle = Math.atan2(direction.x, direction.z);

        // Set the rotation of the carScene to face the movement direction
        this.carScene.rotation.y = rotationAngle;

    }

    loadGLTF(modelURL, scene, scale, rotationAngle, initialPosition) {
        super.loadGLTF(
            modelURL,
            scene,
            scale,
            rotationAngle,
            (gltf) => {
                this.carScene = gltf.scene;
                this.scaleGLTF(this.carScene, scale);
                
                // Set the bot's initial position
                if (initialPosition) {
                    this.vehicle.position.copy(initialPosition);
                }

                scene.add(this.carScene);
                this.loading = false;
            },
            (xhr) => {
                // Progress callback (optional)
            },
            (error) => {
                console.log('An error happened', error);
            }
        );
    }

    setDifficulty(difficulty) {
        if(difficulty == "hard") {
            this.acceleration = 3;
            this.maxSpeed = 80;
            this.deceleration = 2;
        } else if (difficulty == "normal") {
            this.acceleration = 2.5;
            this.maxSpeed = 70;
            this.deceleration = 1.5;
        } else {
            this.acceleration = 2;
            this.maxSpeed = 60;
            this.deceleration = 1;
        }
        
    }

    destroy() {
        this.entityManager.clear(); // Clear all entities managed by the entity manager
        this.entityManager = null;
        this.vehicle = null;
        this.steering = null;
    }
}
