import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as YUKA from 'yuka';
import Car from './Car';

export default class Bot extends Car {

    initialPosition = THREE.Vector3;
    initialRotation = THREE.Quaternion;


    acceleration = 0.08;
    maxSpeed = 30;
    deceleration = 0.05;


    constructor(scene, modelURL, initialPosition) {
        super(scene, modelURL);
        this.initialPosition = initialPosition;

        //TODO: move this to track class
        // Path for bot to follow
        this.path = new YUKA.Path();
        this.path.add(new YUKA.Vector3(2.77, 0.00, 75.66));
        this.path.add(new YUKA.Vector3(-6.04, 0.00, 322.62));
        this.path.add(new YUKA.Vector3(-30.82, 0.00, 616.35));
        this.path.add(new YUKA.Vector3(27.75, 0.00, 737.82));
        this.path.add(new YUKA.Vector3(179.42, 0.00, 713.71));
        this.path.add(new YUKA.Vector3(265.42, 0.00, 778.47));
        this.path.add(new YUKA.Vector3(353.60, 0.00, 857.22));
        this.path.add(new YUKA.Vector3(449.60, 0.00, 794.27));
        this.path.add(new YUKA.Vector3(503.21, 0.00, 688.85));
        this.path.add(new YUKA.Vector3(499.22, 0.00, 563.23));
        this.path.add(new YUKA.Vector3(426.72, 0.00, 439.82));
        this.path.add(new YUKA.Vector3(439.74, 0.00, 308.90));
        this.path.add(new YUKA.Vector3(499.69, 0.00, 196.97));
        this.path.add(new YUKA.Vector3(570.16, 0.00, 83.15));
        this.path.add(new YUKA.Vector3(688.55, 0.00, 52.71));
        this.path.add(new YUKA.Vector3(757.79, 0.00, 153.99));
        this.path.add(new YUKA.Vector3(703.82, 0.00, 259.03));
        this.path.add(new YUKA.Vector3(598.96, 0.00, 364.93));
        this.path.add(new YUKA.Vector3(627.57, 0.00, 493.33));
        this.path.add(new YUKA.Vector3(690.33, 0.00, 603.98));
        this.path.add(new YUKA.Vector3(663.54, 0.00, 916.86));
        this.path.add(new YUKA.Vector3(761.97, 0.00, 1094.38));
        this.path.add(new YUKA.Vector3(909.76, 0.00, 1014.44));
        this.path.add(new YUKA.Vector3(1127.03, 0.00, 622.34));
        this.path.add(new YUKA.Vector3(1236.38, 0.00, 498.92));
        this.path.add(new YUKA.Vector3(1405.58, 0.00, 463.51));

        const position = [];
        for(let i = 0; i < this.path._waypoints.length; i++) {
            const waypoint = this.path._waypoints[i];
            position.push(waypoint.x, waypoint.y, waypoint.z);
        }

        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));

        const lineMaterial = new THREE.LineBasicMaterial();
        const lines = new THREE.LineLoop(lineGeometry, lineMaterial);
        scene.add(lines);


        this.loadGLTF(modelURL, scene, this.scale, this.rotationAngle, initialPosition);

        this.initializeAI();
    }

    initializeAI() {
        this.entityManager = new YUKA.EntityManager();

        this.vehicle = new YUKA.Vehicle();
        this.entityManager.add(this.vehicle);

        // Add FollowPathBehavior to the steering behavior
        this.followPathBehavior = new YUKA.FollowPathBehavior(this.path, 10);

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
