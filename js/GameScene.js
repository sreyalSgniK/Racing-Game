import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import  Player from "./objects/Player";
import Track from "./objects/Track";
import TPSCamera from "./TPSCamera";
import Bot from "./objects/Bot";

export default class GameScene extends THREE.Scene {

    GAME_STATES = {
        COUNTDOWN: "countdown",
        RUNNING: "running",
        PAUSED: "paused",
        FINISHED: "finished"
    };
    
    currentState = this.GAME_STATES.RUNNING;

    width = 0;
    height = 0;

    TPSCamera = TPSCamera;
    renderer = THREE.WebGLRenderer;

    orbitals = OrbitControls;

    track = Track;

    player = Player;

    bot = Bot;

    difficulty = "normal";

    debugMode = true;

    playerPosition = 0;

    constructor(difficulty) {
        super();

        this.difficulty = difficulty;
        this.debugMode = true;

        // console.log(this.difficulty);
        
        // Set up scene
        this.background = new THREE.Color(0x808080); // Set background color to grey
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        // Set up renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );


        // Set up camera
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
        this.camera.position.set( 50, 100, 50 );
        this.orbitals = new OrbitControls( this.camera, this.renderer.domElement );
        this.orbitals.update();

        // Add race track
        this.track = new Track(this, "models/desert_map2.glb");

        // Add player
        this.player = new Player(this, "models/car2.glb", new THREE.Vector3(0,0,0));

        // Add bot
        this.bot = new Bot(this, "models/car_blue.glb", new THREE.Vector3(12,0,0), this.track, this.difficulty);

        // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // let cube = new THREE.Mesh( geometry, material );
        // this.add( cube );

        // Add a third person camera that follows the player
        this.TPSCamera = new TPSCamera(this, this.player);

        
        // const axesHelper = new THREE.AxesHelper( 500 );
        // this.add( axesHelper );



        // Add light
        // const light = new THREE.AmbientLight(0xffffff, 2); 
        // const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 2 );
        const sun = new THREE.PointLight( 0xffffff, 4 , 0, 0.1 )
        sun.position.set(500,1000,500);
        sun.castShadow = true;

        //Set up shadow properties for the light
        sun.shadow.mapSize.width = 1024;
        sun.shadow.mapSize.height = 1024;
        sun.shadow.camera.near = 0.5;
        sun.shadow.camera.far = 1000;

        this.add( sun );

        if(this.debugMode) {
            const sphereSize = 1;
            const pointLightHelper = new THREE.PointLightHelper( sun, sphereSize );
            this.add( pointLightHelper );

            //Create a helper for the shadow camera (optional)
            const helper = new THREE.CameraHelper( sun.shadow.camera );
            this.add( helper );
        }

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1); 
        this.add(ambientLight);

        // const dLightHelper = new THREE.DirectionalLightHelper(light, 5);
        // this.add(dLightHelper);

        // const dLightShadowHelper = new THREE.CameraHelper(light.shadow.camera);
        // this.add(dLightShadowHelper);



        // Set up window resizing
        // window.addEventListener("resize", () => {
        //     this.width = window.innerWidth;
        //     this.height = window.innerHeight;

        //     this.TPSCamera.aspect = window.innerWidth / window.innerHeight;
        //     this.TPSCamera.updateProjectionMatrix;
        //     this.renderer.setSize(window.innerWidth, window.innerHeight);
        // });
    }



    update(deltaTime) {

        this.player.update(deltaTime);
        
        this.bot.update(deltaTime);

        this.TPSCamera.update(deltaTime);

        this.renderer.render( this, this.TPSCamera.camera );
        // this.renderer.render( this, this.camera );
    }

}