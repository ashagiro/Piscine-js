import { styles } from './pimp-my-style.data.js'
let count = 0;
export function pimp() {
    let button = [...document.getElementsByTagName("button")][0]
    if (button.className.includes("unpimp")) {
        if (count === 0) {
            button.className = button.className.replace(` ${styles[count]} unpimp`, "")
        } else {
            button.className = button.className.replace(" " + styles[count], "")
            count--
        }
    } else {
        button.setAttribute('class', button.className + " " + styles[count])
        if (count === 14) {
            button.setAttribute('class', button.className + " unpimp")
            count--
        }
        count++;

    }
    // console.log(styles.slice(13))
}