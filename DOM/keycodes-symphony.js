export function compose() {
    document.addEventListener('keydown', (event) => {
        let key = event.key
        if (key >= 'a' && key <= 'z' || key === ' ') {
            let div = document.createElement('div')
            div.append(event.key)
            div.setAttribute('class', 'note')
            div.style.background = `rgb(${event.keyCode}, 33, 44)`
            document.body.append(div)
        } else if (key === 'Backspace') {
            let arr = [...document.getElementsByTagName("div")]
            let div = arr[arr.length - 1]
            if (arr.length === 0) return;
            div.parentNode.removeChild(div);
        } else if (key === 'Escape') {
            let div = document.querySelectorAll('.note')
            div.forEach(x => {
                x.remove()
            });
        }
    }, false)
}