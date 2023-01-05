const select = document.querySelector('select');
const para = document.querySelector('#weather-message');

select.addEventListener('change', setWeather2);

function setWeather() {
    const choice = select.value;

    if(choice === 'sunny') {
        para.textContent = "It's nice and sunny outside, you should wear shorts, go to the beach or the park and get an ice cream.";
    } else if(choice === 'rainy') {
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    } else if(choice === 'snowing') {
        para.textContent = "The snow is coming down - it is freezing! Best to staz in with a cup of hot chocolate, or go build a snowman.";
    } else if(choice === 'overcast') {
        para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    } else {
        para.textContent = " This simple weather dropdown will tell us what kind of weather is outside! ";
    }
}

//Whenever we have multiple cases we can use a switch statement instead of a conditional one. The switch statement takes a expression/value as an input and hten look through several choices until they find one that matches that value, executing the coresponding code that goes along with it

function setWeather2() {
    const choice = select.value;

    switch (choice) {
        case 'sunny': 
        para.textContent = "It's nice and sunny outside, you should wear shorts, go to the beach or the park and get an ice cream.";
        break;
        case 'rainy': 
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
        break;
        case 'snowing': 
        para.textContent = "The snow is coming down - it is freezing! Best to staz in with a cup of hot chocolate, or go build a snowman.";
        break;
        case 'overcast': 
        para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
        break;
        default:
        para.textContent = 'This is the first choice.';

    
        
    }
}
