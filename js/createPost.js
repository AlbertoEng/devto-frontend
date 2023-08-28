const nuevoObjeto = {
    image: '',
    title: '',
    tags: [],
    body: '',
}

let lastPost = ''

const inputs = document.querySelectorAll('.inputs-post');
const botonPublish = document.getElementById('boton-publish')


const crearFormatoFecha = () => {
    let currentDay = new Date();
    let month = currentDay.getMonth() + 1;
    let day = currentDay.getDate();
    let year = currentDay.getFullYear();
    return `${month}-${day}-${year}`
}

const crearNuevoPost = async () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (nuevoObjeto.imageUrl === '' || nuevoObjeto.title === '' || nuevoObjeto.content === '') {
        return
    }
    // nuevoObjeto.relevant = Math.floor(Math.random() + 1) ? true : false;
    // nuevoObjeto.vote = Math.floor(Math.random() * 300);
    nuevoObjeto.user = user
    let response = await fetch("http://localhost:3000/posts", {
        method: 'POST',
        body: JSON.stringify(nuevoObjeto),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    let data = await response.json();
    localStorage.setItem('lastPost', data.name );
    window.open('/', '_self');
}

botonPublish.addEventListener('click', (ev) => {
    crearNuevoPost().then(() => {
        console.log('epa')
    });
})


// #tag #tag1 #tag2     ['#tag', '#tag1','#tag2'];    ['tag', 'tag1','tag2'];
const separateTags = (text, name) => {
    let tags = text.split(' ');
    tags = tags.map((tag) => {
        return tag.slice(1,)
    })
    nuevoObjeto[name] = tags
}

inputs.forEach((el) => {
    el.addEventListener('keyup', (ev) => {
        if (ev.target.name === 'tags') {
            separateTags(ev.target.value, ev.target.name)
        } else {
            nuevoObjeto[ev.target.name] = ev.target.value;
        }
    })
})