// index.js
 
 const button = document.getElementById('share-btn')
 const div = document.getElementById("final-div")
 console.log(button)

 button.addEventListener('click',()=> {
 	console.log('hello')
 	const newDiv = document.createElement("div")
 	const para = document.createElement("p")
 	para.textContent = "someparagraph"
 	newDiv.appendChild(para)
 	newDiv.style.backgroundColor = "white"
 	newDiv.style.padding = "1rem"
 	// newDiv.style.marginTop = "2rem"
 	newDiv.style.border = "1px solid red"
 	div.replaceWith(newDiv)
 })