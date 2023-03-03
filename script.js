const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
// query selectors aren't hard to understand I have a decent grasp of the concept.//
// this section selects all buttons to designated button presses.//
//Each button press is linked to an html class or an html id which then is linked to the button that represents that class or id//
buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})
// This section is the dark/light toggle function the function is coded correctly I have to figure out why the button wont show//
const themeToggleButton = document.querySelector('.theme-toggle');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggle-icon');
let isDark = true;
themeToggleButton.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleButton.classList.toggle('active');
    isDark = !isDark;
}
 // some of my goals in this project is to understand the majority of this code // 