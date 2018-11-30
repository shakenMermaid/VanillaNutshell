import registerUser from "./Components/Login/registerUser";
import hideDiv from "./Components/Login/classChanger"
import messageComponent from "./Components/Messages/messageDisplay"
import eventDisplay from "./Components/Events/eventDisplay";

let existingUserButton = document.getElementById("loginButton")
let newUsers = document.getElementById("signUpButton")
const logout= document.querySelector("#logOutNav")

logout.addEventListener("click",()=> {hideDiv.LogOut()})
newUsers.addEventListener("click", ()=> {
   registerUser()
})
existingUserButton.addEventListener("click", ()=>{
   registerUser()
})

messageComponent()
eventDisplay()


// message.addEventListener("click", () => {
   //    location.clear()
   //    messageComponent.messageComponent()})
   // article.addEventListener("click", () =>{ hideDiv.hideArticleDiv()})
   // task.addEventListener("click", () => { hideDiv.hideTaskDiv()})
   // event.addEventListener("click", ()=> { hideDiv.hideEventDiv()})
   // event listener for sign up and register buttons
   // const message = document.querySelector("#messageNav")
   // const article = document.querySelector("#articleNav")
   // const task= document.querySelector("#taskNav")
   // const event= document.querySelector("#eventNav")

