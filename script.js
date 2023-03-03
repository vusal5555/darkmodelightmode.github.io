const toggleSwitch = document.querySelector('input[type = checkbox]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const imageChange = function (color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};
const darkMode = function () {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageChange('dark');
};
const lightMode = function () {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageChange('light');
};

const themeChange = function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
    lightMode();
  }
};
toggleSwitch.addEventListener('change', themeChange);

const curTheme = localStorage.getItem('data-theme');

if (curTheme) {
  document.documentElement.setAttribute('data-theme', curTheme);

  if (curTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  } else {
    lightMode();
  }
}
