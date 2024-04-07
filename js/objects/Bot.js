import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as YUKA from 'yuka';
import Car from './Car';

export default class Bot extends Car {

    initialPosition = THREE.Vector3;
    initialRotation = THREE.Quaternion;


    acceleration = 2;
    maxSpeed = 50;
    deceleration = 1;
    velocity = 0;


    constructor(scene, modelURL, initialPosition, track) {
        super(scene, modelURL);
        this.initialPosition = initialPosition;

        this.track = track;

        this.velocity = new THREE.Vector3(0,0,0);


        super.loadGLTF(this.modelURL, this.scene, this.scale, this.rotationAngle).then(() => {
            super.setupHitbox();
        })
        .catch((error) => {
            console.error('Error loading model:', error);
        });

        this.initializeAI();
    }

    initializeAI() {
        this.entityManager = new YUKA.EntityManager();

        this.vehicle = new YUKA.Vehicle();
        this.entityManager.add(this.vehicle);

        // Add FollowPathBehavior to the steering behavior
        this.followPathBehavior = new YUKA.FollowPathBehavior(this.track.path, 10);

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

    destroy() {
        this.entityManager.clear(); // Clear all entities managed by the entity manager
        this.entityManager = null;
        this.vehicle = null;
        this.steering = null;
    }
}
