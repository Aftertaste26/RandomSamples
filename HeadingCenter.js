let Heading_Center = function (text, length, char, spacing, spacing2) {
    if (text.length >= length) {
        if (spacing > 0) {
            return Heading_Center(text + '\n', length, char, spacing - 1, spacing2)
        } else if (spacing2 > 0) {
            return Heading_Center('\n' + text, length, char, spacing, spacing2 - 1)
        } else {
            return console.log(`${text}`);
        }
    }
    return Heading_Center((char + text + char).substr(0, length), length, char, spacing, spacing2)
}

Heading_Center('kyle654', 20, '+', 2, 5)
