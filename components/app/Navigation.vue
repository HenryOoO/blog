<script lang="ts" setup>
// const { navigation } = useContent();



</script>

<template>
  <ContentNavigation v-slot="{ navigation }">
    <ul class="flex  text-sm   rounded-md overflow-hidden">
      <li :to="item._path" v-for="item in navigation"
        class="  px-4 py-2  cursor-pointer transition-colors hover:bg-slate-200/50 ">
        <NuxtLink :to="item._path">

        </NuxtLink>
      </li>
    </ul>

  </ContentNavigation>
</template>

<style lang="scss" scoped></style>
