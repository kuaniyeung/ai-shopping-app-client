<template>
  <div className="flex flex-col">
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text" data-test="label">{{ label }}</span>
        <input
          type="checkbox"
          v-model="value"
          class="toggle"
          :disabled="disabled"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = defineModel({ type: Boolean });

defineProps({
  label: { type: String },
  disabled: { type: Boolean },
});
</script>
