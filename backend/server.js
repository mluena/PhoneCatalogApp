const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

app.get('/api/phones', (request, response) => {
    console.log('Recibida peticion');
    response.json([
      {
        phoneId: 1,
        id: 1,
        description: "Tamaño de Pantalla:14,47 cm - 5,7'' Resolución cámara trasera:12 Mpx Resolución cámara delantera:5 Mpx Procesador (núcleos):8 Núcleos Almacenamiento (ROM):32 Gb Memoria RAM:3 Gb Sistema Operativo:ANDROID Capacidad batería:3150 mAh",
        title: "iPhone 8 APPLE 256 GB Rojo",
        url: "https://www.worten.es/i/c6eb082f399b6d566ee6dba472089c5427f8491a.jpg",
        price: "859€"
      },
      {
        phoneId: 2,
        id: 2,
        description: "Tamaño de Pantalla:14,47 cm - 5,7'' Resolución cámara trasera:12 Mpx Resolución cámara delantera:5 Mpx Procesador (núcleos):8 Núcleos Almacenamiento (ROM):32 Gb Memoria RAM:3 Gb Sistema Operativo:ANDROID Capacidad batería:3150 mAh",
        title: "iPhone X APPLE 256 GB Plata",
        url: "https://www.worten.es/i/874d4551cfb27c6babccac37194cddafd7c13af7.jpg",
        price: "999€"
      },
      {
        phoneId: 3,
        id: 3,
        description: "Tamaño de Pantalla:14,47 cm - 5,7'' Resolución cámara trasera:12 Mpx Resolución cámara delantera:5 Mpx Procesador (núcleos):8 Núcleos Almacenamiento (ROM):32 Gb Memoria RAM:3 Gb Sistema Operativo:ANDROID Capacidad batería:3150 mAh",
        title: "a aut ipsum fuga atque eos",
        url: "https://img.pccomponentes.com/articles/13/133355/e1.jpg",
        price: "699€"
      },
      {
        phoneId: 4,
        id: 4,
        description: "Tamaño de Pantalla:14,47 cm - 5,7'' Resolución cámara trasera:12 Mpx Resolución cámara delantera:5 Mpx Procesador (núcleos):8 Núcleos Almacenamiento (ROM):32 Gb Memoria RAM:3 Gb Sistema Operativo:ANDROID Capacidad batería:3150 mAh",
        title: "SAMSUNG GALAXY S9 G960 DS 64GB VIOLETA",
        url: "https://playtekdepot.com/img/p/2/5/1/251-large_default.jpg",
        price: "582€"
      },
      {
        photoId: 5,
        id: 5,
        description: "Tamaño de Pantalla:14,47 cm - 5,7'' Resolución cámara trasera:12 Mpx Resolución cámara delantera:5 Mpx Procesador (núcleos):8 Núcleos Almacenamiento (ROM):32 Gb Memoria RAM:3 Gb Sistema Operativo:ANDROID Capacidad batería:3150 mAh",
        title: "Móvil Xiaomi Redmi 5 32GB - NegroMOVIL ",
        url: "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/862518_00_1.jpg",
        price: "307€"
      },
      {
        phoneId: 6,
        id: 6,
        description: "Tamaño de Pantalla:14,47 cm - 5,7'' Resolución cámara trasera:12 Mpx Resolución cámara delantera:5 Mpx Procesador (núcleos):8 Núcleos Almacenamiento (ROM):32 Gb Memoria RAM:3 Gb Sistema Operativo:ANDROID Capacidad batería:3150 mAh",
        title: "SAMSUNG GALAXY S9 G960 DS 64GB VIOLETA",
        url: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/06/08/goods-img/1528449705639448901.jpg",
        price: "792€"
      }
    ]);
  });


// START APP
app.listen(5000, () => console.log('Example app listening on port 5000!'))