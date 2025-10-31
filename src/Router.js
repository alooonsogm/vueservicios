import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import EmpleadoDetails from "./components/EmpleadoDetails.vue";
import CustomersComponent from "./components/CustomersComponent.vue";
import CochesComponent from "./components/CochesComponent.vue";
import EmpleadosOficios from "./components/EmpleadosOficios.vue";

const myRoutes = [
    { path: "/", component: HomeComponent},
    { path: "/empleados", component: EmpleadoDetails},
    { path: "/customers", component: CustomersComponent},
    { path: "/coches", component: CochesComponent},
    { path: "/empleadosoficio/:oficio", component: EmpleadosOficios},
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;