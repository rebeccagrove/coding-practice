//  write a function to find the perimeter of a rectangle 

const calculatePerimeter = (width,height) => {
    return width + width + height + height;
}

console.log(calculatePerimeter(1,1));

//  write a function to find the area of a circle 

const calculateArea = (radius) => {
    const area = Math.PI * radius * radius;
    console.log(area);
}

(calculateArea(2));

//  Now do the same to find the circumference of a circle  

const findCircumference = (radius) => {
    return 2 * Math.PI * radius;
}
console.log(findCircumference(2));

getDescription = (jobTitle,location,partner,amountOfChildren) => {
    const message = (`I am currently a ${jobTitle}, living in ${location}, married to ${partner} and we have ${amountOfChildren} Children.`)

    console.log(message)
}

getDescription("Software entineer","Bristol", "Jonathan", 4)


const calculateSupply = (currentAge, amountOfSnickersPerDay) => {
    const maxAge = 90;
    const totalNeeded = (amountOfSnickersPerDay * 365) * (maxAge - currentAge);
    const message = (`You will need ${totalNeeded} Snickers to last until you reach the ripe old age of ${maxAge}`)
    
    console.log(message)
}

calculateSupply(32,2);


const convertTemperature = (currentTemperatureInCelcius) => {
    const fahrenheit = (currentTemperatureInCelcius * 1.8) + 32;
    const message = (`${currentTemperatureInCelcius} degrees Celcius is ${fahrenheit} degrees in Fahrenheit`)

    console.log(message);
}

convertTemperature(28);

const calculateDogYears = (dogAgeHumanYears) => {
    const dogYears = (dogAgeHumanYears*7);
    const message = (`A ${dogAgeHumanYears} year old dog in human years is ${dogYears} years old in dog years`)

    console.log(message);
}
 calculateDogYears(6);