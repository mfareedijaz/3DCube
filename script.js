const cube = document.getElementById("cube");
const rotateToBack = document.getElementById("rotateToBack");
const autoRotate = document.getElementById("autoRotate");
const halfScreenHeight = Math.floor(innerHeight / 2);
const halfScreenWidth = Math.floor(innerWidth / 2);

const handleCubeMovement = (event) => {
  let x = (event.clientX - halfScreenWidth) / 3;
  let y = (event.clientY - halfScreenHeight) / 3;

  // console.log("x", x, "y", y);
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
};

function handleAutoRotation() {
  if (autoRotate.textContent === "Auto ON") {
    autoRotate.textContent = "Auto OFF";
    window.removeEventListener("mousemove", handleCubeMovement);
    cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
  } else {
    autoRotate.textContent = "Auto ON";
    window.addEventListener("mousemove", handleCubeMovement);
  }
}

window.addEventListener("mousemove", handleCubeMovement);

let rotationCounter = 0;
cube.style.transition = "transform 0.3s";

function handleLeftRotation() {
  rotationCounter = rotationCounter - 90;
  cube.style.transform = `rotateY(${rotationCounter}deg)`;
  // console.log(rotationCounter);
}

function handleRightRotation() {
  rotationCounter = rotationCounter + 90;
  cube.style.transform = `rotateY(${rotationCounter}deg)`;
}

function handleTopRotation() {
  rotationCounter = rotationCounter + 90;
  cube.style.transform = `rotateX(${rotationCounter}deg)`;
}

function handleBottomRotation() {
  rotationCounter = rotationCounter - 90;
  cube.style.transform = `rotateX(${rotationCounter}deg)`;
}

function handleBackRotation() {
  rotationCounter = rotationCounter - 180;
  cube.style.transform = `rotateY(${rotationCounter}deg)`;
}

function handleFrontRotation() {
  rotationCounter = rotationCounter + 180;
  cube.style.transform = `rotateX(${rotationCounter}deg)`;
}