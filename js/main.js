import GameScene from ".`/GameScene";

const scene = new GameScene();

let lastFrameTime = performance.now();
let fpsCounter = 0;
let fpsTime = 0;

function animate() {
    requestAnimationFrame(animate);

    // Calculate delta time
    const currentTime = performance.now();
    const deltaTime = (currentTime - lastFrameTime) / 1000; // Convert to seconds
    lastFrameTime = currentTime;

    // Update the scene with delta time
    scene.update(deltaTime);

    // Calculate FPS
    fpsCounter++;
    fpsTime += deltaTime;
    if (fpsTime >= 1.0) {
        const fps = fpsCounter / fpsTime;
        // console.log(`FPS: ${fps.toFixed(2)}`);
        fpsCounter = 0;
        fpsTime = 0;
    }

    // Limit frame rate to approximately 60 FPS
    const targetFrameInterval = 1000 / 60; // 60 FPS
    const elapsedTime = performance.now() - currentTime;
    const delay = Math.max(targetFrameInterval - elapsedTime, 0);
    setTimeout(() => {}, delay);
}

animate();
