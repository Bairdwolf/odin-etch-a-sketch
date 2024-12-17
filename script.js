//Function to draw grid with squares
function drawGrid(sides){
    const container=document.querySelector(".container");
    //now deletes anything in grid on startup
    const rows=document.querySelectorAll(".row");
    rows.forEach((row)=>{
        container.removeChild(row);
    });
    //Calculating gap size and adding it to make checkers
    const gapSize=480/(2*sides-1)
    container.style.gap=`${gapSize}px`;

    //creating random RGB colors
    function getRandomColor(){
        return Math.floor(Math.random()*256);
    }
    const red=getRandomColor();
    const green=getRandomColor();
    const blue=getRandomColor();

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

            //makes box random colors
            newBox.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`;
            //adds hover effect to change color
            newBox.style.opacity="0.1";
            newBox.addEventListener("mouseover", (e) => {
                const opacity=(newBox.style.opacity);
                let newOpacity=parseFloat(opacity)+0.1;
                newBox.style.opacity=newOpacity.toString();
                newRed=getRandomColor();
                newGreen=getRandomColor();
                newBlue=getRandomColor();
                newBox.style.backgroundColor=`rgb(${newRed}, ${newGreen}, ${newBlue})`;
            });
        }
        container.appendChild(newRow);
    }
}

//draws default grid of 16
drawGrid(16);

//adds button to create new grid
const button=document.querySelector("button");
button.addEventListener("click", ()=>{
    let input=prompt("Please enter number of sides");
    //ensures it cant be more than 100 to save memory
    if (input>100){
        input=100;
    }
    drawGrid(input);
});