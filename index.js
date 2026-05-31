// index.js
 
 const shareButton = document.getElementById('share-btn')
 const card = document.getElementById("card")

 shareButton.addEventListener('click',()=> {
 	card.classList.toggle("share-open")
 })