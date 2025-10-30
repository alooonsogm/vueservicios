<template>
    <div>
        <h1>Empleados</h1>
        <form>
            <label>Seleccione empleado: </label>
            <select class="form-control" v-model="idEmpleado">
                <option v-for="emple in empleados" :key="emple" :value="emple.idEmpleado">{{ emple.apellido }}</option>
            </select>
            <button class="btn btn-info" @click.prevent="buscarEmpleado">Detalles</button>
        </form>
        <div v-if="elEmpleado != null">
            <h1>{{ elEmpleado.apellido }}</h1>
            <p>Oficio: {{ elEmpleado.oficio }}</p>
            <p>Salario: {{ elEmpleado.salario }}</p>
            <p>Departamento: {{ elEmpleado.departamento }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Global from '../Global';
var apiEmpleados = Global.apiEmpleados;

    export default {
        name: "EmpleadoDetails",
        data(){
            return {
                empleados: [],
                idEmpleado: 0,
                elEmpleado: null
            }
        },
        mounted(){
            var request = "api/Empleados";
            axios.get(apiEmpleados + request).then(response => {
                console.log("Leyendo empleados.")
                this.empleados = response.data
            })
        },
        methods: {
            buscarEmpleado(){
                var request = "api/Empleados/" + this.idEmpleado;
                axios.get(apiEmpleados + request).then(response => {
                    console.log("Leyendo el empleado.")
                    this.elEmpleado = response.data
                })
            }
        }
    }
</script>