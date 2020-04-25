<template>
  <div id="App">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import { TheHeader } from '@/components/organisms'
export default {
  name: 'App',
  components: { TheHeader }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>

<style lang="scss">
#App {
  // height: 30px;
}
</style>
