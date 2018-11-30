import registerUser from "./Components/Login/registerUser"
import hideDiv from "./Components/Login/classChanger"
import messageToDom from "./Components/Messages/messageDisplay"
import tasksToDom from "./Components/Tasks/injectTask"

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout= document.querySelector("#logOutNav")
const message = document.querySelector("#messageNav")
let taskNav = document.querySelector("#taskNav")

logout.addEventListener("click",()=> {hideDiv.LogOut()})
newUsers.addEventListener("click", ()=> {
   registerUser()
})
existingUserButton.addEventListener("click", ()=>{
   registerUser()
})
taskNav.addEventListener("click", ()=> {
   tasksToDom()
})
message.addEventListener("click", ()=> { messageToDom()
})
   // article.addEventListener("click", () =>{ hideDiv.hideArticleDiv()})
   // task.addEventListener("click", () => { hideDiv.hideTaskDiv()})
   // event.addEventListener("click", ()=> { hideDiv.hideEventDiv()})
   // event listener for sign up and register buttons
   // const article = document.querySelector("#articleNav")
   // const event= document.querySelector("#eventNav")

