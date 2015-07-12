/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
'use strict';

var computeArea = function(A, B, C, D, E, F, G, H) {
    var s1 = (C - A) * (D - B),
        s2 = (G - E) * (H - F);

    if (C <= E || G <= A || B >= H || F >= D) {
        return s1 + s2;
    } else {
        var s3 = ((C < G ? C : G) - (A > E ? A : E)) * ((D < H ? D : H) - (B > F ? B : F));
        return s1 + s2 - s3;
    }

    return -1;
};

console.log(computeArea(-2, -2, 2, 2, 1, -3, 3, -1));