<template>
  <button :class="['btn', ButtonThemes.PRIMARY]">
    <span v-if="loading" data-test="loader" class="loading loading-spinner" />
    <slot v-if="!loading" name="iconStart" />

    <span v-if="label" data-test="label">{{ label }}</span>
    <slot v-if="!loading" name="iconEnd" />
  </button>
</template>

<script setup lang="ts">
import { ButtonThemes } from "./enums";
defineProps({
  label: {
    type: String,
  },
  loading: {
    type: Boolean,
  },
});
</script>
