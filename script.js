const inputvl = document.getElementById("info")
const add = document.getElementById("submit")
const ulElt = document.querySelector(".list-items")

const completed = document.querySelector('#completed')
const notcompleted = document.querySelector('#notcompleted')

const list = document.getElementsByTagName('li')

add.addEventListener("click",function(e){
    // e.preventDefault();
    console.log(inputvl.value)
    const li = document.createElement('li')
    li.innerHTML = `${inputvl.value}<i></i>`
    li.addEventListener("click",function(e){
        this.classList.toggle("done")
    })

    ulElt.append(li)
    inputvl.value=""

    const i = li.querySelector("i")
    i.addEventListener("click",function(){
        li.remove()
    })

    completed.addEventListener("click",function(){
        
        // if(li.classList != "done"){
        //     console.log(this.value,completed.value)
        //     // li.remove()
        //     // li.classList.add("hide")
        //     console.log(list)
        // }
    
        for(let i of list){
            let item = i.classList.value;
            if(item !="done"){
                i.classList.toggle("hide");
            }
        }
    })

    notcompleted.addEventListener("click",function(){
        for(let i of list){
            if(i.classList.value == "done" || i.classList.value == "done hide"){
                i.classList.toggle("hide")
            }
        }
    })
    // console.log(this)
})

add.addEventListener("keydown",function(e){
    if(e.key == "Enter")
    {
    const li = document.createElement('li')
    li.innerHTML = `${inputvl.value}<i></i>`
    ulElt.append(li)
    this.value=""
    // console.log(this)

    const i = li.querySelector("i")
    i.addEventListener("click",function(){
        li.remove()
    })
    }
})

