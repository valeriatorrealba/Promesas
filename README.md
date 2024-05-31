# Desafío opcional - Promesas

Se requiere desarrollar un programa con JavaScript, que al ser ejecutado en la consola del
navegador web, muestre los primeros 20 títulos de álbumes ofrecidos por una URL en la nube,
esto se puede lograr mediante el “id” que tiene cada objeto, que entrega la URL.
Igualmente, después de pasar 3 segundos, se debe mostrar un mensaje en la consola del
navegador web indicando que la información fue enviada.

El procedimiento de manera general para lograr lo solicitado será:

    - Crear una función asíncrona que contenga la URL en una variable.
    - Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente con el método fetch, utilizando a la vez await para que retorne directamente el valor de la promesa.
    - Utilizando métodos para iterar arreglos, como por ejemplo el forEach, solamente mostrar los primeros 20 títulos de álbumes de acuerdo al número de id indicados por la URL.
    - Se debe crear otra función que retorne una promesa, la cual debe tardar tres (3) segundos en resolver la promesa para retornar el mensaje: “Información Enviada”. Esta promesa debe ser recibida por una función asíncrona, que mediante el uso del await reciba directamente el valor y lo muestra por la consola del navegador web.