<script lang="ts" setup>
const { navigation } = useContent();

function filterMenuDir(arr: any[]) {
  /* 隐藏菜单则_dir.yml设置 navigation.menu: true */
  return arr.filter((i) => i.menu !== false).map((i) => ({ title: i.title, path: i._path, icon: i.icon }));
}

const res = filterMenuDir(navigation.value);
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
