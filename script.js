

let apiRequest = new XMLHttpRequest();

const metodoMenu = document.getElementById('metodoMenu');
let metodoHTTP = "GET";

const rutaCampo = document.getElementById('rutaCampo');
const cuerpoCampo = document.getElementById('cuerpoCampo');
const sendButton = document.getElementById('send');
const areaRespuesta = document.getElementById('areaRespuesta');

let ruta = "";
let cuerpo = "";

metodoMenu.addEventListener('change', ($event) => {
    metodoHTTP = $event.target.value;
    console.log("metodoHTTP: "+metodoHTTP)
  });

  sendButton.addEventListener('click', () => {
    ruta = rutaCampo.value;
    
    console.log("ruta: "+ruta);
    apiRequest.open(metodoHTTP, ruta);
    if(metodoHTTP === "POST" || metodoHTTP === "PATCH") {
      cuerpo = cuerpoCampo.value;
      apiRequest.setRequestHeader('Content-Type', 'application/json');
      apiRequest.send(cuerpo);
    } else {
      apiRequest.send();
    }
    
  });

  apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        const response = JSON.parse(apiRequest.response);
        const responseStr = JSON.stringify(response, undefined, 4);
        console.log(response);
        areaRespuesta.innerHTML = responseStr;

    }
  };

