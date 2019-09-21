function diamond(size) {

    if (size % 2 == 0) {
        size -= 1
    }

    let row_no = size
    let col_no = row_no

    for (let row = 0; row < row_no; row++) {

        for (let column = 0; column < col_no; column++) {

            if (Math.floor(col_no / 2) - row === column ||
                Math.floor(col_no / 2) + row === column ||
                Math.floor(col_no / 2) + row_no - row - 1 === column ||
                Math.floor(col_no / 2) - row_no + row + 1 === column
            ) {
                process.stdout.write('+')
            } else (
                process.stdout.write('*')
            )
        }
        process.stdout.write('\n')
    }
}

diamond(16)