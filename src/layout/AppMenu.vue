<script setup>
import { ref } from "vue";

import AppMenuItem from "./AppMenuItem.vue";

const model = ref([
  {
    label: "Dashboard",
    items: [
      { label: "Dashboard 1", icon: "pi pi-fw pi-home", to: "/" },
      { label: "Dashboard 2", icon: "pi pi-fw pi-home", to: "/" },
    ],
  },
  {
    label: "Schools",
    items: [{ label: "Browse ", icon: "pi pi-fw pi-id-card", to: "/schools" }],
  },
  {
    label: "Logout",
    items: [{ label: "logout", icon: "pi pi-sign-out" }],
  },
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item
        v-if="!item.separator"
        :item="item"
        :index="i"
      ></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
