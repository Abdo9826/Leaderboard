// const boards = [
//   {
//     name: 'Name',
//     score: 100,
//   },
//   {
//     name: 'Name',
//     score: 360,
//   },
//   {
//     name: 'Name',
//     score: 460,
//   },
//   {
//     name: 'Name',
//     score: 1000,
//   },
// ];
// boards.forEach((board) => {
//   const lists = document.querySelector('.list');
//   lists.innerHTML += `<li>${board.name}: ${board.score}</li>`;
// });

// localStorage.setItem('names and scores', JSON.stringify(boards));
const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');

class Scores {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

submit.addEventListener('click', async (e) => {
  e.preventDefault();

  const name = document.querySelector('.name');
  const score = document.querySelector('.score');
  const scorestore = new Scores(name.value, score.value);
  const details = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BTEFhiuCoiyuhoiM98uY/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scorestore),
    }
  );
  score.value = '';
  name.value = '';
  const DE = await details.json();
  return DE;
});

refresh.addEventListener('click', async (e) => {
  e.preventDefault();
  const list = document.querySelector('.list');
  list.innerHTML = '';
  const content = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BTEFhiuCoiyuhoiM98uY/scores/'
  );

  const data = await content.json();

  const creatUI = async (data) => {
    data.result.forEach((board) => {
      list.innerHTML += `<li>${board.user}: ${board.score}</li>`;
    });
  };
  creatUI(data);
});
