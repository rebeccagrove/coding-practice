function handleProductPrice(event) {
let vegetable = event.target.value;

let vegetable="carrot";
switch(vegetable) {
    case "potato":
    case "carrot":
        console.log("£1.25 per kg")
    break;

    case "broccoli":
        console.log("£1.50 per kg")
    break;

    case "asparagus":
        console.log ("£1.20 per kg")
    break;

    default:
        return "Enter Potato, Carrot, Asparagus or Broccoli"
}
}