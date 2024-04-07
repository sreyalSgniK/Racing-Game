import * as THREE from 'three';

export default class TPSCamera {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;
        

        // Create a new perspective camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Set initial camera position and orientation relative to the player
        this.offset = new THREE.Vector3(0, 5, -10); // Offset behind and above the player
        this.smoothFactor = 0.05; // Adjust the smooth factor (0 to 1)
        this.update(); // Update camera position and orientation based on player's initial position

        // Initialize camera position and look-at target
        this.targetPosition = new THREE.Vector3();
        this.cameraPosition = new THREE.Vector3();

        // Add the camera to the scene
        this.scene.add(this.camera);

    }

    update() {
        if(!this.player.loading) {
            const playerPosition = this.player.carScene.position.clone();
            const playerRotation = this.player.carScene.rotation.clone();

            // Calculate target position for the camera
            const cameraOffset = this.offset.clone().applyEuler(playerRotation);
            this.targetPosition.copy(playerPosition).add(cameraOffset);

            // Smoothly interpolate camera position towards the target position
            this.cameraPosition.lerp(this.targetPosition, this.smoothFactor);

            // Set camera position and look at the player's position
            this.camera.position.copy(this.cameraPosition);
            this.camera.lookAt(playerPosition);
        }
    }
}