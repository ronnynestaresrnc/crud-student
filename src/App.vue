<template>
  <my-header></my-header>

  <my-banner></my-banner>
  <div class="container m-5">
    <router-link to="/create" class="btn btn-info my-3"
      >Create student</router-link
    >
    <router-view></router-view>
    <div class="container-fluid">
      <div class="row">
        <div class="col-9">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">nombre</th>
                <th scope="col">Apellido Paterno</th>
                <th scope="col">Apellido Materno</th>
                <th scope="col">Edad</th>
                <th scope="col">Ciudad</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="estudiante in estudiantes" :key="estudiante.id">
                <th scope="row">{{ estudiante.idestudiante }}</th>
                <td>{{ estudiante.nombre }}</td>
                <td>{{ estudiante.apaterno }}</td>
                <td>{{ estudiante.amaterno }}</td>
                <td>{{ estudiante.edad }}</td>
                <td>{{ estudiante.ciudad }}</td>
                <button class="btn btn-warning text-dark">edit</button>
                <button class="btn btn-danger text-dark">deleted</button>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-3">dd</div>
      </div>
    </div>
  </div>
  <my-main></my-main>
</template>

    
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import MyHeader from "./components/MyHeader.vue";
import MyBanner from "./components/MyBanner.vue";
import MyMain from "./components/MyMain.vue";
import { watchEffect, ref } from "vue";
let estudiantes = ref({});
let watch = watchEffect(
  fetch("https://epetres.000webhostapp.com/").then((res) =>
    res.json().then((data) => (estudiantes.value = data))
  )
);
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
</style>
