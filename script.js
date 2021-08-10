// Selectors
const inputTxt = document.getElementById("input-txt")
const inputBtn = document.getElementById("input-btn")
const listItems = document.getElementById("list-items")
const removeButton = document.getElementById("clear")

// Event Listeners
inputBtn.addEventListener("click", addList)
removeButton.addEventListener("click", removeAll)

// Function to create List-items 
function addList(e) {
     e.preventDefault()
     const checkButton = document.createElement('span')
     checkButton.innerHTML = '<i class="fas fa-check"></i>'
      checkButton.classList.add("check-button")
     const taskList = document.createElement("div")
     taskList.classList.add("todo-container")
     taskList.classList.add("todo-container:nth-child(odd)")

      
      const todoList = document.createElement('li')

      const timesButton = document.createElement('span')
     timesButton.innerHTML = '<i class="fas fa-times"></i>'
    

     if (inputTxt.value !== "") {
       listItems.appendChild(taskList)
       todoList.innerHTML = inputTxt.value
       taskList.appendChild(todoList)
       taskList.appendChild(timesButton)
     } else {
         alert("Please type in a task...")
     }

     inputTxt.value = ""

     timesButton.addEventListener("click", checkTask)


     function checkTask() {
          if (taskList.contains(checkButton)) {
           taskList.removeChild(checkButton)
              } else{
                taskList.appendChild(checkButton)
            }

            taskList.classList.toggle("check-todo")

}

}

function removeAll () {
    while(listItems.hasChildNodes()) {
       listItems.removeChild(listItems.firstChild)
    }
    
}


