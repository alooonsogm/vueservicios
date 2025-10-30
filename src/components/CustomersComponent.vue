<template>
    <div>
        <h1>Customers Api</h1>
        <form>
            <label>ID Customers: </label>
            <input type="text" v-model="idCustomers"/>
            <button @click.prevent="buscarCustomers">Buscar Customers</button>
        </form>
        <div v-if="elCustomer != null">
            <h1>{{ elCustomer.ContactName }}</h1>
            <p>{{ elCustomer.Address }}</p>
            <p>{{ elCustomer.City }}</p>
            <p>{{ elCustomer.Country }}</p>
            <p>{{ elCustomer.Phone }}</p>
        </div>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Compañia</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="custo in customers" :key="custo">
                    <td>{{ custo.CustomerID }}</td>
                    <td>{{ custo.ContactName }}</td>
                    <td>{{ custo.CompanyName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Global from '../Global';
var apiCustomer = Global.urlNorthwind;
    export default {
        name: "CustomersComponent",
        data(){
            return {
                customers: [],
                idCustomers: "",
                elCustomer: null
            }
        },
        mounted(){
            var request = "Customers";
            axios.get(apiCustomer + request).then(response => {
                console.log("Leyendo customers.")
                this.customers = response.data.value
            })
        },
        methods: {
            buscarCustomers(){
                this.elCustomer = null
                for(var customer of this.customers){
                    if(customer.CustomerID == this.idCustomers){
                        this.elCustomer = customer;
                    }
                }
            }
        }
    }
</script>