import GameScene from "./GameScene";

let scene = new GameScene();

function animate() {
    requestAnimationFrame(animate);

    scene.update();
}

animate()