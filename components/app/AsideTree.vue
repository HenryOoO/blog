<script lang="ts" setup>
type AsideItemProps = {
  title: string;
  icon?: string;
  children?: AsideItemProps[];
  _path?: string;
  collapsed?: boolean;
};

const router = useRouter();
const props = defineProps<{
  links: AsideItemProps[];
  level: number;
}>();

const hasChildren = (c: any) => Array.isArray(c) && c.length > 0;

function onSubmenuClick(item: AsideItemProps) {
  if (hasChildren(item.children)) {
    item.collapsed = !item.collapsed;
  } else {
    router.push(item._path!);
  }
}
</script>

<template>
  <ul class="select-none text-sm">
    <li v-for="item in props.links">
      <div
        class="py-1 pr-2 hover:bg-slate-200 cursor-pointer"
        :style="[`padding-left: ${16 * level}px`]"
        @click="onSubmenuClick(item)"
      >
        <div v-if="hasChildren(item.children)" class="flex items-center justify-between w-full">
          <Icon
            name="ic:outline-keyboard-arrow-right"
            size="18"
            class="transition-all"
            :class="{ 'rotate-90': !item.collapsed }"
          />
          <span class="flex-1 pl-1">{{ item.title }}</span>
          <Icon v-if="item.icon" :name="item.icon" />
        </div>

        <span v-else>{{ item.title }}</span>
      </div>

      <Transition mode="default">
        <template v-if="hasChildren(item.children)">
          <AppAsideTree v-show="!item.collapsed" :links="item.children!" :level="level + 1" />
        </template>
      </Transition>
    </li>
  </ul>
</template>

<style scoped></style>
