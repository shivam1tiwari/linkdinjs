
let userPosts = []
function showData(){
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        userPosts = data;
        const commentsList = document.querySelector('.activity__body');
         commentsList.innerHTML = "";       
        data.slice(0,10).forEach((data) => {
           const listItem = document.createElement('div');
            listItem.innerHTML = `
               <div class="post">
                  <div class="post__left">
                     <div class="post__profile-name">
                        <p>${data.title.substring(0,10)}<span id="title-span">  Commented on a post .${data.id}mo . ago.</span></p>
                      </div>
                      <div class="post__body">
                         <p>${data.body.substring(0,20)}...</p>
                      </div>
                  </div>
               
               <div class="post__right">
               <div class="buttons">
               <button title="comment on post" class="fa-solid fa-comment comment" id="comment" data-id= "${data.id}" ></button>
               <button title="delete post" class="fa-solid fa-trash" id="delete" data-id= "${data.id}" ></button>
               </div>
               </div>
               </div> `;

            commentsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));}
    showData();
  
    const commentsList = document.querySelector('.activity__body');

    commentsList.addEventListener('click',(e)=>{
      let id = e.target.dataset.id
     
      
      console.log(id)
      if(id){
      let isConfirm =  confirm("Do you want to delete ")
      if(!isConfirm)return;
       userPosts.forEach((post)=>{
         if(id == post.id){
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:'DELETE'})
          .then(response => console.log(response)).catch(err=>console.log(err))
          }
        })
        showData()
         }
       }) 
    

    const createPost = document.getElementById('new-post')

    createPost.addEventListener('click',(e)=>{
      const active = document.querySelector('.new-post__container');
      console.log(e.target)
      active.classList.toggle('active')
    })

    const postBox = document.querySelector('.new-post__container');

    postBox.addEventListener('click',(e)=>{
     console.log(e.target.id)
     let id = e.target.id
     if(id == "post-close__button"){
      const active = document.querySelector('.new-post__container');
      active.classList.toggle('active')
     }
     
     if(id == "new-post__submit"){
     
       const title = document.getElementById('title')
       const body = document.getElementById('new-post__input')
       console.log(title.value , body.value)
       fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
         headers: {
      'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          "userId": 1,
          "id":userPosts.length,
          "title": `${title.value}`,
          "body": `${body.value}`
        })
       }).then(res=>{
         alert("Post successfull ");
         console.log(res);
         const active = document.querySelector('.new-post__container')
         active.classList.toggle('active')

       }).catch(err=>{
        alert("Post not submitted ");
        const active = document.querySelector('.new-post__container')
        active.classList.toggle('active')
        console.log(err)})

        showData()

     }
    })
  
