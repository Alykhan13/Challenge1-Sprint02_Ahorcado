function checkChar(char) {
    let targetChar = ["a","e","i","o","u"];
    for(c in targetChar) {
        if(targetChar[c] == char){
            return true;
        }
    }

    return false;
}

function decodeText() {
    let text = textArea.value;
    let newText = "";
    
    for(let i=0;i<text.length;i++) {
        let char = text.charAt(i);
        let vowel = checkChar(char);
        let codedText = "";

        if(vowel) {
            switch (char) {
                case "a":
                    codedText = "ai";
                    break;
                case "e":
                    codedText = "enter";
                    break;
                case "i":
                    codedText = "imes";
                    break;
                case "o":
                    codedText = "ober";
                    break;
                case "u":
                    codedText = "ufat";
                    break;
            }

            newText += char;
            i += codedText.length - 1;

        } else newText += char;
    }

    outputText.textContent = newText;
}

function codeText() {
    let text = textArea.value;
    let newText = "";
    
    for(let i=0;i<text.length;i++) {
        let char = text.charAt(i);
        let vowel = checkChar(char);

        if(vowel) {
            switch (char) {
                case "a":
                    newText += "ai";
                    break;
                case "e":
                    newText += "enter";
                    break;
                case "i":
                    newText += "imes";
                    break;
                case "o":
                    newText += "ober";
                    break;
                case "u":
                    newText += "ufat";
                    break;
            }
        } else newText += char;
    }

    outputText.textContent = newText;
}