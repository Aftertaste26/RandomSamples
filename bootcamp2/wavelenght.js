const readline = require('readline-sync');
let wavelength = Number(readline.question('Wavelength in (nm): '))

if (wavelength >= 380 && wavelength < 450) {
    console.log('Violet')
}
else if (wavelength >= 450 && wavelength < 495) {
    console.log('Blue')
}
else if (wavelength >= 495 && wavelength < 570) {
    console.log('Green')
}
else if (wavelength >= 570 && wavelength < 590) {
    console.log('Yellow')
}
else if (wavelength >= 590 && wavelength < 620) {
    console.log('Orange')
}
else if (wavelength >= 620 && wavelength < 750) {
    console.log('Red')
}
else {
    console.log('ERROR: Wavelength not declared!')
}