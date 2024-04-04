import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import  Player from "./objects/Player";

export default class GameScene extends THREE.Scene {

    width = 0;
    height = 0;

    camera = THREE.PerspectiveCamera;
    renderer = THREE.WebGLRenderer;

    orbitals = OrbitControls;


    player = Player;



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
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.set( 0, 2, 10 );
        this.orbitals = new OrbitControls( this.camera, this.renderer.domElement );
        this.orbitals.update();

        // Add player
        this.player = new Player(this, "models/car2.glb");

        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        let cube = new THREE.Mesh( geometry, material );
        this.add( cube );




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

        this.player.update();

        this.renderer.render( this, this.camera );
    }

}