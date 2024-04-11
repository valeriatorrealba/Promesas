const obtenerDatos = async() => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        // console.log(datos);
        datos.forEach( element => {
            if(element.id < 21) {
                console.log(element.title);
            }
        })
    } catch (error) {
        console.log(error);
    }
}; 
obtenerDatos()

const mensajeInterno = () => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("Información Enviada.")}, 3000);
    }) 
};

const mostrarMensaje = async () => {
    const respuesta = await mensajeInterno();
    console.log(respuesta);
};

mostrarMensaje();

