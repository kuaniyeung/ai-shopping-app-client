<template>
  <Toggle label="Test" disabled> </Toggle>
</template>

<script setup lang="ts">
import { Toggle } from "./components";

const test = [
  { title: "Dish A", content: ["a1", "a2", "a3"] },
  { title: "Dish B", content: ["b1", "b2", "b3"] },
  { title: "Dish C", content: ["c1", "c2", "c3"] },
];
</script>

<style scoped></style>
