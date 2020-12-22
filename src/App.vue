<template>
  <div>
    <h1>Sistema de gestión de archivos</h1>
    <nav>
      <button v-on:click="verDocumentos">Ver documentos</button>
      <button v-on:click="agDocs">Agregar documentos</button>
      <button v-on:click="verDependencia">Ver dependencia</button>
      <button v-on:click="agDep">Agregar dependencia</button>
      <button v-on:click="buscarDoc">Buscar documentos por dependencia</button>
      <router-view></router-view>
    </nav>
    
  </div>
</template>

<script>
import listarDocumentos from "./components/listarDocumentos";
import agregarDocumentos from "./components/agregarDocumentos";
import agregarDependencia from "./components/agregarDependencia";
import buscarDoc from "./components/buscarDoc";
import verDependencia from "./components/verDependencia"
export default {
  name: "App",
  components: {listarDocumentos, agregarDocumentos, agregarDependencia, buscarDoc},
  methods: {
    verDocumentos: function () {
        this.$router.push({ name: "listar" });
    },
    agDocs: function(){
        this.$router.push({ name: "agregar_doc" });
    },
    agDep: function(){
        this.$router.push({ name: "agregar_dep" });
    },
    buscarDoc: function(){
        this.$router.push({ name: "buscar_doc" });
    },
    verDependencia: function(){
        this.$router.push({ name: "ver_dependencias" });
    }
  },  
}
</script>
  
<style></style>
