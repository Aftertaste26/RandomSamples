function Print() {

    /* This function creates a multi-line heading 
    parameters:
    heading text: as array or string
    character length: number */

    this.charLength = 20
    this.array = false
    this.spaceChar = ' '
    this.spaceDown = 0
    this.spaceUp = 0

    this.heading = function (text) {

        if (this.spaceUp === undefined) {
            this.spaceUp = 0
        }

        for (let newLine = 0; newLine < this.spaceUp; newLine++) {
            console.log('')
        }

        let row_count = 1

        if (this.array) {
            row_count = text.length
        }

        for (index = 0; index < row_count; index++) {

            let headingText = text
            let spaceChar = this.spaceChar

            if (this.array) {
                headingText = text[index]
            }
            if (spaceChar === undefined) {
                spaceChar = " "
            }

            let center = Math.floor(headingText.length / 2)
            let spaces = ""

            for (let spaces_number = 0; spaces_number < ((this.charLength / 2) - center); spaces_number++) {
                spaces += spaceChar
            }

            spaces += headingText

            while (spaces.length !== this.charLength) {
                spaces += spaceChar
            }

            console.log(spaces)

        }

        if (this.spaceDown === undefined) {
            this.spaceDown = 0
        }

        for (let newLine = 0; newLine < this.spaceDown; newLine++) {
            console.log('')
        }
    }

}

const print = new Print()
console.clear()
print.spaceUp = 2
print.spaceDown = 2
print.charLength = 170
print.heading("YOU LOSE")
print.heading(" G A M E  O V E R !")
print.heading("YEAH! YEAH! YEAH!")