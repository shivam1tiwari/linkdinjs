const filter = document.querySelector(".header__filter-button");
const sortDir = document.querySelector(".sort-button");
const pagination = document.querySelector(".pagination");
const cards = document.querySelector(".cards");
const search = document.getElementById("search");
const cardRemove = document.querySelectorAll(".card-remove");
let itemsPerPage = 2;
let startPage = 1;
// ------------------------------------------------------------------
// let userArr=
// [{id:1,username: 'dahdwhdw', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:2,username: 'ravindra', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:3,username: 'rahul', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:4,username: 'amit', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:5,username: 'ravindra', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:6,username: 'dahdwhdw', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:7,username: 'ravindra', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:8,username: 'rahul', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:9,username: 'amit', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:10,username: 'ravindra', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:11,username: 'ravindra', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'},{id:12,username: 'ravindra', email: 'cbhdbs@gmail.com', password: '123!@#Aac', designation: 'jejfeiwjfjfopi', address: 'fjjfjfjeojfo', state:'Lucknow',country:'india',pincode:'223108',gender:'male'}


// ]

// -------------------------------------------------------------------
function sortPage(){
  const arrowColor = document.querySelectorAll(".direction");
  arrowColor.forEach((arrow, i) => {
    let y = arrow.classList.toggle("arrow-color");
    console.log(y);

    if (y && i == 1) {
      html = "";
      showCar.sort((a, b) => b.username.localeCompare(a.username));
      // genrateCard(showCar);
      paginate(showCar,startPage,itemsPerPage)
    }
    if (y && i == 0) {
      html = "";
      showCar.sort((a, b) => a.username.localeCompare(b.username));
      // genrateCard(showCar);
      paginate(showCar,startPage,itemsPerPage)
    }
  });
}

function paginate(data, currentPage, itemsPerPage) {
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  currentPage = Math.max(1, Math.min(currentPage, totalPages));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  genrateCard(pageData);

}


const userArr = JSON.parse(localStorage.getItem('userLogin'))

let showCar = userArr.slice();

let html = "";
console.log(showCar);
function genrateCard(arr) {
  html = ""
  arr.slice().map((user) => {
    let card = `<div class="card">
              <div class="card-box">
                <div class="card__banner">
                    <div class="card-remove"data-id="${user.id}">
                     &#10539;
                 </div>
                    <div class="card__banner-bg-img">
                    <img class ="bg-img" src="" alt="">
                  </div>
                  <div class="card__banner-logo">
                    <img id ="logo-img" src="../asset/WhatsApp Image 2024-10-08 at 2.11.41 PM.jpeg" alt="">
                  </div>
                </div>
                <div class="card__content-box">
                  <div class="card__content">
                    <div class="card__name"  >
                      <h3>${user.username}</h3>
                    </div>
                     <div class="card__designation card__content-style">
                      <p>${user.designation}</p>
                    </div>
                    <div class="card__address card__content-style">
                      <p>${user.address},</p>
                    </div>
                     <div class="card__country card__content-style">
                      <p>${user.country}</p>
                    </div>
                </div>
                <div class="card__button">
                  <button class="conn-button"id="conn-button">+ Connect</button>
                </div>
                </div>
              </div>
            </div>`;
    html += card;
  });

  cards.innerHTML = html;
  const imageElement = document.querySelectorAll(".bg-img");

  imageElement.forEach((element) => {
    const imageUrl = element.src;
    const dummyImageUrl = "../asset/1702793582836.jpeg";

    // Try to load the image
    element.src = imageUrl;

    element.onerror = function () {
      element.src = dummyImageUrl;
    };
  });
}
showCar.sort((a, b) => a.username.localeCompare(b.username));
// genrateCard(showCar);
paginate(showCar,startPage,itemsPerPage)






filter.addEventListener("click", (e) => {
  console.log(e);
  const popup = document.querySelector(".header__filter-popup");
  popup.classList.toggle("popup-active");
  const arrowColor = document.querySelector(".direction");
  arrowColor.classList.add('arrow-color')
  
  // sortPage()
});

sortDir.addEventListener("click", () => {

  sortPage();
  // const arrowColor = document.querySelectorAll(".direction");
  // arrowColor.forEach((arrow, i) => {
  //   let y = arrow.classList.toggle("arrow-color");
  //   console.log(y);

  //   if (y && i == 1) {
  //     html = "";
  //     showCar.sort((a, b) => b.username.localeCompare(a.username));
  //     // genrateCard(showCar);
  //     paginate(showCar,startPage,itemsPerPage)
  //   }
  //   if (y && i == 0) {
  //     html = "";
  //     showCar.sort((a, b) => a.username.localeCompare(b.username));
  //     // genrateCard(showCar);
  //     paginate(showCar,startPage,itemsPerPage)
  //   }
  // });
});

// Pagination
// let  l = showCar.slice()
pagination.addEventListener("click", (ev) => {
  console.log(ev.target.name);
  if(ev.target.name =='next' ){
     html = ""
     const totalItems = showCar.length;
     const totalPages = Math.ceil(totalItems / itemsPerPage);
     if(totalPages > startPage){
      startPage++;
     }
    showCar.sort((a, b) => a.username.localeCompare(b.username));
    paginate(showCar,startPage,itemsPerPage)
    const popup = document.querySelector(".header__filter-popup");
    popup.classList.add("popup-active");
    

}
if (ev.target.name =='pre') {
  html = ""
  if(startPage > 1){
    startPage--;
   }
   showCar.sort((a, b) => a.username.localeCompare(b.username));
   paginate(showCar,startPage,itemsPerPage)
   const popup = document.querySelector(".header__filter-popup");
   popup.classList.add("popup-active");
   
}
 
});

// Search Functionality

search.addEventListener("input", (e) => {
  console.log(e.target.value);
  let val = e.target.value;

  let newArr = [];
  userArr.map((user) => {
    let a = user.username.substring(0, val.length).toUpperCase();
    if (val.toUpperCase() == a) {
      newArr.push(user);
    }
  });
  showCar = newArr.slice(0,10);
  showCar.sort((a, b) => a.username.localeCompare(b.username));
  html = "";
 
  genrateCard(showCar);
  console.log(newArr);
  if(showCar.length == 0){
    html =`<div class="not-found" >Oops! No data Found</div>`
    cards.innerHTML = html;
  
  }
});

// Remove functionality

cards.addEventListener("click", (e) => {

  console.log(e.target.value)
  if(e.target.dataset.id){ 
    showCar.forEach((user)=>{
      if(user.id==e.target.dataset.id){
        showCar.splice(showCar.indexOf(user), 1);
      }
    })
   
  
  // genrateCard(showCar);
  console.log("blank")
  console.log(showCar)
  paginate(showCar,startPage,itemsPerPage)
}
});


const connectBut = document.querySelectorAll('.conn-button')

connectBut.forEach((connect)=>{
  connect.addEventListener('click',(e)=>{
  
    window.location.href = "../pages/profile-details.html"
  })
})
