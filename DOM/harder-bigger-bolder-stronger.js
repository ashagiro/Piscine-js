export function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let div = document.createElement("div")
        let letterNum = 65 + Math.floor(Math.random() * 26);
        div.append(String.fromCharCode(letterNum));
        let num = 11 + i;
        div.style.fontSize = `${num}px`;
        if (i < 40) div.style.fontWeight = `300`;
        else if (i > 39 && i < 80) div.style.fontWeight = `400`;
        else div.style.fontWeight = `600`;
        document.body.append(div)
    }
}
//String.fromCharCode(2+64) to get B
