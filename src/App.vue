<template>
  <Button label="Hey darling" />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useAuthStore } from "./stores";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

onMounted(() => {
  authStore.getUser();
});
</script>

<style scoped></style>
