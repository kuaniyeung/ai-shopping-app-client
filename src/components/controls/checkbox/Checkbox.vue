<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text" data-test="label">{{ label }}</span>
      <input
        v-model="value"
        type="checkbox"
        class="checkbox"
        :disabled="disabled"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
const value = defineModel({ type: Boolean });

defineProps({
  label: { type: String },
  disabled: { type: Boolean },
});
</script>
