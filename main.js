import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const homeButton = document.getElementById("homebutton");
homeButton.addEventListener("click", returnHome);

const aboutButton = document.getElementById("navButton1");
aboutButton.addEventListener("click", aboutCamera);

const worksButton = document.getElementById("navButton2");
worksButton.addEventListener("click", myFunction); 

const contactButton = document.getElementById("navButton3");
contactButton.addEventListener("click", contactCamera); 

// Resets layout
function returnHome() {
  window.scrollTo(0, 0);
  var x = document.getElementById("mainDIV");
  var y = document.getElementById("mainDIV2");
    x.style.display = "block";
    y.style.display = "none";

}

function myFunction() {
  var x = document.getElementById("mainDIV");
  var y = document.getElementById("mainDIV2");
  if (x.style.display === "none" && y.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
// // Setup // //

// Scene
const scene = new THREE.Scene();

// Auto Orbit
const autoOrbit = false;

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-30);
camera.position.setY(0);

// Render = Draw
renderer.render(scene, camera);

// // Objects // //

// Center of Universe Object
//const moonTexture = new THREE.TextureLoader().load('moon.jpg');
//const normalTexture = new THREE.TextureLoader().load('normal.jpg');
// Creates Sphere and adds it to scene
//const moon = new THREE.Mesh(
//  new THREE.SphereGeometry(3,32,32),
//  new THREE.MeshStandardMaterial({map: moonTexture, normalMap: normalTexture})
//);
//scene.add(moon);

const geometry = new THREE.SphereGeometry(3,32,32);
const material = new THREE.MeshStandardMaterial({color:0x555555});
//const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true}); // Wireframe version
const centerObject = new THREE.Mesh(geometry, material);

// Sets position
centerObject.position.x = 7;
centerObject.position.y = -5;
centerObject.position.z = -15;

// Adds it to the scene
scene.add(centerObject);


// Orbit Object //
const orbitGeometry = new THREE.TorusGeometry(75,1,10,100);
const orbitMaterial = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath = new THREE.Mesh(orbitGeometry, orbitMaterial);

orbitPath.rotation.x = 55;
scene.add(orbitPath);

// Creates Torus
const torusGeometry = new THREE.TorusGeometry(10,3,16,100);
const torusMaterial = new THREE.MeshStandardMaterial({color:0xFF6347});
const torusObject = new THREE.Mesh(torusGeometry, torusMaterial);

torusObject.position.x = 40;
torusObject.position.z = 50;
scene.add(torusObject);

// // Lights // //

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

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(250));

  star.position.set(x,y,z);
  scene.add(star);

}

Array(200).fill().forEach(addStar);

// Background Image
const bgTexture = new THREE.TextureLoader().load('spaceblue.png');
//scene.background = new THREE.Color( 0x000000 );
scene.background = new THREE.TextureLoader().load('spaceblue.png');


// // Content Objects // //


// Content Panel //
const proj1 = new THREE.Mesh(
  new THREE.BoxGeometry(7,5,.1),
  new THREE.MeshBasicMaterial({color:0x222222})
);
scene.add(proj1);

proj1.position.z = 25;
proj1.position.x = -5;


const proj2 = new THREE.Mesh(
  new THREE.BoxGeometry(7,5,.1),
  new THREE.MeshBasicMaterial({color:0x222222})
);
scene.add(proj2);

proj2.position.z = 35;
proj2.position.x = 5;

// Avatar Box //

// Texture Image
const avatarTexture = new THREE.TextureLoader().load('avatar.png');

// Creates Box and adds it to scene
const avatarBox = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({map: avatarTexture})
);
scene.add(avatarBox);

// Avatar Box Position
avatarBox.position.z = 23;
avatarBox.position.x = 4;

// Moon //

// Texture + Normal map
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');
// Creates Sphere and adds it to scene
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({map: moonTexture, normalMap: normalTexture})
);
scene.add(moon);

// Moon Position
moon.position.z = 28;
moon.position.setX(-10);

// Project Box 1 - Games //
const proj1Texture = new THREE.TextureLoader().load('avatar.png');

const proj1Box = new THREE.Mesh(
    new THREE.BoxGeometry(5,5,5),
    new THREE.MeshBasicMaterial({map: proj1Texture})
);

proj1Box.position.z = 36;
proj1Box.position.x = 4;

// Project Box 2 - VR/AR //
const proj2Texture = new THREE.TextureLoader().load('avatar.png');

const proj2Box = new THREE.Mesh(
    new THREE.BoxGeometry(5,5,5),
    new THREE.MeshBasicMaterial({map: proj2Texture})
);

proj2Box.position.z = 46;
proj2Box.position.x = -6;

// Project Box 3 - 3D stuff //
const proj3Texture = new THREE.TextureLoader().load('avatar.png');

const proj3Box = new THREE.Mesh(
    new THREE.BoxGeometry(5,5,5),
    new THREE.MeshBasicMaterial({map: proj3Texture})
);

proj3Box.position.z = 60;
proj3Box.position.x = 6;

scene.add(proj1Box,proj2Box,proj3Box);


// Scroll animation
function moveCamera() {

  const t = document.body.getBoundingClientRect().top;

  // Moves Camera while scrolling
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
  

  // Position on Orbit //
  if(!autoOrbit){orbitPath.rotation.z = t * 0.001;}

  

  // Changes Moon Position while scrolling
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  avatarBox.rotation.y += 0.01;
  avatarBox.rotation.z += 0.01;

  

}
document.body.onscroll = moveCamera;

// // Different Camera Viewpoints // //

// About Camera //
function aboutCamera() {
  document.getElementById("mainDIV2").style.display = "none";
  window.scrollTo(0, 0);
  /*camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 0;*/
}

function worksPageCamera() {
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 0;

  autoOrbit = true;
}

// Contact Camera //
function contactCamera() {
  document.getElementById("mainDIV2").style.display = "none";
  window.scrollTo(0, 6000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 0;
}





// // Renders Scene // //

// Recursive function that animates the scene
function animate() {
    requestAnimationFrame(animate);

    torusObject.rotation.x += 0.01;
    torusObject.rotation.y += 0.005;
    torusObject.rotation.z += 0.01;

    if(autoOrbit){orbitPath.rotation.z += 0.001;}

    controls.update();

    renderer.render(scene, camera);
}

animate();


