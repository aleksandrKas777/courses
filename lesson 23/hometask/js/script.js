
function taskOne(){
    const app = document.getElementById('app');
    app.innerHTML ='<div><div><p id="one" class="two">One</p><p class="two">Two</p></div><div><p id="four">Four</p><p name="five">Five</p></div></div>';


    const two = document.getElementsByClassName('two');

    console.log(document.getElementById('four').innerText);
    for(let i = 0; i < two.length; i++){
        console.log(two[i])
        two[i].style.fontSize = '30px';
    };  

    const abc = document.createElement("p");
    abc.innerText = 'Three';
    const five = app.querySelectorAll('p');
    app.firstChild.firstChild.appendChild(abc);
    const fon = app.firstElementChild.lastElementChild.querySelectorAll('p');

    for(let i = 0; i< five.length; i++){
        if (five[i].getAttribute('name') === 'five'){
            five[i].style.color = 'red';
        }
    }
    fon.forEach(element => {
        element.style.backgroundColor = 'yellow';
    });
};

taskOne();

function taskTwo(){
    const app = document.getElementById('app');
    app.innerHTML = '<div><div><p>One</p><p>Two</p></div><div><p>abc</p><p>DEF</p></div></div>';
    console.log(app.firstElementChild.firstElementChild.lastElementChild);
    const upper = app.lastElementChild.lastElementChild.querySelector('p');
    upper.style.textTransform = 'uppercase';
};

// taskTwo();


function taskThree(){
    const app = document.getElementById('app');
    let line = '';
    for(let i = 0; i < 10; i++){
        line = line + 1;
        const string = document.createElement('p');
        string.innerText = line;
        app.appendChild(string);
}
}

//taskThree();

function taskFour(){
    const app = document.getElementById('app');

    const dish = prompt('какое блюдо вы будете есть?', 'food');
    const string = document.createElement('p');
    switch(dish) {
        case 'chicken':
        case 'fish':
        case 'soup':        
            string.innerText = 'вы выбрали ' + dish + '. Отличный выбор!';
            break;
        case 'salad':
        case 'tomatos':
        case 'carrot':
        case 'cabbage':
            string.innerText = 'вы выбрали ' + dish + '. Вы на диете что ли?';
            break;
        default:
            string.innerText = dish + ' в меню нет, сидите голодным';
}
app.appendChild(string);
};

//taskFour();

