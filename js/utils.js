import * as THREE from 'three';
import { OBB } from 'three/addons/math/OBB.js';


export function absoluteVector3(vector) {
    const absX = Math.abs(vector.x);
    const absY = Math.abs(vector.y);
    const absZ = Math.abs(vector.z);
    return new THREE.Vector3(absX, absY, absZ);
}

// Function to check if a box intersects with any line segment in a given array of points
export function boxIntersectsPath(box, hitboxes) {
    // console.log(hitboxes);
    for (let i = 0; i < hitboxes.length - 1; i++) {
        // Check if the line segment intersects with the box
        if (box.intersectsOBB(hitboxes[i])) {
            return true; // Intersection found
        }
    }

    return false; // No intersections found
}

export function getRotationMatrixFromTwoPoints(point1, point2) {
    // Calculate the direction vector from point1 to point2
    const direction = new THREE.Vector3().copy(point2).sub(point1).normalize();

    // Define a default direction for reference (e.g., positive z-axis)
    const defaultDirection = new THREE.Vector3(0, 0, 1);

    // Calculate the axis of rotation (perpendicular to both vectors)
    const axis = new THREE.Vector3().crossVectors(defaultDirection, direction).normalize();

    // Calculate another axis perpendicular to both direction and axis
    const second = new THREE.Vector3().crossVectors(direction, axis).normalize();

    // Construct the rotation matrix
    const rotationMatrix = new THREE.Matrix3();
    rotationMatrix.set(
        axis.x, second.x, direction.x,
        axis.y, second.y, direction.y,
        axis.z, second.z, direction.z
    );

    // const rotationMatrix = getRotationMatrix(direction);

    return rotationMatrix;
}


export function getHalfVector(vector) {
    // Calculate half values of each component
    const halfX = vector.x / 2;
    const halfY = vector.y / 2;
    const halfZ = vector.z / 2;

    // Create a new Vector3 with the halved values
    const halfVector = new THREE.Vector3(halfX, halfY, halfZ);

    return halfVector;
}

export function getRotationMatrix(vector) {
    
    // Define Euler angles (in radians) for rotation around X, Y, Z axes
    const euler = new THREE.Euler(vector.x, vector.y, vector.z, 'XYZ'); // Specify order of rotations (XYZ, YZX, etc.)

    // Create a Quaternion from the Euler angles
    const quaternion = new THREE.Quaternion().setFromEuler(euler);

    // Create a Matrix4 from the Quaternion
    const matrix4 = new THREE.Matrix4().makeRotationFromQuaternion(quaternion);

    // Extract the rotation part (Matrix3) from the Matrix4
    return new THREE.Matrix3().setFromMatrix4(matrix4);
}

export function getEulerAnglesFromRotationMatrix(matrix) {
    // Create a Quaternion from the rotation matrix
    const quaternion = new THREE.Quaternion().setFromRotationMatrix(matrix);

    // Extract Euler angles (in radians) from the Quaternion
    const euler = new THREE.Euler().setFromQuaternion(quaternion);

    // Return a Vector3 containing the Euler angles
    return new THREE.Vector3(euler.x, euler.y, euler.z);
}

export function createOBBWireframe(obb) {
    const halfSizes = obb.halfSize;
    const center = obb.center;
    const orientation = obb.rotation;

    // Calculate vertices for the wireframe
    const vertices = [
        new THREE.Vector3(halfSizes.x, halfSizes.y, halfSizes.z),
        new THREE.Vector3(-halfSizes.x, halfSizes.y, halfSizes.z),
        new THREE.Vector3(-halfSizes.x, -halfSizes.y, halfSizes.z),
        new THREE.Vector3(halfSizes.x, -halfSizes.y, halfSizes.z),
        new THREE.Vector3(halfSizes.x, halfSizes.y, -halfSizes.z),
        new THREE.Vector3(-halfSizes.x, halfSizes.y, -halfSizes.z),
        new THREE.Vector3(-halfSizes.x, -halfSizes.y, -halfSizes.z),
        new THREE.Vector3(halfSizes.x, -halfSizes.y, -halfSizes.z)
    ];

    // Apply orientation rotation to the vertices using the rotation matrix
    vertices.forEach(vertex => {
        vertex.applyMatrix3(orientation); // Apply rotation matrix
        vertex.add(center); // Translate by the center
    });


    // Define the indices to create the wireframe
    const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], // Front face
        [4, 5], [5, 6], [6, 7], [7, 4], // Back face
        [0, 4], [1, 5], [2, 6], [3, 7]  // Connections between front and back faces
    ];

    // Create geometry for the wireframe
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    
    edges.forEach(edge => {
        positions.push(vertices[edge[0]].x, vertices[edge[0]].y, vertices[edge[0]].z);
        positions.push(vertices[edge[1]].x, vertices[edge[1]].y, vertices[edge[1]].z);
    });

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    // Create material for the wireframe
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

    // Create wireframe mesh
    const wireframe = new THREE.LineSegments(geometry, material);

    return wireframe;
}

export function createOBBFrom2Points(point1 = THREE.Vector3, point2 = THREE.Vector3) {
    const center = new THREE.Vector3().copy(point1).add(point2).multiplyScalar(0.5);
    
    // Calculate the size (extents) of the OBB
    // const size = absoluteVector3(new THREE.Vector3().copy(point2).sub(point1).multiplyScalar(0.5));


    const size = new THREE.Vector3(distancebetween2Points(point1, point2), 1, 1).multiplyScalar(0.5);

    const rotationMatrix = rotationMatrixY(point1, point2);

    return new OBB(center, size, rotationMatrix);
    // return new OBB(center, size);

}

export function distancebetween2Points(point1, point2){
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2) + Math.pow(point1.z - point2.z, 2)) ;
}

export function rotationMatrixY(point1, point2) {
    const direction = new THREE.Vector3().copy(point2).sub(point1);
    // console.log(direction);
    const angle = -Math.atan2(direction.z, direction.x);
    const cosTheta = Math.cos(angle);
    const sinTheta = Math.sin(angle);

    return new THREE.Matrix3().set(
        cosTheta, 0, sinTheta,
        0, 1, 0,
        -sinTheta, 0, cosTheta
    );
}