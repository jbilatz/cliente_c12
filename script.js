
const dir1 = "https://apis.datos.gob.ar/georef/api/provincias?nombre=Sgo. del Estero";
const dir2 = "http://localhost:3000/api/v1/meetings/";


fetch(dir2)
    .then(response => response.json() )
    .then(data => {
        console.log(data);
        document.querySelector('#datos').textContent = data
    })

