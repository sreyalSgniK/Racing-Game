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
        this.path.add(new YUKA.Vector3(3.5, 0, 40));
        this.path.add(new YUKA.Vector3(-3.2, 0, 290));
        this.path.add(new YUKA.Vector3(-21.9, 0, 555.9));
        this.path.add(new YUKA.Vector3(-33.5, 0, 650));
        this.path.add(new YUKA.Vector3(-11.6, 0, 711.3));
        this.path.add(new YUKA.Vector3(71.9, 0, 747.7));
        this.path.add(new YUKA.Vector3(157.5, 0, 709.3));
        this.path.add(new YUKA.Vector3(239.4, 0, 743.3));

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
        this.followPathBehavior = new YUKA.FollowPathBehavior(this.path), {
            arriveDistance: 10,        // Increase arrive distance
            pathOffset: 2,            // Offset from the path to aim towards
        };

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
        // this.carScene.rotation.copy(this.vehicle.rotation);
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
