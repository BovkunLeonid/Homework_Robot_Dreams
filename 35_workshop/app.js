window.addEventListener('DOMContentLeaded', getAllPublic());

let publicHTML = document.querySelector('.public');

function getAllPublic() {
    fetch("https://gorest.co.in/public/v2/users").then(response => {
        return response.json();
    })
    .then((data) => {
        return data;
    })
    .then((data) => {
        data.forEach((element) => {
            publicHTML.innerHTML += `
            <div class="card-body pub">
                <h5 class="card-title name">${element.name}</h5>
                <p class="card-text email">email: ${element.email}</p>
                <p class="card-text gender">gender: ${element.gender}</p>
                <p class="card-text status">status: ${element.status}</p>
                <a href="post.html" class="btn btn-primary" onclick="getContent('${element.id}')">відкрити</a>
            </div>
            `;
        });
    })
};

function getContent(id) {
    localStorage.setItem('userId', id);
};