//Function to draw grid with squares
function drawGrid(sides){
    const container=document.querySelector(".container");
    //Calculating gap size and adding it to make checkers
    const gapSize=480/(2*sides-1)
    container.style.gap=`${gapSize}px`;
    for (let i=0; i<sides; i++){
        //adds new row and sets its style
        const newRow=document.createElement("div");
        newRow.classList.add("row");
        newRow.style.gap=`${gapSize}px`;
        for (let j=0; j<sides; j++){
            //adds new box and sets it to box
            const newBox=document.createElement("div");
            newBox.classList.add("box");
            newRow.appendChild(newBox);
        }
        container.appendChild(newRow);
    }
}

//draws default grid of 16
drawGrid(16);
