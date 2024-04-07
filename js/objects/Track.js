import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as YUKA from 'yuka';

export default class Track {
    scene = THREE.Scene;
    
    trackURL = "";

    scale = 0.1;

    rotationAngle = Math.PI*5/6+Math.PI/2;

    trackScene = null;

    path = YUKA.Path;

    x = -1260;
    y = -0.2;
    z = -940;


    constructor(scene = THREE.Scene, trackURL = String) {
        this.scene = scene;
        this.trackURL = trackURL;
        this.loadGLTF(scene, trackURL);

        this.drawBotPath();

        this.drawRightSideBoundary();

        this.drawLeftSideBoundary();
    }

    drawLeftSideBoundary() {
        const coordinates = [
            { x: 90.36, y: 0.00, z: -369.63},
            { x: 80.82, y: 0.00, z: -321.84},
            { x: 68.51, y: 0.00, z: -239.37},
            { x: 52.69, y: 0.00, z: -127.80},
            { x: 43.15, y: 0.00, z: -36.97},
            { x: 37.39, y: 0.00, z: 37.85},
            { x: 33.49, y: 0.00, z: 170.84},
            { x: 30.11, y: 0.00, z: 280.55},
            { x: 25.64, y: 0.00, z: 351.22},
            { x: 19.66, y: 0.00, z: 445.28},
            { x: 15.01, y: 0.00, z: 511.12},
            { x: 6.43, y: 0.00, z: 588.38},
            { x: 0.86, y: 0.00, z: 630.29},
            { x: -0.40, y: 0.00, z: 657.70},
            { x: 2.12, y: 0.00, z: 671.07},
            { x: 15.31, y: 0.00, z: 691.97},
            { x: 25.67, y: 0.00, z: 701.33},
            { x: 52.49, y: 0.00, z: 716.72},
            { x: 67.09, y: 0.00, z: 715.94},
            { x: 90.72, y: 0.00, z: 705.91},
            { x: 134.95, y: 0.00, z: 683.18},
            { x: 159.85, y: 0.00, z: 675.03},
            { x: 192.16, y: 0.00, z: 676.71},
            { x: 221.74, y: 0.00, z: 686.99},
            { x: 250.90, y: 0.00, z: 707.76},
            { x: 271.51, y: 0.00, z: 733.12},
            { x: 281.45, y: 0.00, z: 751.47},
            { x: 301.02, y: 0.00, z: 788.01},
            { x: 311.28, y: 0.00, z: 804.21},
            { x: 325.00, y: 0.00, z: 816.83},
            { x: 339.81, y: 0.00, z: 823.17},
            { x: 352.10, y: 0.00, z: 824.64},
            { x: 365.02, y: 0.00, z: 823.83},
            { x: 383.01, y: 0.00, z: 818.76},
            { x: 398.90, y: 0.00, z: 809.38},
            { x: 411.23, y: 0.00, z: 796.11},
            { x: 467.64, y: 0.00, z: 692.08},
            { x: 478.47, y: 0.00, z: 668.56},
            { x: 484.91, y: 0.00, z: 647.39},
            { x: 487.89, y: 0.00, z: 632.54},
            { x: 488.55, y: 0.00, z: 617.09},
            { x: 483.99, y: 0.00, z: 596.16},
            { x: 474.62, y: 0.00, z: 579.70},
            { x: 437.50, y: 0.00, z: 528.91},
            { x: 414.52, y: 0.00, z: 491.92},
            { x: 390.47, y: 0.00, z: 449.41},
            { x: 381.10, y: 0.00, z: 419.16},
            { x: 379.52, y: 0.00, z: 390.90},
            { x: 383.35, y: 0.00, z: 360.73},
            { x: 390.04, y: 0.00, z: 336.13},
            { x: 405.41, y: 0.00, z: 303.13},
            { x: 432.49, y: 0.00, z: 253.31},
            { x: 529.64, y: 0.00, z: 78.25},
            { x: 543.09, y: 0.00, z: 58.60},
            { x: 566.46, y: 0.00, z: 33.37},
            { x: 595.57, y: 0.00, z: 14.37},
            { x: 622.82, y: 0.00, z: 6.90},
            { x: 661.05, y: 0.00, z: 8.28},
            { x: 686.98, y: 0.00, z: 12.53},
            { x: 713.88, y: 0.00, z: 23.42},
            { x: 737.07, y: 0.00, z: 41.96},
            { x: 759.83, y: 0.00, z: 63.82},
            { x: 778.61, y: 0.00, z: 90.51},
            { x: 787.74, y: 0.00, z: 118.41},
            { x: 793.06, y: 0.00, z: 149.66},
            { x: 791.47, y: 0.00, z: 181.97},
            { x: 781.82, y: 0.00, z: 211.18},
            { x: 765.18, y: 0.00, z: 238.86},
            { x: 748.42, y: 0.00, z: 259.86},
            { x: 728.53, y: 0.00, z: 279.58},
            { x: 706.07, y: 0.00, z: 297.85},
            { x: 646.32, y: 0.00, z: 351.76},
            { x: 628.42, y: 0.00, z: 372.23},
            { x: 619.19, y: 0.00, z: 395.49},
            { x: 618.90, y: 0.00, z: 413.79},
            { x: 620.14, y: 0.00, z: 428.42},
            { x: 627.14, y: 0.00, z: 442.57},
            { x: 636.13, y: 0.00, z: 452.17},
            { x: 643.96, y: 0.00, z: 458.87},
            { x: 666.74, y: 0.00, z: 474.87},
            { x: 692.56, y: 0.00, z: 495.85},
            { x: 707.49, y: 0.00, z: 517.68},
            { x: 720.32, y: 0.00, z: 548.24},
            { x: 725.85, y: 0.00, z: 574.61},
            { x: 725.88, y: 0.00, z: 603.74},
            { x: 722.04, y: 0.00, z: 642.35},
            { x: 715.57, y: 0.00, z: 698.04},
            { x: 708.94, y: 0.00, z: 760.43},
            { x: 702.59, y: 0.00, z: 830.88},
            { x: 698.15, y: 0.00, z: 911.74},
            { x: 696.71, y: 0.00, z: 933.58},
            { x: 702.18, y: 0.00, z: 987.07},
            { x: 707.01, y: 0.00, z: 1004.19},
            { x: 719.58, y: 0.00, z: 1028.02},
            { x: 734.18, y: 0.00, z: 1045.36},
            { x: 750.67, y: 0.00, z: 1058.07},
            { x: 764.75, y: 0.00, z: 1064.36},
            { x: 780.27, y: 0.00, z: 1067.98},
            { x: 792.92, y: 0.00, z: 1068.16},
            { x: 809.07, y: 0.00, z: 1065.23},
            { x: 839.81, y: 0.00, z: 1050.54},
            { x: 862.52, y: 0.00, z: 1024.69},
            { x: 913.70, y: 0.00, z: 932.90},
            { x: 1038.59, y: 0.00, z: 707.68},
            { x: 1101.30, y: 0.00, z: 598.19},
            { x: 1118.24, y: 0.00, z: 572.85},
            { x: 1153.23, y: 0.00, z: 531.95},
            { x: 1192.35, y: 0.00, z: 493.70},
            { x: 1230.10, y: 0.00, z: 467.03},
            { x: 1270.48, y: 0.00, z: 445.54},
            { x: 1313.08, y: 0.00, z: 432.29},
            { x: 1343.98, y: 0.00, z: 427.21},
            { x: 1376.17, y: 0.00, z: 426.89},
            { x: 1404.68, y: 0.00, z: 429.98},
            { x: 1425.07, y: 0.00, z: 433.69},
            { x: 1457.17, y: 0.00, z: 432.13},
            { x: 1484.68, y: 0.00, z: 426.87},
            { x: 1508.33, y: 0.00, z: 416.73}
        ];

        this.leftBoundary = [];

        coordinates.forEach(coord => {
            const vector = new THREE.Vector3(coord.x, coord.y, coord.z);
            this.leftBoundary.push(vector);
        });

        if(this.scene.debugMode) {


            const positions = [];

            // Iterate through the waypoints to create line segments
            for (let i = 0; i < this.leftBoundary.length - 1; i++) {
                const currentPoint = this.leftBoundary[i];
                const nextPoint = this.leftBoundary[i + 1];

                // Add current point
                positions.push(currentPoint.x, currentPoint.y, currentPoint.z);

                // Add next point
                positions.push(nextPoint.x, nextPoint.y, nextPoint.z);
            }

            const lineMaterial = new THREE.LineBasicMaterial({color: 0xFF0000});
            const lineGeometry = new THREE.BufferGeometry();

            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

            // Create the line object with individual segments
            const lines = new THREE.LineSegments(lineGeometry, lineMaterial);

            // Add the line to the scene
            this.scene.add(lines);
        }
    }

