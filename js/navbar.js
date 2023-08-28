const createNavbar = (isLogged) => {
  let navHtml = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
  <nav  class="navbar p-0 px-3 bg-white nav__container ">
  <div class="d-flex w-auto justify-content-center">
  <button class="navbar-toggler border-0 d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <span class="navbar-toggler-icon"></span>
  </button>
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" height="40">
  <!-- BÚSQUEDA -->
  
  
  <div class="d-none d-md-block nav_form_container mx-2">
  <form class="d-flex form__search" role="search">
  <div class="input-group justify-self-start">
  <input
  style='width:400px'
  id='input-search'
  type="text"
  class="form-control border-end-0"
  placeholder="Search..."
  aria-label="Buscar"
  aria-describedby="basic-addon1"
  />
  <button class="border-0 bg-white p-0 search__button">
  <span
  class="bg-white border-1 border-start-0 rounded-0 rounded-end input-group-text search__hover"
  id="basic-addon1"
  >
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  role="img"
  aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6"
  class="crayons-icon"
  >
  <title id="agtkixkainaiofuhj4o3hunp3uvwl1y6">
  Search
  </title>
  <path
  d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
  ></path>
  </svg>
  </span>
  </button>
  </div>
  </form>
  
  </div>
  
  
  <!-- TERMINA BÚSQUEDA -->
  </div>
  
  
  
  
  ${isLogged
  ? `<div class="d-flex">
  <a href="../views/createPost.html">
  <button class="btn btn-outline-success d-none d-md-block createPostButton">
    Create Post
  </button>
</a>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  role="img"
  aria-labelledby="agtkixkainaiofuhj4o3hunp3uvwl1y6"
  class="crayons-icon d-md-none my-auto"
  >
  <title id="agtkixkainaiofuhj4o3hunp3uvwl1y6">Search</title>
  <path
  d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
  ></path>
  </svg>
  <a href="#" class="navbar-nav mx-3 my-auto">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  role="img"
  aria-labelledby="a4gcjtvbhvh6eh4ee8qmpi1l37goznso"
  class="crayons-icon"
  >
  <title id="a4gcjtvbhvh6eh4ee8qmpi1l37goznso">
  Notifications
  </title>
  <path
  d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"
  ></path>
  </svg>
  </a>
  <div class="dropdown">
  <div class="dropdown">
  <button class="btn mt-1 dropdown-toggle-no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img
  src="https://th.bing.com/th/id/R.b1c131b8da9278bff3be80106c7d2058?rik=PicaGM7Cf6NyMA&pid=ImgRaw&r=0"
  alt=""
  id="avatar_img"
  class="navbar-nav rounded-circle me-1"
  height="40"
  />
  </button>
  <ul class="dropdown-menu dropdown-menu-end wider">
    <li><button class="dropdown-item" type="button">Emi sigue aquí <br><small>@emisigueaqui</small></br></button></li>
    <li><hr class="dropdown-divider"></li>
    <li><button class="dropdown-item" type="button">Dashboard</button></li>
    <li><a href="./views/createPost.html" class="dropdown-item">Create Post</a></li>
    <li><button class="dropdown-item" type="button">Reading List</button></li>
    <li><button class="dropdown-item " type="button">Settings</button></li>
    <li><hr class="dropdown-divider"></li>
    <li><button id="log-out" class="dropdown-item" type="button">Sign Out</button></li>
   </ul>
  </div>
  
  
  </div>
  `
  : `
  <div>
  <button class="btn">Log In</button>
  <button class="btn btn-outline-primary">Create Account</button>
  </div>
  <div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  `
  
  
  }
  <div class="offcanvas offcanvas-start w-50" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
  <h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">Dev Community</h5>
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div>
  <div class="container ">
  <ul class="list-unstyled">
  <li class="m-2"> 🏠 Home</li>
  <li class="m-2">&#128451; Reading List</li>
  <li class="m-2"> &#128220; Listings</li>
  <li class="m-2">🎙 Podcasts </li>
  <li class="m-2">🎥 Videos </li>
  <li class="m-2">🏷️ Tags </li>
  <li class="m-2">💡 FAQ </li>
  <li class="m-2">🛍 Forem Shop</li>
  <li class="m-2">💝 Sponsors</li>
  <li class="m-2">🧮 About</li>
  <li class="m-2">📯 Contact</li>
  <li class="m-2">📖 Guides</li>
  <li class="m-2">🤔 Software comparisons</li>
  <h6 class="m-3 fw-bold">Other</h6>
  <li class="m-2">👍 Code of Conduct</li>
  <li class="m-2">🤓 Privacy Policy</li>
  <li class="m-2">👀 Terms of use</li>
  </ul>
  <div class="social-networks d-flex justify-content-between mt-5">
  <i class="bi bi-twitter"></i>
  <i class="bi bi-facebook"></i>
  <i class="bi bi-github"></i>
  <i class="bi bi-instagram"></i>
  <i class="bi bi-twitch"></i>
  <i class="bi bi-mastodon"></i>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </nav>
  `;
  return navHtml;
  };
  
  
  export { createNavbar };