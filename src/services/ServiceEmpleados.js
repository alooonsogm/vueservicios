import axios from 'axios';
import Global from './../Global';

export default class ServiceEmpleados {
    getEmpleados(){
        return new Promise(function(resolve) {
            var request = "api/Empleados";
            axios.get(Global.apiEmpleados + request).then(response => {
                console.log("Leyendo empleados.")
                resolve(response.data);
            })
        })
    }

    buscarEmpleado(idEmpleado){
        return new Promise(function(resolve) {
            var request = "api/Empleados/" + idEmpleado;
            axios.get(Global.apiEmpleados + request).then(response => {
                console.log("Leyendo el empleado.")
                resolve(response.data);
            })
        })
    }

    getOficios(){
        return new Promise(function(resolve) {
            var request = "api/Empleados/oficios";
            axios.get(Global.apiEmpleados + request).then(response => {
                console.log("Leyendo oficios.")
                resolve(response.data);
            })
        })
    }

    getEmpleadoOficio(oficio){
        return new Promise(function(resolve) {
            var request = "api/Empleados/EmpleadosOficio/" + oficio;
            axios.get(Global.apiEmpleados + request).then(response => {
                console.log("Leyendo el empleados por oficio.")
                resolve(response.data);
            })
        })
    }
}