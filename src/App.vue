<template>
  <div id="app" class="fullscreen">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    margin: 0;
  }
  html,body,.fullscreen{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  a{
    text-decoration: none;
  }
</style>
