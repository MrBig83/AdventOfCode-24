
const fs = require('fs')


fs.readFile("01_input.txt", (err, input) => {
    if (err) throw err; 
    else {

        let listan = input.toString()
        // let array = input.split("   " || "\n")
        // Split the data into rows and process into two separate arrays
        const rows = listan.trim().split('\n');

        const leftColumn = [];
        const rightColumn = [];
        const distanceArray = [];

        rows.forEach(row => {
            const [left, right] = row.trim().split(/\s+/).map(Number);
            leftColumn.push(left);
            rightColumn.push(right);
        });

        leftColumn.sort()
        rightColumn.sort()
        // console.log('Left Column:', leftColumn[2]);
        // console.log('Right Column:', rightColumn[2]);
        
        for (let i = 0; i < leftColumn.length; i++) {
        // for (let i = 0; i < 3; i++) {
            const a = leftColumn[i];
            const b = rightColumn[i];
            let sum = a-b;
            distanceArray.push(Math.abs(sum)) 
        }
        
   
        console.log(distanceArray);



        
let totalSum = 0;
for (let i = 0; i < distanceArray.length; i++) {
  totalSum += distanceArray[i];
}

console.log(totalSum);

        
        
                
        
    }
})


// async function readContent() {
//     fetch('01_input.txt')
//     .then(response => response.text())
//     .then(text => console.log(text))
// }

// readContent()