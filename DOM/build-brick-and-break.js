export function build(amount) {
    let i = 1
    let interval = setInterval(function () { // setInterval is a loop that takes a function and time
        let div = document.createElement("div")
        div.id = `brick-${i}` // setting attribute
        div.append(i) // setting value
        if ((i + 1) % 3 === 0) {
            div.setAttribute("data-foundation", true)
        }
        document.body.append(div) // introducing element to an HTML
        if (i === amount) {
            clearInterval(interval)
        }
        i++
    }, 100)
}
export function repair(...arr) { // can accept any number of input
    let idArr = [...arr] // convert all input  to array
    for (let i in idArr) {
        let id = document.getElementById(arr[i])
        if (id.hasAttribute("data-foundation")) {
            id.setAttribute("data-repaired", "in progress")
        } else {
            id.setAttribute("data-repaired", 'true')
        }
    }

}
export function destroy() {
    const arr = [...document.getElementsByTagName("div")]
    let id = `brick-${arr.length}`
    let s = document.getElementById(id)
    s.remove()
}