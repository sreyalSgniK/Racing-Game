import GameScene from "./GameScene";

let difficulty = 'normal';

let scene = GameScene;

let lastFrameTime = performance.now();
let fpsCounter = 0;
let fpsTime = 0;

document.getElementById('playButton').addEventListener('click', function() {
    var menuDiv = document.getElementById('menu');
    var optionsDiv = document.getElementById('options');
    
    if (optionsDiv.style.display === 'none' || optionsDiv.style.display === '') {
        // Ẩn các nút Play, Option, Instruction
        menuDiv.style.display = 'none';
        // Hiển thị các nút Easy, Medium, Hard
        optionsDiv.style.display = 'block';
    } else {
        // Ẩn các nút Easy, Medium, Hard
        optionsDiv.style.display = 'none';
        // Hiển thị các nút Play, Option, Instruction
        menuDiv.style.display = 'flex'; // hoặc 'block' tùy thuộc vào kiểu hiển thị của phần tử menu
    }
});

// Add event listeners to the buttons in index.html
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons
    const easyButton = document.getElementById('easyMode');
    const normalButton = document.getElementById('mediumMode');
    const hardButton = document.getElementById('hardMode');

    const options = document.getElementById('options');
    const car = document.getElementById('car');

    const speedContainer = document.getElementById('speedContainer');

    // Add click event listeners to the buttons
    easyButton.addEventListener('click', function() {
        console.log("easy");
        options.style.display = 'none';
        car.style.display = 'none';
        speedContainer.style.display = 'flex';
        setDifficulty('easy');
        scene = new GameScene(difficulty);
        animate();
    });

    normalButton.addEventListener('click', function() {
        console.log("normal");
        options.style.display = 'none';
        car.style.display = 'none';
        speedContainer.style.display = 'flex';
        setDifficulty('normal');
        scene = new GameScene(difficulty);
        animate();
    });

    hardButton.addEventListener('click', function() {
        console.log("hard");
        options.style.display = 'none';
        car.style.display = 'none';
        speedContainer.style.display = 'flex';
        setDifficulty('hard');
        scene = new GameScene(difficulty);
        animate();
    });
});

function setDifficulty(newDifficulty) {
    difficulty = newDifficulty;
}


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
        console.log(`FPS: ${fps.toFixed(2)}`);
        fpsCounter = 0;
        fpsTime = 0;
    }

    // Limit frame rate to approximately 60 FPS
    const targetFrameInterval = 1000 / 60; // 60 FPS
    const elapsedTime = performance.now() - currentTime;
    const delay = Math.max(targetFrameInterval - elapsedTime, 0);
    setTimeout(() => {}, delay);
}

