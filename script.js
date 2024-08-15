const gridContainer = document.querySelector('.grid-container')
const gridTemplate = document.querySelector('.cell-template');
const promptBtn  = document.querySelector('.prompt-btn');

var n = 0;
function prompter(){
    gridContainer.innerHTML = '';
    n = prompt('enter the dimension eg.10');
    while(n>100){
        n = prompt('Renter the dimension again. It should be less than 100');
    }
    for(let j = 0; j < n; j++){
        for(let i = 0; i < n; i++){
            const cell = gridTemplate.content.cloneNode(true).children[0];
            const size = (100/n);
            cell.style.width = size + 'vw';
            cell.style.height = size + 'vw';
            gridContainer.appendChild(cell);
            cell.addEventListener('mouseenter', () => {
                var r = Math.floor(Math.random()*256);
                var g = Math.floor(Math.random()*256);
                var b = Math.floor(Math.random()*256);
                cell.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            })
        }
    
    }
}

