

const form =document.getElementById("form");

form.addEventListener('input',(e)=>{
  console.log(e.target.value)
  if(!e.target.parentNode.querySelector('.error')) return;
  e.target.parentNode.querySelector('.error').remove();
  
})

/*----------------------Validate user After Login-----------*/

form.addEventListener('submit',function(e){
  e.preventDefault()
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  localStorage.getItem('userLogin')
  const userProfile = JSON.parse(localStorage.getItem('userLogin'))
  console.log((userProfile))
  


  if(username.value ==""){
    username.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>Username required</span></div>`)
  }
  if(password.value ==""){
    password.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>Password required</span></div>`)
  }
  let validUser = userProfile.reduce((validUser, user)=>{
    if((user.username==username.value)){
      validUser.username = username.value
    }
    if((user.password == password.value)){
      validUser.password = password.value
    }
    return validUser;
  },{})
  
  if((username.value !==validUser.username) && (username.value !=="")){
    username.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>Username invlid</span></div>`)
  }

  if((password.value !==validUser.password) &&(password.value !=="")){
    password.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>Password invlid</span></div>`)
  }


  if(username.value ==validUser.username && password.value ==validUser.password){
    // const welcome = document.querySelector(".form-box");
    // welcome.innerHTML = `WELCOME ${validUser.username}`
    window.location.href = "../pages/dashboard.html"
  }

})

