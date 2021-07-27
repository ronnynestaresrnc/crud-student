<template>
  <div class="container vh-100">
    <h2 class="m-4">Ingrese los datos:</h2>
    <form action="" v-on:submit.prevent="agregarAlumno">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="nombre"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Apellido Paterno:</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="apaterno"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Apellido Materno:</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="amaterno"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Edad:</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="edad"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Ciudad:</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="ciudad"
        />
      </div>

      <input type="submit" value="Guardar Alumno" />
    </form>
  </div>
</template>

<script setup>
const agregarAlumno = () => {
  console.log("diste a agregar");
};
</script>

<style>
</style>