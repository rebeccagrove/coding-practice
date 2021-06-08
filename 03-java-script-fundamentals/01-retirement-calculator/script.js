function calculateYearsUntilRetirement(event){
    const currentAge = event.target.value;

// start code here

const yearsLeft = 65 - currentAge;
    alert(yearsLeft)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "Hello") {
        alert('Bonjour')
    } else if (greeting == "Goodbye") {
        alert('Au revoir') 
    } else {
        alert ('I cannot translate your message')
    }
}