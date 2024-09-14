<template>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="checkbox" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium" data-test="title">
      {{ title }}
    </div>
    <div className="collapse-content">
      <slot name="default" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String },
});
</script>
