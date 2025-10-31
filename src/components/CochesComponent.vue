<template>
    <div>
        <h1>Api Coches</h1>
        <div v-for="car in coches" :key="car">
            <h2 style="color: red;">{{ car.marca }}  {{ car.modelo }}</h2>
            <p>Driver: {{ car.conductor }}</p>
            <img :src="car.imagen" style="width: 150px; height: 150px;" alt="foto"/>
        </div>
    </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoche'
const service = new ServiceCoches();
    export default {
        name: "CochesComponent",
        data(){
            return {
                coches: []
            }
        },
        mounted(){
            //Una promesa no es un metodo, es un objeto
            service.getCoches().then(result => {
                this.coches = result;
            })
        }
    }
</script>