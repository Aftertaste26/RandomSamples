    /*     switch (input) {
            case '0':
    
                random = Math.trunc((Math.random() * 100) + 1) % CPU_campus.length
                console.log("\n@CPU Campus")
                console.log(`\nRandom Picked: ${CPU_campus[random]}\n`)
    
                for (let index = 0; index < CPU_campus.length; index++) {
                    console.log(` ${index} - ${CPU_campus[index]}`)
                }
    
                break;
            case '1':
    
                random = Math.trunc((Math.random() * 100) + 1) % milktea.length
                console.log("\n.....MILK TEA.....")
                console.log(`\nRandom Picked: ${milktea[random]}\n`)
    
                for (let index = 0; index < milktea.length; index++) {
                    console.log(` ${index} - ${milktea[index]}`)
                }
                break;
            case '2':
    
                random = Math.trunc((Math.random() * 100) + 1) % fastfoods.length
                console.log("\n.....FAST FOODS.....")
                console.log(`\nRandom Picked: ${fastfoods[random]}\n`)
    
                for (let index = 0; index < fastfoods.length; index++) {
                    console.log(` ${index} - ${fastfoods[index]}`)
                }
                break;
            case '3':
    
                random = Math.trunc((Math.random() * 100) + 1) % cafe.length
                console.log("\n.....CAFE.....")
                console.log(`\nRandom Picked: ${cafe[random]}\n`)
    
                for (let index = 0; index < cafe.length; index++) {
                    console.log(` ${index} - ${cafe[index]}`)
                }
                break;
            case '4':
    
                random = Math.trunc((Math.random() * 100) + 1) % restaurant.length
                console.log("\n.....RESTAURANT.....")
                console.log(`\nRandom Picked: ${restaurant[random]}\n`)
    
                for (let index = 0; index < restaurant.length; index++) {
                    console.log(` ${index} - ${restaurant[index]}`)
                }
                break;
            default:
    
        } */


do {

    //-------------------Choices-PRINTER-Code---------------------//
    //#CATEGORY
    if (!CPU_sw) {
        choicesPrinter(Category_setOf_string, heading_String)
    } else {

        Assigned_array[Assigned_array.length] = "CPU_FOODS"
        Category_setOf_array[Category_setOf_array.length] = CPU
        input = 0

    }
    //END-------------------Choices-PRINTER-Code---------------------END//



    //KEEPS SECOND_LOOP LOOPING
    if (proceed) {

        let Selection = "A" //default.. shuffle MODE
        let recent_numbers = new Array()

        //THIRD_LOOP
        while (Selection !== "") {

            console.clear()

            switch (Selection) {

                case "A":

                    //-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------//

                    //CHECKING
                    if (Category_setOf_string[input] === "Bisan Di'in") {
                        bisanDiin = true
                    }

                    //SHUFFLE THE CATERGORY
                    if (bisanDiin) {
                        input = Math.trunc((Math.random() * 10) + 1) % Assigned_array.length
                    }

                    //----------------------< MAIN_SHUFFLER >--------------------------//

                    random = Math.trunc((Math.random() * 100) + 1) % Assigned_array[input].length

                    if (recent_numbers.length < Assigned_array[input].length) {

                        //this check a number match in the array.
                        for (let check = 0; check < Assigned_array[input].length; check++) {

                            //match found add one
                            if (recent_numbers[check] === random) {
                                random = (random + 1) % Assigned_array[input].length
                                check = 0;
                            }

                        }

                    } else {

                        //reset or empty array
                        recent_numbers = new Array()

                    }

                    //listing/storing the number output by random
                    recent_numbers[recent_numbers.length] = random

                    //END----------------------< MAIN_SHUFFLER >--------------------------END//


                    if (DEBUG) {
                        console.log(`\nArray Length: ${Category_setOf_array[input].length}`)
                        console.log(`random OUTPUT: ${random}`)
                        console.log(recent_numbers)
                    }


                    //MAIN Ouput
                    console.log(`\n..........${Category_setOf_string[input]}..........`)
                    console.log("\x1b[36m%s\x1b[34m%s\x1b[0m", "\n.....Random Picked..... ", `\n\n   ${(Assigned_array[input])[random]}`)
                    console.log("\x1b[33m%s\x1b[0m", `\nLocation: ${location[location_no]}`)


                    //END-----------------<THIS CODE RANDOMIZED THE SELETED CATEGORY>---------------END//

                    break

                case "B":

                    //------------<SHOW LIST >---------------//

                    console.log(`\n.....${Category_setOf_string[input]}.....`)

                    for (index = 0; index < Category_setOf_array[input].length; index++) {
                        console.log(` ${index + 1} - ${(Category_setOf_array[input])[index]}`)
                    }

                    //END------------<SHOW LIST >---------------END//

                    break

                default:

                    console.clear()
                    console.log(Error_chalk("\n! INVALID INPUT !"))

            }

            console.log("\n A - Spin Again.\n B - Show List.\n ENTER - Back")

            Selection = readline.question("\nEnter No. : ")

        }

        recent_numbers = new Array()

    } else {

        //ERROR input                        
        if (ERROR) {
            proceed = true
        } else {
            proceed = false
        }

    }

    if (CPU_sw) {
        proceed = false
    }

} while (proceed)

proceed = true