<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text" data-test="label">{{ label }}</span>
      <input
        v-model="value"
        type="checkbox"
        class="checkbox"
        @click="(e) => console.log(e)"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
const value = defineModel();

defineProps({
  label: { type: String },
});
</script>
