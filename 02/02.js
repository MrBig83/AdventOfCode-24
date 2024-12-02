const fs = require('fs')

fs.readFile("02beta.txt", (err, input) => {
// fs.readFile("02_input.txt", (err, input) => {
    if (err) throw err; 
    else {
        let listan = input.toString()
        const rows = listan.trim().split('\n');        
        
        let masterData = [];
        let monsterData = [];
        
            rows.forEach(row => {
                const list = row.trim().split(/\s+/).map(Number); 
                monsterData.push(list);
            });
            
        masterData = monsterData[0]
        console.log(masterData);

        var prevNum; 
        var compareNum;
        var diff;
        let prevDiff;
        let compareDiff;
        var direction;
        var prevDirection;
        var counterrors = 0;
        var prevCounterrors;
        var goodReactor = 0;
        var dampener = 1;

        // for (let i = 0; i < 5; i++) {
        for (let i = 0; i < monsterData.length; i++) {
            prevCounterrors = counterrors;

        for (let j = 0; j < monsterData[i].length; j++) {
            
            compareNum = monsterData[i][j]
            // console.log(masterData[i]);
            

            if (prevNum) {
                diff = (prevNum-compareNum)
                
                if(diff < 0) {
                    direction = "N"
                } else if (diff > 0) {
                    direction = "P"
                } else {
                    console.log("ABORT - INGEN DIFF");
                    counterrors++
                }
                console.log(diff + direction);
                if(prevDirection) {
                    
                    if(prevDirection != direction) {
                        console.log("ABORT - Direction change " + diff);
                        counterrors++
                    } else {
                        prevDirection = direction;
                    }
                }
                prevDirection = direction;
                

                if(diff > 3 || diff < -3 || diff == 0) {
                    console.log("ABORT - Diffen är mer än 3");
                    counterrors++
                    prevNum = compareNum
                } else {
                    prevNum = compareNum
                    
                }
            }
            prevNum = compareNum
            // } else if (diff < -3) {
            //     console.log("ABORT - Diffen är mindre än -3");
            //     counterrors++
            
            // } else if (diff == 0) {
            //     console.log("ABORT - INGEN DIFF");
            //     counterrors++
            //     prevNum = compareNum
            
            // } else {
            //     prevNum = compareNum
            // }






            if(prevDiff) {


                prevDiff = diff
            } else {
                prevDiff = diff
            }
            

        }
        console.log("END");
        
        
        
        
        
        console.log(counterrors);
        
        prevNum = null;
        compareNum = null;
        diff = null; 
        prevDirection = null;
        if(prevCounterrors == counterrors) {
            goodReactor++
        }
        console.log("Bra skit: " + goodReactor);
        
    }
    }

    })