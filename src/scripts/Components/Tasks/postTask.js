import taskAPIFunctions from "./taskFetching"
import tasksToDom from "./taskDisplay"
function newTaskCreation(){
  // let taskName = document.querySelctor("#taskName")
  // let taskDate = document.querySelctor("#taskDate")
 const task = {
    user_id: sessionStorage.user_id,
    name: document.querySelector(".taskName").value,
    date: document.querySelector(".taskDate").valueAsDate,
    completed: false
    }
    taskAPIFunctions.postTask(task).then(() => {
      tasksToDom()
    })
 }
export default newTaskCreation