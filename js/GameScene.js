import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import  Player from "./objects/Player";
import Track from "./objects/Track";
import TPSCamera from "./TPSCamera";

export default class GameScene extends THREE.Scene {

    width = 0;
    height = 0;

    TPSCamera = TPSCamera;
    renderer = THREE.WebGLRenderer;

    orbitals = OrbitControls;


    player = Player;

    track = Track;



    constructor() {
        super();
        
        // Set up scene
        this.background = new THREE.Color(0x808080); // Set background color to grey
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        // Set up renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );


        // Set up camera
        // this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
        // this.camera.position.set( 50, 100, 50 );
        // this.orbitals = new OrbitControls( this.camera, this.renderer.domElement );
        // this.orbitals.update();

        // Add race track
        this.track = new Track(this, "models/desert_map.glb");

        // Add player
        this.player = new Player(this, "models/car2.glb");

        // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // let cube = new THREE.Mesh( geometry, material );
        // this.add( cube );

        // Add a third person camera that follows the player
        this.TPSCamera = new TPSCamera(this, this.player);

        
        // const axesHelper = new THREE.AxesHelper( 500 );
        // this.add( axesHelper );



        // Add light
        const light = new THREE.AmbientLight(); 
        this.add( light );



        // Set up window resizing
        window.addEventListener("resize", () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;

            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix;
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }



    update() {
        if(!this.player.loading) {

            this.player.update();

            this.TPSCamera.update();

        }

        this.renderer.render( this, this.TPSCamera.camera );
    }

}