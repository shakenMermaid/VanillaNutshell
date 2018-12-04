import newTaskCreation from "./postTask"
import deleteTask from "./deleteTask"
import editTask from "./editTask";

const taskManager = {

  editButton(){
    console.log("clicked edit button")
    document.addEventListener("click", (e)=>{
      if(e.target && e.target.id === "editButton"){
        let Id = e.target.className
        let taskDate = document.querySelector(".taskDate")
        let taskName = document.querySelector(".taskName")
        let obj ={
          name: taskName.value,
          date: taskDate.valueAsDate
        }
        console.log("hello edit baby", obj)
         editTask(obj, Id)
      }
    })
  },
  newTask() {
    document.addEventListener("click", function (e) {
      if (e.target && e.target.id === "taskButton") {
        newTaskCreation()
        console.log("it posted")
      }
    })
  },
  deleteTask() {
    document.addEventListener("click", function (e) {
      if (e.target && e.target.id === "deleteButton") {
        let taskIdNumber = e.target.className
        deleteTask(taskIdNumber)
      }
    })
  }
}
export default taskManager