import { getInput, randomizePassword,renderToDom, copyPassword } from '/app/functions.js';
let options = ''


document.addEventListener('click',(e)=>{
  if (e.target.id === 'genBtn'){
  getInput(options)
  randomizePassword ()
  renderToDom ()
  options = ''
 }
 if (e.target.id === 'copy'){
  copyPassword()
 }
})