    drawRightSideBoundary() {
        const coordinates = [
            { x: 25.17, y: 0.00, z: -383.79},
            { x: 22.26, y: 0.00, z: -366.27},
            { x: 15.56, y: 0.00, z: -328.95},
            { x: 8.34, y: 0.00, z: -288.40},
            { x: 3.58, y: 0.00, z: -257.31},
            { x: -0.69, y: 0.00, z: -228.00},
            { x: -5.91, y: 0.00, z: -192.13},
            { x: -15.88, y: 0.00, z: -115.74},
            { x: -24.08, y: 0.00, z: -37.88},
            { x: -28.22, y: 0.00, z: 9.13},
            { x: -31.46, y: 0.00, z: 88.30},
            { x: -33.22, y: 0.00, z: 160.24},
            { x: -34.58, y: 0.00, z: 247.36},
            { x: -41.49, y: 0.00, z: 372.36},
            { x: -46.48, y: 0.00, z: 464.37},
            { x: -50.58, y: 0.00, z: 507.17},
            { x: -57.92, y: 0.00, z: 571.28},
            { x: -61.91, y: 0.00, z: 611.18},
            { x: -64.74, y: 0.00, z: 655.02},
            { x: -65.36, y: 0.00, z: 681.47},
            { x: -56.40, y: 0.00, z: 705.52},
            { x: -36.72, y: 0.00, z: 732.83},
            { x: -14.65, y: 0.00, z: 753.96},
            { x: 14.11, y: 0.00, z: 771.59},
            { x: 49.01, y: 0.00, z: 781.08},
            { x: 81.04, y: 0.00, z: 779.47},
            { x: 105.25, y: 0.00, z: 771.82},
            { x: 130.09, y: 0.00, z: 758.43},
            { x: 142.98, y: 0.00, z: 751.21},
            { x: 155.47, y: 0.00, z: 745.56},
            { x: 173.32, y: 0.00, z: 740.99},
            { x: 184.67, y: 0.00, z: 742.84},
            { x: 199.70, y: 0.00, z: 750.92},
            { x: 218.85, y: 0.00, z: 772.08},
            { x: 250.96, y: 0.00, z: 830.42},
            { x: 269.50, y: 0.00, z: 856.65},
            { x: 297.08, y: 0.00, z: 876.66},
            { x: 326.39, y: 0.00, z: 886.65},
            { x: 361.05, y: 0.00, z: 890.46},
            { x: 385.96, y: 0.00, z: 886.64},
            { x: 422.91, y: 0.00, z: 872.66},
            { x: 447.36, y: 0.00, z: 853.44},
            { x: 464.37, y: 0.00, z: 832.64},
            { x: 483.65, y: 0.00, z: 801.41},
            { x: 530.83, y: 0.00, z: 712.86},
            { x: 541.22, y: 0.00, z: 691.28},
            { x: 547.78, y: 0.00, z: 669.03},
            { x: 554.31, y: 0.00, z: 628.41},
            { x: 555.13, y: 0.00, z: 605.13},
            { x: 547.67, y: 0.00, z: 572.75},
            { x: 534.34, y: 0.00, z: 549.71},
            { x: 516.06, y: 0.00, z: 524.41},
            { x: 495.64, y: 0.00, z: 494.14},
            { x: 460.58, y: 0.00, z: 440.76},
            { x: 448.80, y: 0.00, z: 412.52},
            { x: 445.77, y: 0.00, z: 394.14},
            { x: 449.16, y: 0.00, z: 368.36},
            { x: 461.06, y: 0.00, z: 338.86},
            { x: 511.30, y: 0.00, z: 249.00},
            { x: 577.80, y: 0.00, z: 124.52},
            { x: 604.21, y: 0.00, z: 90.85},
            { x: 614.24, y: 0.00, z: 80.55},
            { x: 629.55, y: 0.00, z: 73.34},
            { x: 644.52, y: 0.00, z: 72.16},
            { x: 668.82, y: 0.00, z: 76.76},
            { x: 703.92, y: 0.00, z: 102.80},
            { x: 712.12, y: 0.00, z: 112.23},
            { x: 722.45, y: 0.00, z: 132.02},
            { x: 725.33, y: 0.00, z: 145.49},
            { x: 725.95, y: 0.00, z: 159.83},
            { x: 719.80, y: 0.00, z: 186.19},
            { x: 704.18, y: 0.00, z: 208.48},
            { x: 683.82, y: 0.00, z: 228.13},
            { x: 641.47, y: 0.00, z: 264.37},
            { x: 613.88, y: 0.00, z: 291.71},
            { x: 587.08, y: 0.00, z: 318.69},
            { x: 569.79, y: 0.00, z: 343.42},
            { x: 558.10, y: 0.00, z: 368.52},
            { x: 551.41, y: 0.00, z: 400.37},
            { x: 554.10, y: 0.00, z: 437.57},
            { x: 562.96, y: 0.00, z: 465.26},
            { x: 581.26, y: 0.00, z: 491.20},
            { x: 602.24, y: 0.00, z: 509.23},
            { x: 611.05, y: 0.00, z: 515.08},
            { x: 632.84, y: 0.00, z: 530.27},
            { x: 646.80, y: 0.00, z: 546.57},
            { x: 655.54, y: 0.00, z: 564.09},
            { x: 658.71, y: 0.00, z: 580.98},
            { x: 658.42, y: 0.00, z: 600.68},
            { x: 651.73, y: 0.00, z: 657.54},
            { x: 639.33, y: 0.00, z: 777.67},
            { x: 630.37, y: 0.00, z: 905.02},
            { x: 630.10, y: 0.00, z: 953.47},
            { x: 634.89, y: 0.00, z: 990.83},
            { x: 640.83, y: 0.00, z: 1014.82},
            { x: 649.83, y: 0.00, z: 1039.97},
            { x: 666.32, y: 0.00, z: 1068.85},
            { x: 686.79, y: 0.00, z: 1091.96},
            { x: 711.47, y: 0.00, z: 1111.26},
            { x: 739.27, y: 0.00, z: 1126.18},
            { x: 767.07, y: 0.00, z: 1133.24},
            { x: 798.56, y: 0.00, z: 1134.91},
            { x: 835.14, y: 0.00, z: 1126.47},
            { x: 858.34, y: 0.00, z: 1116.65},
            { x: 884.55, y: 0.00, z: 1099.83},
            { x: 904.75, y: 0.00, z: 1079.61},
            { x: 919.20, y: 0.00, z: 1061.09},
            { x: 934.65, y: 0.00, z: 1035.54},
            { x: 992.01, y: 0.00, z: 933.36},
            { x: 1038.91, y: 0.00, z: 848.79},
            { x: 1141.26, y: 0.00, z: 659.60},
            { x: 1193.95, y: 0.00, z: 586.70},
            { x: 1241.89, y: 0.00, z: 542.12},
            { x: 1275.83, y: 0.00, z: 516.93},
            { x: 1311.83, y: 0.00, z: 501.51},
            { x: 1342.07, y: 0.00, z: 494.35},
            { x: 1367.94, y: 0.00, z: 493.38},
            { x: 1396.68, y: 0.00, z: 498.06},
            { x: 1427.68, y: 0.00, z: 501.21},
            { x: 1454.28, y: 0.00, z: 501.17},
            { x: 1473.80, y: 0.00, z: 499.32},
            { x: 1500.01, y: 0.00, z: 493.50},
            { x: 1523.37, y: 0.00, z: 484.70},
            { x: 1540.13, y: 0.00, z: 475.57}
        ];

        this.rightBoundary = [];

        coordinates.forEach(coord => {
            const vector = new THREE.Vector3(coord.x, coord.y, coord.z);
            this.rightBoundary.push(vector);
        });

        // console.log(this.rightBoundary[0].x);

        if(this.scene.debugMode) {

            const positions = [];

            // Iterate through the waypoints to create line segments
            for (let i = 0; i < this.rightBoundary.length - 1; i++) {
                const currentPoint = this.rightBoundary[i];
                const nextPoint = this.rightBoundary[i + 1];

                // Add current point
                positions.push(currentPoint.x, currentPoint.y, currentPoint.z);

                // Add next point
                positions.push(nextPoint.x, nextPoint.y, nextPoint.z);
            }

            const lineMaterial = new THREE.LineBasicMaterial({color: 0xFF0000});
            const lineGeometry = new THREE.BufferGeometry();

            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

            // Create the line object with individual segments
            const lines = new THREE.LineSegments(lineGeometry, lineMaterial);

            // Add the line to the scene
            this.scene.add(lines);
        }
    }

