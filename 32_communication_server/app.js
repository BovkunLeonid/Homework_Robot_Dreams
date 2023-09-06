// Операції CRUD_______________________________________________________________________________
// Read -читати; метод GEET - запрос данних (їх перегляд); ____________________________________
window.addEventListener('DOMContentLeaded', getAllTodos());

function getAllTodos() {
    fetch('https://rd-api-1fd95-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
    .then(respons => {
        return respons.json();
    })
    .then((data) => {
        let todos = [];
        for (const key in data) {
            todos.push({...data[key], id: key});
        }
        return todos;
    })
    .then((todos) => {
        todos.forEach(todoToHTML);
    });
};

function todoToHTML(todo) {
    const todoList = document.getElementById('todos');
    todoList.insertAdjacentHTML('beforeend', `
        <div class="form-check" id="todo${todo.id}">
            <label class="form-check-label">
                <input onchange="toggleCompleteTodo('${todo.id}')" type="checkbox" class="form-check-input" ${todo.completed && 'checked'}>
                ${todo.title}
            </label>
            <button onclick="deleteTodo('${todo.id}')" type="button" class="btn-close" aria-label="Close"></button>
        </div>
    `);
};

// Create - створити; метод POST - створення данних (їх опублікування); _________________________________
document.getElementById('addTodo').addEventListener('click', () => {
    const input = document.getElementById('todoText');
    const title = input.value;

    if (title) {
        fetch('https://rd-api-1fd95-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
            method: "POST",
            body: JSON.stringify({
                title, 
                completed: false})
        }).then(respons => {
            return respons.json();
        }).then(() => {
            input.value = '';
            location.reload();
        });
    };
});

// Delete - видалити; метод DELETE - видалення; _________________________________
function deleteTodo(id) {
    fetch(`https://rd-api-1fd95-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
        method: "DELETE"})
    .then(respons => {
        return respons.json();
    })
    .then((data) => {
      if (data === data) {
        document.getElementById(`todo${id}`).remove();}
    });
};

//  - змінити; метод PATCH - внести зміни; _________________________________
function toggleCompleteTodo (id) {
    const completed = document.querySelector(`#todo${id} input`).checked;
    fetch(`https://rd-api-1fd95-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
        method: "PATCH",
        body: JSON.stringify({completed})
    })
    .then(respons => {
        return respons.json();
    })
    .then((data) => {
        console.log(data)
    });
};