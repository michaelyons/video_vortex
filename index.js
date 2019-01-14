const recentDate = () => {
  const date = new Date();
  const values = {
    hour: 'numeric',
    minute: '2-digit',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  const lastTime = date.toLocaleString('en-US', values);
  const splitDate = lastTime.split(',');
  const cleanDate = splitDate[3] + ' ' + splitDate[1] + ' ' + splitDate[2];
  const lastUpdated = document.querySelector('#updated-time');
  lastUpdated.innerHTML = 'last updated:' + cleanDate;
};

recentDate();

const openFilterMenu = event => {
  document.querySelector('.small-menu').classList.toggle('menu-hidden');
};

document
  .querySelector('#hamburger-icon')
  .addEventListener('click', openFilterMenu);
