<script lang="ts" setup></script>

<template>
  <header class="h-16 w-screen sticky top-0 left-0 bg-white z-[9999]">
    <div class="w-full h-full max-w-center mx-auto flex justify-between items-center">
      <div><slot name="logo" /></div>
      <div><slot name="menu" /></div>
      <div><slot name="actions" /></div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
