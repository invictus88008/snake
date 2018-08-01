/**
 * draws the rows and colums for the background
 */
export const drawBackground = (ctx) => {
const numRows = 7
const numCols = 6
let activeIndex = 0
    for (var row = 0; row < numRows; row++) {
            for (var col = 0; col < numCols; col++) {
                    if(activeIndex % 2 === 0) {
                        ctx.fillStyle = "#4BC529"
                    }
                    else {
                        ctx.fillStyle = "#308720"
                    }
                ctx.fillRect( col * 50, row * 25, 50, 25);

                activeIndex ++
            }
            activeIndex ++
        }

}