const fs = require('fs')

fs.readFile("01_input.txt", (err, input) => {
    if (err) throw err; 
    else {

        let listan = input.toString()

        const rows = listan.trim().split('\n');

        const leftColumn = [];
        const rightColumn = [];
        const similarityScoreArray = [];
        let similarityScore = 0;

        rows.forEach(row => {
            const [left, right] = row.trim().split(/\s+/).map(Number);
            leftColumn.push(left);
            rightColumn.push(right);
        });

        leftColumn.sort()
        rightColumn.sort()
        
    for (let index = 0; index < leftColumn.length; index++) {
        let count = 0;

        for (let i = 0; i < rightColumn.length; i++) {
            if (leftColumn[index] == rightColumn[i]) {
                count ++
            }
        }

        similarityScoreArray.push(leftColumn[index] * count)
    }
        for (let i = 0; i < similarityScoreArray.length; i++) {
            similarityScore += similarityScoreArray[i];
        }
    }
})