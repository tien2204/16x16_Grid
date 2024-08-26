document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("container");
    const resizeButton = document.getElementById('resizeButton');
    const defaultGridSize = 960;

    function createGrid (size) {
        container.innerHTML = '';

        for(let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-square');
            div.style.width = `${defaultGridSize/size}`;
            div.style.height = `${defaultGridSize/size};`
            div.style.flexBasis = `${defaultGridSize/size}`;
            container.appendChild(div);
        }
    }

    function resizeGrid() {
        let newSize = prompt("Enter the number of squares per side for the new grid (1-100):", 16);
        newSize = parseInt(newSize);

        if (newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    }

    resizeButton.addEventListener('click', resizeGrid);

    createGrid(16);
})