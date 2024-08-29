<template>
  <Button :class="[ButtonThemes.SECONDARY, ButtonStyles.ICON]">
    <template #iconStart>
      <span> I </span>
    </template>
  </Button>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useAuthStore } from "./stores";
import { storeToRefs } from "pinia";
import { ButtonThemes, ButtonStyles } from "./components/controls/button/enums";
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

onMounted(() => {
  authStore.getUser();
});
</script>

<style scoped></style>
