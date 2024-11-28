
function formulToggle(){
let option = document.getElementById("position").value ;
document.getElementById("gk-inputs").style.display='none';
option.addEventListener("change",()=>{
if(option == 'GK'){
document.getElementByClassName("player-inputs").style.display ='none'
document.getElementByClassName("gk-inputs").style.display ='flex'
}else{
document.getElementByClassName("player-input").style.display ='flex'
document.getElementByClassName("gk-inputs").style.display ='none'
}
})
}
formulToggle()
