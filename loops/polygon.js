const readline = require('readline-sync');
let coordinate_X;      // Input
let coordinate_Y;      // Input
let Start_Point_X;     // Initially stored x coordinate value
let Start_Point_Y;     // Initially stored y coordinate value
let stored_X;          // After the calculation.. X and Y
let stored_Y;          //   is stored to be use in the next loop/cycle
let total = 0;         // for getting the Area
let distance =0;       // AKA Perimeter


while (coordinate_X !== 'stop') {

    coordinate_X = readline.question('\nEnter X coordinate: ');

    if (coordinate_X !== 'stop') {

        coordinate_Y = Number(readline.question('Enter Y coordinate: '));
        coordinate_X = Number(coordinate_X);

        if (Start_Point_X === undefined && Start_Point_Y === undefined) {

            //On boot Setup:
            Start_Point_X = coordinate_X;
            Start_Point_Y = coordinate_Y;
            stored_X = coordinate_X;
            stored_Y = coordinate_Y;

        } else {

            total += (stored_X * coordinate_Y) - (stored_Y * coordinate_X);
            distance += Math.sqrt(Math.pow(coordinate_X - stored_X, 2) + Math.pow(coordinate_Y - stored_Y, 2));

            stored_X = coordinate_X;
            stored_Y = coordinate_Y;
        }

    } else {

        //Back to starting point
        total += (stored_X * Start_Point_Y) - (stored_Y * Start_Point_X);
        distance += Math.sqrt(Math.pow(Start_Point_X - stored_X, 2) + Math.pow(Start_Point_Y - stored_Y, 2));

    }
}

console.log(`Perimeter: ${distance}`);
console.log(`Area: ${Math.abs(total / 2)}`);