const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

function makeMove(index) {
    if (!cells[index].textContent) {
        cells[index].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            cells[a].style.backgroundColor = '#66ff66';
            cells[b].style.backgroundColor = '#66ff66';
            cells[c].style.backgroundColor = '#66ff66';
            cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
        }
    }
}

function handleCellClick(event) {
    const cellIndex = Array.from(cells).indexOf(event.target);
    makeMove(cellIndex);
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));