const header = `<div class="dashboard__header">
<div class="dashboard__header-container">
  <div class="dashboard__header-left">
    <div class="header__logo">
      <img src="../asset/linkdin.png" alt="logo">
    </div>
    <div class="header__searchbox">
      <div class="header__searchbox-search-icon">
        <span><i class="fa fa-search" aria-hidden="true"></i></span>
      </div>
      <div class="header__searchbox-input">
        <input id="search" type="search"  placeholder="Search" autocomplete="off" >
      </div>
    </div>
  </div>
  <div class="dashboard__header-right">
    <div class="header__filter">
      <div class="header__filter-button">
        <span><i class="fa fa-bars filter-ham" aria-hidden="true"></i></span>
      </div>
      <div class="header__filter-popup popup-active">
        <div class="filter__sort">
          <div class="sort-arrow">
           <div class="sort__asc direction arrow-color"><span aria-hidden="true">&#8593;</span>
          </div>
          <div class="sort__desc direction"><span aria-hidden="true">&#8595;</span>
          </div>
        </div>
        <div class="sort-button">
          <button>Sort</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`

function createHeader(){
  const headPart = document.getElementById('header')
  const head = document.createElement('div')
  head.innerHTML = header;
  headPart.appendChild(head)
}