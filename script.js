const body = document.getElementById('body')
const section = document.createElement('section')

body.appendChild(section)

const div =  document.createElement('div')

section.appendChild(div)

const heading =  document.createElement('h1')
heading.textContent= "JohnSon Teaching Us 😊!"

div.appendChild(heading)

const paragraph = document.createElement('p')
paragraph.textContent = "I am learning DOM 👍"

div.appendChild(paragraph)

section.style.cssText = "background-color: blueviolet; margin: 5%; padding:10%; justify-content:center; allignitems:center;"

const button = document.createElement('button')
button.textContent = 'BYE🥱'
div.appendChild(button)

button.style.cssText = "border: 2px solid black; border-radius: 12px;"

button.addEventListener('click', ()=>{
    section.style.backgroundColor = "brown"
})

