
const fs = require('fs')

fs.readFile("01_input.txt", (err, input) => {
    if (err) throw err; 
    else {
        console.log(input.toString());
        
    }
})


// async function readContent() {
//     fetch('01_input.txt')
//     .then(response => response.text())
//     .then(text => console.log(text))
// }

// readContent()