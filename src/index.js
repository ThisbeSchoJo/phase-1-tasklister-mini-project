document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTask = document.querySelector("#new-task-description").value // access input value directly
    buildToDo(newTask) // pass the value to the function
    form.reset(); //clear the input field
  })
});


function buildToDo(todo) {
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.textContent = "O"
  btn.addEventListener("click", handleDelete)
  p.textContent = todo
  p.appendChild(btn)
  // console.log(p)
  document.querySelector("#tasks").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}