    // Draw the path for bots to follow
    drawBotPath() {
        this.path = new YUKA.Path();
        this.path.add(new YUKA.Vector3(2.77, 0.00, 75.66));
        this.path.add(new YUKA.Vector3(-6.04, 0.00, 322.62));
        this.path.add(new YUKA.Vector3(-30.82, 0.00, 616.35));
        this.path.add(new YUKA.Vector3(27.75, 0.00, 737.82));
        this.path.add(new YUKA.Vector3(179.42, 0.00, 713.71));
        this.path.add(new YUKA.Vector3(265.42, 0.00, 778.47));
        this.path.add(new YUKA.Vector3(353.60, 0.00, 857.22));
        this.path.add(new YUKA.Vector3(449.60, 0.00, 794.27));
        this.path.add(new YUKA.Vector3(503.21, 0.00, 688.85));
        this.path.add(new YUKA.Vector3(499.22, 0.00, 563.23));
        this.path.add(new YUKA.Vector3(426.72, 0.00, 439.82));
        this.path.add(new YUKA.Vector3(439.74, 0.00, 308.90));
        this.path.add(new YUKA.Vector3(499.69, 0.00, 196.97));
        this.path.add(new YUKA.Vector3(570.16, 0.00, 83.15));
        this.path.add(new YUKA.Vector3(688.55, 0.00, 52.71));
        this.path.add(new YUKA.Vector3(757.79, 0.00, 153.99));
        this.path.add(new YUKA.Vector3(703.82, 0.00, 259.03));
        this.path.add(new YUKA.Vector3(598.96, 0.00, 364.93));
        this.path.add(new YUKA.Vector3(627.57, 0.00, 493.33));
        this.path.add(new YUKA.Vector3(690.33, 0.00, 603.98));
        this.path.add(new YUKA.Vector3(663.54, 0.00, 916.86));
        this.path.add(new YUKA.Vector3(697.28, 0.00, 1054.03));
        this.path.add(new YUKA.Vector3(761.97, 0.00, 1094.38));
        this.path.add(new YUKA.Vector3(909.76, 0.00, 1014.44));
        this.path.add(new YUKA.Vector3(1127.03, 0.00, 622.34));
        this.path.add(new YUKA.Vector3(1236.38, 0.00, 498.92));
        this.path.add(new YUKA.Vector3(1500.58, 0.00, 451.51));

        

        if(this.scene.debugMode) {
            const positions = [];

            // Iterate through the waypoints to create line segments
            for (let i = 0; i < this.path._waypoints.length - 1; i++) {
                const currentPoint = this.path._waypoints[i];
                const nextPoint = this.path._waypoints[i + 1];

                // Add current point
                positions.push(currentPoint.x, currentPoint.y, currentPoint.z);

                // Add next point
                positions.push(nextPoint.x, nextPoint.y, nextPoint.z);
            }

            const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000FF});
            const lineGeometry = new THREE.BufferGeometry();

            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

