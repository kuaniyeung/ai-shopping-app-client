<template>
  <Breadcrumbs
    v-for="item in test"
    :key="item.title"
    :title="item.title"
    :href="item.href"
  >
  </Breadcrumbs>
</template>

<script setup lang="ts">
import { Breadcrumbs } from "./components";

const test = [
  { title: "Dish A", href: "https://test1.com" },
  { title: "Dish B" },
  { title: "Dish C", href: "https://test2.com" },
];
</script>
