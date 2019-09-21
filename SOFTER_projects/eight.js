let length = 5
let left_column = length-2
let center_row = left_column + 1
let left_column2 = center_row + left_column
let lower_row = left_column2 + 1


for (let row = 0; row < (length * 2) - 1; row++) {

    for (let column = 0; column < length; column++) {
        
        if ((row == 0 && column > 0 && column < length - 1) ||
            (row > 0 && row <= left_column && column == 0) ||
            (row > 0 && row <= left_column && column == length - 1) ||
            (row == center_row && column > 0 && column < length - 1) ||
            (row > center_row && row <= left_column2 && column == 0) ||
            (row > center_row && row <= left_column2 && column == length - 1) ||
            (row == lower_row && column > 0 && column < length - 1)

        ) {
            process.stdout.write("*")
        } else {
            process.stdout.write(" ")
        }
    }

    process.stdout.write("\n")

} 
