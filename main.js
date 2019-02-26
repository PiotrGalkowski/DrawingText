let optionsTab = [];
const h1 = document.querySelector('h1');
const input = document.querySelector('input');

const btnOptions = document.querySelector('.showOptions');
const btnAdvice = document.querySelector('.showAdvice');
const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');


const addAdvice = () => {
    h1.textContent = '';
    event.preventDefault();
    optionsTab.push(input.value);
    input.value = '';
}

const cleanOptions = () => {
    h1.textContent = '';
    event.preventDefault();
    optionsTab.length = 0;
}

const showAdvice = () => {
    const adviceIndex = Math.floor(Math.random() * optionsTab.length);
    h1.textContent = optionsTab[adviceIndex];
}

const showOptions = () => {
    let options = '';

    optionsTab.forEach((option, index) => {
        if (index < optionsTab.length-1) {
            options += option + ' --- ';
        } else {
            options += option;
        }
    })

    alert(`Możliwe opcje to: ${options}`);
}


btnOptions.addEventListener('click', showOptions);
btnAdvice.addEventListener('click', showAdvice);
btnAdd.addEventListener('click', addAdvice);
btnClean.addEventListener('click', cleanOptions);


