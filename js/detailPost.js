// http://127.0.0.1:5501/views/detailPost.html?id=-12342141-2312412


// Obtener el id del post para su detalle
// Obtener la URL actual
const urlString = window.location.href;
// Crear un objeto URL a partir de la URL
const url = new URL(urlString);
// Obtener los parámetros de la URL
const params = new URLSearchParams(url.search);
// Obtener el valor del parámetro "nombre"
const id = params.get("id");


const updatePost = ( post )=>{
    let imagen = document.getElementById('imageNewPost');
    imagen.setAttribute('src', post.image);

    let titulo = document.getElementById('titulo-post');
    titulo.innerText = post.title;

    let content = document.getElementById('content-post');
    content.innerText = post.body;

}


// en la pagina de detalle le damos un listener al boton para crear un post nuevo
let botonNuevoPost = document.getElementById('createPostButton');
botonNuevoPost.addEventListener('click',()=>{
    console.log('ok')
    window.open(`../views/createPost.html`, '_self');
})



// traerme los datos del post con el id anterior
const getPostById = async ()=>{
    const token = localStorage.getItem('token');
    let response = await fetch(`http://localhost:3000/posts/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    let data = await response.json();
    updatePost(data.data.post)
}

getPostById();
// Mostrar los valores obtenidos
console.log("id:", id);