            // Create the line object with individual segments
            const lines = new THREE.LineSegments(lineGeometry, lineMaterial);

            // Add the line to the scene
            this.scene.add(lines);
        }
    }

    setGLTFPosition(trackScene,x,y,z){
        trackScene.position.set(x,y,z);
    }

    scaleGLTF(trackScene, scale) {
        trackScene.scale.set(scale, scale, scale);
    }

    rotateGLTFonYAxis(trackScene, rotationAngle) {
        trackScene.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotationAngle);
    }

    loadGLTF(scene, trackURL) {
        this.loading = true; // Set loading flag to true
        // Instantiate a loader
        const loader = new GLTFLoader();

        // Load a glTF resource
        loader.load(
            // resource URL
            trackURL,
            // called when the resource is loaded
            ( gltf ) => {
                this.trackScene = gltf.scene;
                

                this.setGLTFPosition(this.trackScene, this.x, this.y, this.z);
                this.scaleGLTF(this.trackScene, this.scale);
                this.rotateGLTFonYAxis(this.trackScene, this.rotationAngle);

                scene.add( gltf.scene );
                this.loading = false; // Set loading flag to false

            },
            // called while loading is progressing
            ( xhr ) => {

                // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            ( error ) => {

                console.log( 'An error happened' , error);

            }
        );
    }
}

