import * as THREE from 'three';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

// // Setup // //

const scene = new THREE.Scene();

// Clock
const clock = new THREE.Clock();

const width = (window.innerWidth * 1), height = (window.innerHeight * .7);

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 75 );
camera.position.set(0,0,3);

// // End of Setup // //

let controls;

/* Load in 3D Model */
let planetModel;

const loader = new GLTFLoader();
loader.load(`/planet.gltf`,
    function ( gltf ) {
        planetModel = gltf.scene;
        scene.add( gltf.scene );
    },
    function (xhr) {
        //While it is loading, log the progress
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function ( error ) { console.error( error ); }
);


// Renderer
const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( width, height );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop( animate );
//Add the renderer to the DOM
document.getElementById("container3D").appendChild( renderer.domElement );


// // Lights // //

//Creates some lights and adds them to the scene
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(1,1,1);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

// Adds helpers for testing
//const lightHelper = new THREE.PointLightHelper(pointLight); // Tells where a light is
//const gridHelper = new THREE.GridHelper(200,50); // Grid
//scene.add(lightHelper);

controls = new OrbitControls(camera, renderer.domElement);
controls.noZoom = true;

// animation
function animate() {

	//planetModel.rotation.x = time / 2000;
	//planetModel.rotation.y = time / 1000;

	renderer.render( scene, camera );

}

