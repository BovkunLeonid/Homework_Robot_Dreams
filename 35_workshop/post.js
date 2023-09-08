window.addEventListener('DOMContentLeaded', getContentPost());

let postsHTML = document.querySelector('.public-content');

function getContentPost() {
    let idLocal = localStorage.getItem('userId');
    fetch(`https://gorest.co.in/public/v2/users/${idLocal}/posts`)
    .then(respons => {
        return respons.json();
    })
    .then((data) => {
        console.log(data);
        if (data.length == 0){
            postsHTML.innerHTML += `
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">I don't have any posts yet, but I'm working on it!</h4>
                <hr>
                <p class="mb-0">У мене ще немає постів, але я над цим працюю!</p>
            </div>
            `;
        } else {
            data.forEach((element) => {
                postsHTML.innerHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.body}</p>
                    </div>
                </div>
                `;
            });
        }
        
    })
};