const addItem = async (item) => {
    await randomTimeDelay();
    let div = document.createElement("div")
    div.innerHTML = item
    document.querySelector(".container").insertAdjacentElement("beforeend", div)
}
const randomTimeDelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = (Math.random() * 2) + 1
        setTimeout(() => {
            resolve()
        }, timeout * 200)
    })
}

let data = ["Initialized Hacking",
    "Password files detected",
    "Cleaning Up",
    "Sending all passwords and personal files to server",
    "Reading your files",
    "Copied",
    "Disconnected from Service"]
    
// let forDot = async ()=>{

//     console.log(last)
// }
const processing = async ()=>{
    let inter = setInterval(() => {
        let last = document.getElementsByTagName("div")
        last = last[last.length-1]
        if(last.innerText.endsWith("...")){
            last.innerText = last.innerText.slice(0, last.innerText.length-1)
        }else{
        last.innerText = last.innerText+'.'
        }
    }, 100);

    for (const item of data) {
        await addItem(item)
    }
    clearInterval(inter)
    setTimeout(() => {    
        doc = document.querySelector(".container")
        doc.setAttribute("class", "js-complete")
        doc.innerText = "You are Finished"
        document.title = "You are Finished"
    }, 2000);

}
document.addEventListener('contextmenu',
    event => event.preventDefault());
processing()