let btnEL=document.querySelector(".btn")
let inputEL=document.querySelector(".inputt")
let saveEL=document.querySelector(".save")
let popup=document.querySelector(".alert-container")

btnEL.addEventListener("click",()=>{
     updatepassward();
})

saveEL.addEventListener("click",()=>{
     copypasswod();

     
})

function updatepassward(){
let length=15;
let chars="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&)(*&"
let password=""
for (let i = 0; i <length; i++) {
let rndidx=Math.floor(Math.random()*chars.length)
password +=chars.substring(rndidx,rndidx+1)     
}
console.log(password);

inputEL.value=password;

}

function copypasswod(){
     inputEL.select
     inputEL.setSelectionRange(0,999)
     navigator.clipboard.writeText(inputEL.value)
     popup.innerText=`${inputEL.value} Saved!`;

     if (inputEL.value) {
     popup.classList.remove("active")
          
          setTimeout(() => {
               popup.classList.add("active")
          }, 2000);
     }
}
