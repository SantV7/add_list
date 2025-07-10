const area_task = document.getElementById('area_task')
const local_task = document.getElementById('local_task')
const btn_add = document.getElementById('btn_add')

function add_task() {
    const taskText = input_task.value.trim()
        if (taskText === "") {
    alert("Por favor, digite uma tarefa!")
    return
    }

    const li = document.createElement("li")
    li.innerHTML = `${taskText}
    <button class="concluido_btn">Concluído</button>`
    
    local_task.appendChild(li)
    input_task.value = ""
    li.querySelector(".concluido_btn").addEventListener("click", () => {
        li.remove()
    })
}

input_task.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        add_task()
    }
})


