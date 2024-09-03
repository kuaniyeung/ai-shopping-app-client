<template>
  <Checkbox label="Test" v-model="checked" />
  <span>Checked: {{ checked }}</span>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Checkbox } from "./components";

const checked = ref(false);
</script>

<style scoped></style>
