<template>
  <div>
    <!-- <div class=" border rounded-md p-4">
      <ContentNavigation v-slot="{ navigation }">
        {{ navigation }}
      </ContentNavigation>
    </div>
    <div class=" border rounded-md p-4">
      <ContentList :query="{ without: ['body'] }" v-slot="{ list }">
        {{ list }}
      </ContentList>
    </div> -->

    <AppHeader />
    <NuxtPage />
  </div>
</template>

<script setup></script>
