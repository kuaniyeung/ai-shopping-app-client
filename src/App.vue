<template>
  <Toggle label="Test" v-model="checked" disabled />
  <span>Checked: {{ checked }}</span>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Toggle } from "./components";

const checked = ref(false);
</script>

<style scoped></style>
