
const dir1 = "https://apis.datos.gob.ar/georef/api/provincias?nombre=Sgo. del Estero";
const dir2 = "http://localhost:3000/api/v1/meetings/";

const areaRespuesta = document.getElementById('areaRespuesta');


let apiRequest = new XMLHttpRequest();

let fetchOptions = {
    "method": "" 
  }

const metodoMenu = document.getElementById('metodoMenu');
let metodoHTTP = "GET";

const rutaCampo = document.getElementById('rutaCampo');
const sendButton = document.getElementById('send');
let ruta = "";

metodoMenu.addEventListener('change', ($event) => {
    metodoHTTP = $event.target.value;
    console.log("metodoHTTP: "+metodoHTTP)
  });


  sendButton.addEventListener('click', () => {
    ruta = rutaCampo.value;
    console.log("ruta: "+ruta);
    apiRequest.open(metodoHTTP, ruta);
    apiRequest.send();
    
    // fetchOptions["method"] = metodoHTTP;
    // console.log("fetchOptions[method]: "+fetchOptions["method"])
  
    // fetch(ruta, fetchOptions)
    // .then(response => response.json() )
    // .then(data => {
    //     console.log(data);
    //     document.querySelector('#datos').textContent = data
    // })

  });


  apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        const responseText = apiRequest.response;
        const response = JSON.parse(apiRequest.response);
        console.log(response);
        areaRespuesta.textContent = JSON.stringify(response, null, 4);

    }
  };

