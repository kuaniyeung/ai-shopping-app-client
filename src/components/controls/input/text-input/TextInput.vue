<template>
  <input
    v-model="value"
    type="text"
    :placeholder="placeholder"
    class="input input-bordered"
  />
</template>

<script setup lang="ts">
const value = defineModel();

defineProps({
  placeholder: {
    type: String,
  },
});
</script>
