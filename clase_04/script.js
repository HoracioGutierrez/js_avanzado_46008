const pagina1 = document.querySelector("#pagina1")
const pagina2 = document.querySelector("#pagina2")
const main = document.querySelector("main")

//History - location.hash

const ajax = (url) => {
    const xhr = new XMLHttpRequest
    xhr.open("GET",url)
    xhr.addEventListener("load",()=>{
        if(xhr.status===200){
            main.innerHTML = xhr.response
        }
    })
    xhr.send()
}

pagina1.addEventListener("click",()=>{
    ajax("pagina1.html")
})


pagina2.addEventListener("click",()=>{
    ajax("pagina2.html")
})