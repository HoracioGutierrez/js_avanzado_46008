const links = document.querySelectorAll(".link")
const main = document.querySelector("main")

const ajax = url => {
    const xhr = new XMLHttpRequest
    xhr.open("GET",url)
    xhr.addEventListener("load",()=>{
        if(xhr.status===200){
            main.innerHTML = xhr.response
        }
    })
    xhr.send()
}



links.forEach(link=>{

    link.addEventListener("click",(e)=>{
        e.preventDefault()
        e.stopPropagation()
        ajax(link.href)
        history.pushState(link.href,null,link.innerText)
    })

})


window.addEventListener("popstate",()=>{
    //console.log("Cambio el estado")
    //console.log(location.href + ".html")
    //ajax(location.href + ".html")
    ajax(history.state)
})


//History API  /  location.hash
//history.pushState({},null,"nuevaURL")
//location.hash = "nuevaURL"
//popstate = Este evento se dispara cuando el estado del historial cambia