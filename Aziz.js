let btn = document.querySelector('.btn')
let inp = document.querySelector('.do')
let main = document.querySelector('.main')

btn.onclick = () => {
    if(inp.value.length > 0) {
 //create
 let task = document.createElement('div')
 let span = document.createElement('span')
 let button = document.createElement('button')
 let del = document.createElement('div')
 let link = document.createElement('a')

 //Attribute
 link.setAttribute('href' , 'https://www.instagram.com/p/CAs-0jwjJOM/?igshid=MDJmNzVkMjY=')

 //innerHTML
 span.innerHTML = inp.value
 button.innerHTML = 'delete'
 link.innerHTML = 'prikol'

 //classList
 task.classList.add('task')
 span.classList.add('span') 
 button.classList.add('button')
 del.classList.add('del')
 link.classList.add('link')

 //append
 main.append(task)
 task.append(span)
 task.append(button)
 task.append(del)
 task.append(link)

 //onclick
 button.onclick = () => {
     task.classList.add('active')
 }
 span.onclick = () => {
     if(del.classList.contains('del')) {
         del.classList.add('del-active')
         setInterval(() => {
             del.classList.add('del-activeb')
             del.classList.remove('del-active')
         }, 2000)
     } 
 }
    } else { alert('zdes bil Daler Sharifkulov vuhahahahaha')}
}