const fs = require('fs')

fs.readFile("01_input.txt", (err, input) => {
    if (err) throw err; 
    else {

        let listan = input.toString()

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
        
        for (let i = 0; i < leftColumn.length; i++) {
            const a = leftColumn[i];
            const b = rightColumn[i];
            let sum = a-b;
            distanceArray.push(Math.abs(sum)) 
        }
            
        let totalSum = 0;
        for (let i = 0; i < distanceArray.length; i++) {
        totalSum += distanceArray[i];
        }

        console.log(totalSum)     
    }
})