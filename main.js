import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

const form = document.getElementById("create-task-form")
const input = document.getElementById("input")
const liste = document.getElementById("list")

function onSubmitTask(e) {
  e.preventDefault()
  const task = document.createElement("li")
  // creer un element checkbox
  const checkbox = document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  // ajouter une checkbox a la tache
  task.append(checkbox)

  // ccreer un element span ontenant la valeur de l'input
  const taskName = document.createElement("span")
  taskName.innerText = input.value
  // ajouter cet element a l'element task
  task.append(taskName)
  // creer un element bouton avec le texte "supprimer"
  const deleteButton = document.createElement("button")

  // ajouter un titre au bouton
  deleteButton.innerText = "Suprimer"
  // ajouter un event litener
  deleteButton.addEventListener(
    "click",
    deleteTask
  )
  // ajouter l'element bouton a task
  task.append(deleteButton)
  liste.append(task)

}

function deleteTask(e) {
  const listItem = e.target.parentNode
  liste.removeChild(listItem)
}

form.addEventListener(
  "submit",
  onSubmitTask
)
