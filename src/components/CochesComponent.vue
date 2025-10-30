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
import axios from 'axios';
import Global from '../Global';
//Si necesitamos variable pra todo el component y sus metodos se declaran aqui (mounted, methods, create)
var urlCoches = Global.urlCoches;
    export default {
        name: "CochesComponent",
        data(){
            return {
                coches: []
            }
        },
        mounted(){
            var request = "/webresources/coches";
            //Las variables fuera del export mo usan this.
            axios.get(urlCoches + request).then(response => {
                console.log("Leyendo coches.")
                this.coches = response.data
            })
        }
    }
</script>