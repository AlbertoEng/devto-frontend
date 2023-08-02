//max
import { createNavbar } from "./navbar.js";



let token = localStorage.getItem("token");
!token
? window.open(`../views/login.html`, "_self") : null;


document.getElementById("nav-wrapper").innerHTML = createNavbar(token);
document.getElementById("log-out").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.open("../views/login.html", "_self");
});

// max

// inicia jesus
let allPosts = []

const getAllPosts = async () => {
  // GET
  let response = await fetch("https://mi-proyecto-7bd3d-default-rtdb.firebaseio.com/posts/.json");
  let data = await response.json();

  // convertir mi objeto de posts a array
  // {  _1241242141: { .... }, _2421521515: { .... }  }
  for (let i in data) {
    let newObj = { ...data[i], key: i }  // creas un nuevo objeto modificado para agregar una key: valor
    allPosts.push(newObj)
  }

  // consultar el ultimo post y ponerlo primeras
  if(localStorage.getItem('lastPost') !== '' ){
    // buscar el objeto con el id del ultimo post y filtrar excluyendolo
    let lastPostKey = localStorage.getItem('lastPost');
    let lastPostObj = allPosts.find(( post )=> post.key === lastPostKey);
    let listModified = allPosts.filter(( post )=>{
      return post.key !== lastPostObj.key;
    })
    listModified.unshift(lastPostObj);
    allPosts = listModified;
  }


  // console.log( allPosts[ Math.floor(Math.random() * allPosts.length ) ])
  return allPosts;
}

const printAllPost = async  (listPosts) => {
  let mainSection = document.getElementById('cards-container');
  let imagePost = document.getElementsByClassName('image-post');
  let tags = document.getElementById('section-tags-in-post');

  // obteniendo un arreglo de avatars igual al numero de posts
  let imagenAvatar = await fetch(`https://randomuser.me/api/?results=${listPosts.length}`);
  let data = await imagenAvatar.json();
  
    console.log(listPosts)
  // creando las cards de los posts
  let cards = ''
  listPosts.forEach((post, i) => {

    let tagsElements = post.tags.reduce(( acum, curr)=>{
      return acum + `<div><button class="post__language">#${curr}</button></div>`
    },'');

    cards += `<a
    href="views/detailPost.html?id=${post.key}"
    class="text-decoration-none"
    >
    <div class="card" style="width: 100%; border-radius: 5px">
      <img
        class="card-img-top ${ i == 0 ?  '': 'image-post'}"
        src=${post.imageUrl}
        alt="..."
      />
      <div class="poster">
        <img
          class="rounded-5 post__photo"
          alt="algo"
          src="${data.results[i].picture.thumbnail}"
          alt=""
        />
        <div class="post__info">
          <p class="post__name">Jatin Sharma for Documatic</p>
          <br />
          <p class="post__date">Posted ${post.createdAt}</p>
        </div>
      </div>
      <h1 class="post__title">
        ${post.title}
      </h1>
      <div id='section-tags-in-post' class="post_prog_lang">
        ${tagsElements}
      </div>
      <div class="post__reactions d-flex d-row">
        <img src="sources/images/reactions.png" alt="" />
        <span class="reactions__number">${post.vote} Reactions</span>
        <span class="comments__number"
          ><img src="sources/images/comments.png" alt="" />3
          Comments</span
        >
        <span class="time__read"
          >3 min read <i class="bi bi-bookmark"></i
        ></span>
      </div>
      <div class="post__reply">
        <img
          class="rounded-5 post_photo_reply"
          alt="algo"
          src="sources/images/moi.svg"
          alt=""
        />
        <div class="reply__box">
          <p class="reply__name">Moi 1 day ago</p>
          <p class="reply__text">
            Entonces quién va a querer comprarme un piano?
          </p>
        </div>
      </div>
      <div class="post__reply">
        <img
          class="rounded-5 post_photo_reply"
          alt="algo"
          src="sources/images/oli.svg"
          alt=""
        />
        <div class="reply__box">
          <p class="reply__name">Oliver 1 day ago</p>
          <p class="reply__text">No pues está cabrón</p>
        </div>
      </div>
      <p class="reply_see_more">See all 1 comments</p>
    </div>
  </a>`

    mainSection.innerHTML = cards;

  })

}

// termina Jesus

// KAHTY
// buscar en la lista un post aleatorio e imprimirlo 
// en el dom sobre un elemento
const printRandomPost = (randomPost) => {
  let containerRandomPost = document.getElementById('random-post-container'); // contenedor

  let imgContainer = document.createElement('div');   // div
  let imgRandomPost = document.createElement('img');  // imagen 
  imgRandomPost.setAttribute('src', randomPost.imageUrl);
  imgRandomPost.style.width = '100%';
  imgContainer.append(imgRandomPost);
  let titulo = document.createElement('p');
  titulo.innerText = randomPost.title;
  containerRandomPost.append(imgContainer);
  containerRandomPost.append(titulo);

  
  containerRandomPost.addEventListener('click', ()=>{
    window.open(`views/detailPost.html?id=${randomPost.key}`, '_self');
  })

}

