function taskForm(){
  let taskForm = `
  <div>
  <input type="text" id="taskName" class="taskName" placeholder="Name"/>
  <input type="date" id="taskDate" class="taskDate" />
  <input type="button" id="taskButton" value="send" class="taskButton"/>
  </div>
  `
  return taskForm
}
export default taskForm