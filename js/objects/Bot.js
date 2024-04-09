import * as THREE from 'three';
import * as YUKA from 'yuka';
import Car from './Car';

export default class Bot extends Car {

    initialPosition = THREE.Vector3;
    initialRotation = THREE.Quaternion;


    acceleration = 3;
    maxSpeed = 80;
    deceleration = 2;
    velocity = 0;

    difficulty = "normal";


    constructor(scene, modelURL, initialPosition, track, difficulty) {
        super(scene, modelURL);
        this.initialPosition = initialPosition;

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

        // console.log("bot", this.difficulty);
    }

    initializeAI() {
        this.entityManager = new YUKA.EntityManager();

        this.vehicle = new YUKA.Vehicle();
        this.entityManager.add(this.vehicle);

        // Add FollowPathBehavior to the steering behavior
        this.followPathBehavior = new YUKA.FollowPathBehavior(this.track.path, 15);

        // this.followPathBehavior = new YUKA.FollowPathBehavior(this.path, {
        //     arriveDistance: 1,          // Distance threshold for considering a path point reached
        //     pathOffset: 0.5,            // Offset from the path to aim towards
        //     predictionTime: 0.1,        // Time horizon for future predictions
        //     desiredVelocity: 0.5,       // Target velocity along the path
        //     maxAcceleration: 0.1,       // Maximum acceleration
        //     maxSpeed: 1.0               // Maximum speed
        // });


        this.vehicle.steering.add(this.followPathBehavior);

        // Set initial position of the vehicle
        this.vehicle.position.copy(this.initialPosition);

        // Adjust bot's movement parameters
        this.vehicle.maxSpeed = this.maxSpeed; // Set maximum speed (adjust as needed)
        this.vehicle.acceleration = this.acceleration; // Set acceleration rate
        this.vehicle.deceleration = this.deceleration; // Set deceleration rate
    }

    update(deltaTime) {

        if (!this.loading) {

            
            this.entityManager.update(deltaTime);
            this.updateCarScene(); // Update car's scene based on vehicle's position and rotation

            // Update the position of the hitbox to match the carScene position
            if (this.hitbox && this.carScene) {
                this.boundingBox = new THREE.Box3().setFromObject(this.carScene);
                this.hitbox.position.copy(this.boundingBox.getCenter(new THREE.Vector3()));
                this.hitbox.rotation.copy(this.carScene.rotation);
            }

            this.previousPosition = this.carScene.position.clone();
            this.carScene.position.add(this.velocity.clone().multiplyScalar(deltaTime));

            // Calculate approximate velocity
            const deltaPosition = this.carScene.position.clone().sub(this.previousPosition);
            this.velocity = deltaPosition.divideScalar(deltaTime);

            // console.log(this.vehicle.initialPosition);

            console.log(this.maxSpeed);
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
