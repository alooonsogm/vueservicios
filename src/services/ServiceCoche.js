import axios from 'axios';
import Global from './../Global';

export default class ServiceCoche{
    //Es mejor usar siempre una funcion que devuleva una promesa asi cuando tengas que hacer
    //una solictud a la API con algun parametro se lo pasas por la funcion yya te hace la peticion.
    getCoches(){
        return new Promise(function(resolve) {
            var coches = []
            var request = "/webresources/coches";
            var url = Global.urlCoches + request
            axios.get(url).then(response => {
                console.log("Leyendo coches.")
                coches = response.data;
                resolve(coches);
            })
        })
    }
}