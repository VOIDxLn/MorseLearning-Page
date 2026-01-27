

// Traductor
function morse(caracter) {

    switch(caracter) {

        case "a":
            morse = ".-";
            break;
        
        case "b":
            morse = "-...";
            break;

        case "c":
            morse = "-.-.";
            break;

        case "d":
            morse = "-..";
            break;

        case "e":
            morse = ".";
            break;

        case "f":
            morse = "..-.";
            break;

        case "g":
            morse = "--.";
            break;

        case "h":
            morse = "....";
            break;

        case "i":
            morse = "..";
            break;

        case "j":
            morse = ".---";
            break;

        case "k":
            morse = "-.-";
            break;

        case "l":
            morse = ".-..";
            break;

        case "m":
            morse = "--";
            break;

        case "n":
            morse = "-.";
            break;

        case "ñ":
            morse = "-...";
            break;

        case "o":
            morse = "---";
            break;

        case "p":
            morse = ".--.";
            break;

        case "q":
            morse = "--.-";
            break;

        case "r":
            morse = ".-.";
            break;

        case "s":
            morse = "...";
            break;

        case "t":
            morse = "-";
            break;

        case "u":
            morse = "..-";
            break;

        case "v":
            morse = "...-";
            break;

        case "w":
            morse = ".--";
            break;

        case "x":
            morse = "-..-";
            break;

        case "y":
            morse = "-.--";
            break;
        
        case "z":
            morse = "--..";
            break;

        case " ":
            morse = "  ";
            break;

        default:
            console.log("Error");
            break;
    }

    return morse;
}

// Variable
let input = "";
let resultado = "";
let caracter = "";

// Route
for(i=0; i < input.length; i++){

    caracter = input[[i]]

    morse(caracter);
    resultado = resultado + morse;
    if(resultado.length != 0){
        resultado = resultado + " ";
    }
}

// Recordar variable resultado tiene la traduccion a morse.


function MorseTraductor() {

    return (
        <div>

        </div>
    )
}

export default MorseTraductor;