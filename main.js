import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup //

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

// Render = Draw
renderer.render(scene, camera);

// Objects //

// Creates a geometric object (Torus)
const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial({color:0xFF6347});
//const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true}); // Wireframe version
const torus = new THREE.Mesh(geometry, material);

// Adds it to the scene
scene.add(torus);

// Lights //

//Creates some lights and adds them to the scene
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

// Adds helpers for testing
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper,gridHelper);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// 200 Stars in random poisions
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star);

}

Array(200).fill().forEach(addStar);

// Background
//const bgTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = new THREE.Color( 0x431a38 );

// Avatar Box //

// Avatar Box Image
const avatarTexture = new THREE.TextureLoader().load('avatar.png');

const avatarBox = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({map: avatarTexture})
);
scene.add(avatarBox);
avatarBox.position.z = 23;
avatarBox.position.x = 4;

// Moon //

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({map: moonTexture, normalMap: normalTexture})
);
scene.add(moon);

// Moon Position
moon.position.z = 28;
moon.position.setX(-10);

// Scroll animation
function moveCamera() {

  const t = document.body.getBoundingClientRect().top;

  // Moves Camera while scrolling
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

  // Changes Moon Position while scrolling
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  avatarBox.rotation.y += 0.01;
  avatarBox.rotation.z += 0.01;

}
document.body.onscroll = moveCamera;

// Recursive function that animates the scene
function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate()


