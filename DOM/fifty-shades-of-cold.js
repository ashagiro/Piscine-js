import { colors } from './fifty-shades-of-cold.data.js'
export function generateClasses() {
    let style = document.createElement("style")
    for (let i of colors) {
        style.appendChild(document.createTextNode(` .${i} { background: ${i}; }`));
    }
    document.head.appendChild(style)
}
export function generateColdShades() {
    let arr = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    for (let i of colors) {
        for (let j of arr) {
            if (i.includes(j)) {
                let div = document.createElement('div')
                div.setAttribute('class', i)
                div.append(i)
                document.body.append(div)
            }
        }
    }
}
export function choseShade(color) {
    let arr = [...document.getElementsByTagName("div")]
    for (let i of arr) {
        i.className = color
    }
}