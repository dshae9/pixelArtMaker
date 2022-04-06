// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const canvas = document.getElementById("pixelCanvas"); //Reference to the table element

document.getElementById("sizePicker").addEventListener("submit", function(event){
    event.preventDefault(); //prevent the default page refresh on form submission

    let formHeight = document.getElementById("inputHeight").value; //grab the height value from the form
    let formWidth = document.getElementById("inputWidth").value; //grab the height value from the form
    canvas.innerHTML = ""; // Clear the html of the innerHTML of the table element
    makeGrid(formHeight, formWidth)//Calling the makeGrid() function, passing in height and width


});


function makeGrid(formHeight, formWidth) { //rebuilding the grid
    
    
    for(i = 0; i < formHeight; i++){ //iterating form height
     let row = document.createElement("tr");  //creating a HTML row
     canvas.appendChild(row);    //appending row to table
        for(n = 0; n < formWidth; n++){//adding cells to rows with width
            let cells = document.createElement("td"); //creating the cell
            row.appendChild(cells); //appending cell to row

            const colorPicker = document.getElementById("colorPicker"); //create a variable for the color picker element
            cells.addEventListener("click", function(event){ //add event listener to add color
                let clickedCell = event.target;  //creating an event for when the cell is clicked
                clickedCell.style.backgroundColor = colorPicker.value; //changing the background color of the cell by using the color picker
            });
        }
    }

}
