<template>
  <div className="breadcrumbs">
    <ul>
      <li>
        <a v-if="!href" :href="href" data-test="title-with-link">
          {{ title }}</a
        >
        <span v-else data-test="title-without-link"> {{ title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  href: { type: String },
});
</script>
