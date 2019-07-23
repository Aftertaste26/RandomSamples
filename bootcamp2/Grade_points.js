const readline = require('readline-sync');
let input;
let grade_Point = 0;
let Total = 0;

while (input !== '') {

    input = readline.question('Letter Grades: ');

    if (input !== '') {
        switch (input) {

            case 'A+':
            case 'A':
                grade_Point = 4.0;
                break;
            case 'A-':
                grade_point = 3.7;
                break;
            case 'B+':
                grade_Point = 3.3;
                break;
            case 'B':
                grade_Point = 3.0;
                break;
            case 'B-':
                grade_Point = 2.7;
                break;
            case 'C+':
                grade_Point = 2.3;
                break;
            case 'C':
                grade_Point = 2.0;
                break;
            case 'C-':
                grade_Point = 1.7;
                break;
            case 'D+':
                grade_Point = 1.3;
                break;
            case 'D':
                grade_Point = 1.0;
                break;
            case 'F':
                grade_Point = 0;
                break;
            default:

                if (input !== '') {
                    console.log('\nINVALID INPUT!');
                }

                grade_Point = 0;

        }

        Total += grade_Point;
        console.log(`\nIs equivalent to: ${grade_Point}`);
        console.log(`Computed: ${Total}\n`);
        console.log('PRESS ENTER TO EXIT');

    }else{

        console.log(`\nTotal computed grades: ${Total}\n`);

    }
}