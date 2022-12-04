// https://icanhazdadjoke.com/
const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning-app',
      },
    });
    if (!response.ok) {
      console.log('error!');
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = 'ther are an erro...';
  }
};

fetchDadJoke();

const data = btn.addEventListener('click', () => {
  fetchDadJoke();
});
