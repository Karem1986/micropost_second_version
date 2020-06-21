class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fas fa-edit"></i>
            </a>

            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fas fa-times"></i>
          </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  showALert(message, className) {
     this.clearAlert();

 //Create div
 const div = document.createElement('div')
//Add classes 
div.className = className;
//Add text 
div.appendChild(document.createTextNode(message));
//Get parent to insert it into the DOM
const container = document.querySelector('.postsContainer');
//Get posts 
const posts =document.querySelector('#posts')
//Insert alert div 
container.insertBefore(div, posts)
//Set time for alert
setTimeout(() => {
  this.clearAlert();
}, 3000)

  }

  clearAlert() {

const currentAlert = document.querySelector('.alert');
if(currentAlert) {
  currentAlert.remove();
}
  }

  clearFields() {

    this.titleInput.value = '';
    this.bodyInput.value  = ''; 
  }
}

export const ui = new UI();