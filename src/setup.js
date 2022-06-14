const boards = [
  {
    name: 'Name',
    score: 100,
  },
  {
    name: 'Name',
    score: 360,
  },
  {
    name: 'Name',
    score: 460,
  },
  {
    name: 'Name',
    score: 1000,
  },
];
boards.forEach((board) => {
  const lists = document.querySelector('.list');
  lists.innerHTML += `<li>${board.name}: ${board.score}</li>`;
});

localStorage.setItem('names and scores', JSON.stringify(boards));
