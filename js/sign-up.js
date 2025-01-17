const array = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

const form = document.getElementById('myForm');
let users = [];
if(localStorage.getItem('userLogin')){
    users = JSON.parse(localStorage.getItem('userLogin'));
}

console.log(users)


form.addEventListener('input',(e)=>{
  
 
  if(e.target.name=='gender'){
    const radioErr=e.target.closest('.gender').nextElementSibling.classList.contains('error');
    if(radioErr){
      e.target.closest('.gender').nextElementSibling.remove();
    }
  }
  
  if(!e.target.parentNode.querySelector('.error')) return;
  e.target.parentNode.querySelector('.error').remove();
  
})

form.addEventListener('submit',function(event){
    event.preventDefault();
    const username =document.getElementById('username')
    const email =document.getElementById('email')
    const password =document.getElementById('password')
    const designation = document.getElementById('designation')
    const address =document.getElementById('address')
    const state =document.getElementById('state')
    const country =document.getElementById('country')
    const pincode =document.getElementById('pincode')
    let gender =document.querySelector('input[name="gender"]:checked')
    const genErr = document.querySelector('.gender');
    // console.log(gender.value)
    if(gender== null){
      console.log("ohh")
    }
    console.log(username.name)

    const arr = [username,email,password,designation,address,state,country,pincode]
   
    const user ={}

    let isAnyEmpty = false;
    arr.map((user)=>{
      if((user.value.trim()=="")&&(user!==null)){
        isAnyEmpty=true;
      user.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>${user.name} required</span></div>`)}
  
    })

    if(gender == null){
      isAnyEmpty=true;
      genErr.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>gender required</span></div>`)
    }
    const validateEmail = () => {
      return email.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };
    if(!validateEmail() && email.value!==""){
      isAnyEmpty=true;
      email.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>email is incorrect</span></div>`)
    }

    if((password.value.length < 8 && password.value!=="")){
      isAnyEmpty=true;
      password.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>password should be min length eight</span></div>`)
    }

    if((password.value.length >= 8)){
      
      let upperCaseLetters = /[A-Z]/g;
      let lowerCaseLetters = /[a-z]/g;
      let numbers = /[0-9]/g;
      let specialChar=/[$&+,:;=?@#|'<>.-^*()%!]/g;
      let check = [upperCaseLetters,lowerCaseLetters,numbers,specialChar]
      
      const valid = check.every((patt)=>password.value.match(patt))
      if(!valid){
        isAnyEmpty=true;
        password.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>password should have special-character upperCase,lowerCase and number</span></div>`)
      }
      
      
    }

    if(pincode.value.length < 6 && pincode.value !==""){
      isAnyEmpty=true;
      pincode.insertAdjacentHTML("afterend",`<div class='error'><span id='span'>Pincode should be min length six</span></div>`)
    }


    
// save into local storage
    if(!isAnyEmpty){
      user.id = users.length + 1;
      user.username = username.value;
      user.email = email.value;
      user.password = password.value;
      user.designation = designation.value;
      user.address = address.value;
      user.state = state.value;
      user.country = country.value;
      user.pincode = pincode.value;
      user.gender = gender.value;
      users.push(user);
      localStorage.setItem('userLogin', JSON.stringify(users));


      // arr.map((user)=>{
      //   user.value = ""
  
      // })
      let confir
      
      confir = confirm('Sign Up Successful. Now You can Login')
      // let popUp = document.querySelector('.pop_up');
      // popUp.classList.add('pop-show')
      if(confir){
        window.location.href="../pages/login.html" ;

      }
     
    }   
})

function closeAllLists() {
  let x = document.getElementsByClassName("autocomplete-items");
  for (let i = 0; i < x.length; i++) {
    
    x[i].parentNode.removeChild(x[i]);
  
}
}

country.addEventListener('input',function(){
  console.log(country.value)
  let val = country.value;
  let el,b;
  closeAllLists();
  if (!val) { return false;}
  el = document.createElement("div");
  el.setAttribute("class", "autocomplete-items");
  this.parentNode.appendChild(el);
  array.forEach((elem, i)=> {
    if(elem.substring(0,val.length).toUpperCase() == val.toUpperCase()){
      b = document.createElement("div");
      b.classList.add("child");
      b.innerHTML = "<strong class='strong'>" + elem.substring(0, val.length) + "</strong>";
      b.innerHTML += elem.substring(val.length);
      b.innerHTML += `<input type="hidden" value="${elem}" + >`;
      b.addEventListener("click", function(e) {
        country.value = this.getElementsByTagName("input")[0].value;
        closeAllLists();
    });
    el.appendChild(b);
  }
  })
})


