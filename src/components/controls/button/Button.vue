<template>
  <button className="btn btn-secondary">{{ label }}</button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>
