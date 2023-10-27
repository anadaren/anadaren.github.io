import './style.css';

import * as THREE from 'three';

const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);


//function myFunction() {
//    document.getElementById("demo").innerHTML = "Paragraph changed.";
//  }

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Render = Draw
renderer.render(scene, camera);

// Creates a geometric object
const geometry = new THREE.TorusGeometry(10,3,16,100)
const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

// Recursive function that animates the scene
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
