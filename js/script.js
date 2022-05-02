/* 

- Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
- Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/

const page = new Vue({

  el: "#page",

  data: {
    messaggio: "Hello World!",
    immagine: "img/outrun-vaporwave-hd-wallpaper-preview.jpg"
  }
})