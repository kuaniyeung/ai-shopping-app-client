<template>
  <li>
    <a v-if="!disabled" :href="href" data-test="title-enabled-link">
      {{ title }}</a
    >
    <span v-else data-test="title-disabled-link"> {{ title }}</span>
  </li>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  disabled: { type: Boolean, default: true },
  href: { type: String },
});
</script>