const getOneRandomPost = (arrayPosts) => {
  let randomPost = arrayPosts[Math.floor(Math.random() * arrayPosts.length)]
  printRandomPost(randomPost);
}
// TERMINA KATHY

// JACE
// buscar en la lista de posts los primeros 3 posts 
// que coincidan con el tag discuss, 
const print3Post = (threePostArray) => {

  let containerFirstTag = document.getElementById('list-post-by-tag');
  let listsPostByTag = ''
  threePostArray.forEach((post) => {
      listsPostByTag += `
        <a class="listing__type listing1" href="#" class="my-2 text-dark text-decoration-none">${post.title}
          <div>
            <p class="comment__vinc" href="#">${Math.floor(Math.random() * 30)} Comentarios</p>
          </div>
        </a>
        <hr class="my-2" />`
  })
 console.log(listsPostByTag)
  containerFirstTag.innerHTML = listsPostByTag
  let getListsTags = document.querySelectorAll(".listing1")
  console.log(getListsTags);
  getListsTags.forEach((tag, i)=>{
      tag.addEventListener("click",(e)=>{
        window.open( `views/detailPost.html?id=${threePostArray[i].key}` , "_self" )
      })
  })



}

///watercolor 2
const print3Post2nd = (threePostArray) => {


  let containerSecondTag = document.getElementById('listPostTag2');
  let listsPostByTag2nd = ''
  threePostArray.forEach((post) => {
      listsPostByTag2nd += `
        <a class="listing__type listing2" href="#" class="my-2 text-dark text-decoration-none">${post.title}
          <div>
            <p class="comment__vinc" href="#">${Math.floor(Math.random() * 30)} Comentarios</p>
          </div>
        </a>
        <hr class="my-2" />`
  })

  // console.log(getListsTags2nd)
  containerSecondTag.innerHTML = listsPostByTag2nd
  let getListsTags2nd = document.querySelectorAll(".listing2")
  console.log(getListsTags2nd)
  getListsTags2nd.forEach((tag, i)=>{
      tag.addEventListener("click",(e)=>{
        window.open( `views/detailPost.html?id=${threePostArray[i].key}` , "_self" )
      })
  })


}


const get3PostByTag2nd = (posts, tagName) => {
  let result2 = posts.filter((post) => {
      //cambiar tagnames
      let hasTag2 = post.tags.find((tag) => {
          return tag === tagName.trim();
      })
      return hasTag2;
  })
  if (result2.length > 3) {
      result2 = result2.slice(0, 3);
      print3Post2nd(result2);
  } else {
     
      print3Post2nd(result2);
  }


}



// del arreglo de posts, agarramos los primeros 3 que 
// tengan el tag, si son menos de 3 me traigo esos.
const get3PostByTag = (posts, tagName) => {
  let result = posts.filter((post) => {
      //cambiar tagnames
      let hasTag = post.tags.find((tag) => {
          return tag === tagName.trim();
      })
      return hasTag;
  })
  if (result.length > 3) {


      result = result.slice(0, 3);
      print3Post(result);
  } else {
     
      print3Post(result);
  }
  

}
// termina jace


// filter by word
let inputSearch = document.getElementById('input-search');
inputSearch.addEventListener('keyup', ( e )=>{
  let nuevaLista = allPosts.filter(( post )=>{
    return post.title.includes(e.target.value);
  })
  printAllPost(nuevaLista)
})

// filter by relevant, lates, top

let itemRelevant= document.getElementById('item-relevant');
let itemLatest = document.getElementById('item-latest');
let itemTop = document.getElementById('item-top');

itemRelevant.addEventListener('click', ( e )=>{
  let relevants = allPosts.filter(( post )=>{
    return post.relevant === true;
  })
  printAllPost(relevants);
})

itemLatest.addEventListener('click', ( e )=>{
  let latest = allPosts.sort(( a , b )=>{
    let dateA = new Date(b.createdAt)
    let dateB = new Date(a.createdAt)
    return dateB - dateA;
  })
  printAllPost(latest)
})

itemTop.addEventListener('click', ( e )=>{
  let listTop = allPosts.sort(( a , b )=>{
    return b.vote - a.vote;
  })
  printAllPost(listTop)
})




// inicia Jesus 
getAllPosts().then((posts) => {
  getOneRandomPost(posts)
  printAllPost(posts)

  let tagName = document.getElementById('tag-for-search');
  get3PostByTag(posts, tagName.innerText.split('#')[1]);

  let tagName2nd = document.getElementById('the2ndTag');
  get3PostByTag2nd(posts, tagName2nd.innerText.split('#')[1])

});
// termina jesus