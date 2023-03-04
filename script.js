const toggleSwitch = document.querySelector('input[type = checkbox]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//image path change
const imageChange = function (color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

//clean code
const toggleDarkLightMode = function (isDark) {
  nav.style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark ? imageChange('dark') : imageChange('dark');
};

//Not clean code
// const darkMode = function () {
//   nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//   toggleIcon.children[0].textContent = 'Dark Mode';
//   toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
// };
// const lightMode = function () {
//   nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//   toggleIcon.children[0].textContent = 'Light Mode';
//   toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//   imageChange('light');
// };

//main function
const themeChange = function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
    toggleDarkLightMode(false);
  }
};
toggleSwitch.addEventListener('change', themeChange);

//local storage to keep user preference
const curTheme = localStorage.getItem('data-theme');

if (curTheme) {
  document.documentElement.setAttribute('data-theme', curTheme);

  if (curTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  } else {
    toggleDarkLightMode(false);
  }
}
