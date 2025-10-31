<template>
    <div>
        <h1>Empleados oficio</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID empleado</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleadosOficio" :key="empleado">
                    <td>{{ empleado.idEmpleado }}</td>
                    <td>{{ empleado.apellido }}</td>
                    <td>{{ empleado.oficio }}</td>
                    <td>{{ empleado.salario }}</td>
                    <td>{{ empleado.departamento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceEmpleados from './../services/ServiceEmpleados'
const service = new ServiceEmpleados();

    export default {
        name: "EmpleadosOficios",
        data(){
            return {
                empleadosOficio: []
            }
        },
        mounted(){
            this.loadempleados()
        },
        watch: {
            '$route.params.oficio'(nextVal, oldVal) {
            if (nextVal != oldVal) {
                this.loadempleados()
            }
        }
        },
        methods: {
            loadempleados(){
                service.getEmpleadoOficio(this.$route.params.oficio).then(result => {
                    this.empleadosOficio = result;
                })
            }
        }
    }
</script>