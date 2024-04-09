import * as THREE from 'three';


// Function to check if a box intersects with any line segment in a given array of points
export function boxIntersectsPath(box, points) {
    for (let i = 0; i < points.length - 1; i++) {
        const point1 = points[i];
        const point2 = points[i + 1];
        const point3 = new THREE.Vector3((point1.x + point2.x)/2, 1, (point1.z + point2.z)/2);



        // Check if the line segment intersects with the box
        if (box.intersectsTriangle(new THREE.Triangle(point1, point2, point3))) {
            return true; // Intersection found
        }
    }

    return false; // No intersections found
}
