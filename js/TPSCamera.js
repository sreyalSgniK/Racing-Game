import * as THREE from 'three';

export default class TPSCamera {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;
        

        // Create a new perspective camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Set initial camera position and orientation relative to the player
        this.offset = new THREE.Vector3(0, 5, -10); // Offset behind and above the player
        this.update(); // Update camera position and orientation based on player's initial position

        // Add the camera to the scene
        this.scene.add(this.camera);

    }

    update() {
        if(!this.player.loading) {
            // Update camera position and orientation based on player's position and rotation
            const playerPosition = this.player.carScene.position.clone();
            const playerRotation = this.player.carScene.rotation.clone();

            // Calculate camera position relative to player using offset and player's rotation
            const cameraOffset = this.offset.clone().applyEuler(playerRotation);
            const cameraPosition = playerPosition.clone().add(cameraOffset);

            // Set camera position and look at the player's position
            this.camera.position.copy(cameraPosition);
            this.camera.lookAt(playerPosition);
        }
    }
}