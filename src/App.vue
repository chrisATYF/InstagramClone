<script setup>
import Nav from "./components/Nav.vue"
import { RouterView } from "vue-router"
</script>

<template>
  <main>
    <Nav></Nav>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
