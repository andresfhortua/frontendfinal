import VueRouter from "vue-router";
import listarDocumentos from "./components/listarDocumentos";
import agregarDocumentos from "./components/agregarDocumentos";
import buscarDoc from "./components/buscarDoc";
import agregarDependencia from "./components/agregarDependencia";
import verDependencia from "./components/verDependencia";

const router = new VueRouter({
    //mode: "history",
    routes: [
        {
            name: "listar",
            path: "/listar",
            component: listarDocumentos
        },
        {
            name: "agregar_doc",
            path: "/agregar_doc",
            component: agregarDocumentos
        },
        {
            name: "agregar_dep",
            path: "/agregar_dep",
            component: agregarDependencia
        },
        {
            name: "buscar_doc",
            path: "/buscar_doc",
            component: buscarDoc
        },
        {
            name: "ver_dependencias",
            path: "/ver_dependencias",
            component: verDependencia
        }
    ]
})

export default router;