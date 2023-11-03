<script lang="ts" setup>
const { navigation } = useContent();
</script>

<template>
  <div class="w-52 h-full border rounded-md">
    <AppAsideTree :links="navigation" :level="1" />
  </div>
</template>

<style lang="scss" scoped></style>
