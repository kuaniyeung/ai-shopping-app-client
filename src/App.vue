<template>
  <Breadcrumbs label="Test" disabled>
    <BreadcrumbsTab
      v-for="item in test"
      :key="item.title"
      :title="item.title"
      :disabled="item.disabled"
      :href="item.href"
    ></BreadcrumbsTab>
  </Breadcrumbs>
</template>

<script setup lang="ts">
import { Breadcrumbs, BreadcrumbsTab } from "./components";

const test = [
  { title: "Dish A", disabled: false, href: "https://test1.com" },
  { title: "Dish B", disabled: true },
  { title: "Dish C", disabled: false, href: "https://test2.com" },
];
</script>

<style scoped></style>
