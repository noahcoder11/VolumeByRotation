<script setup>
  import BoundaryList from "./components/BoundaryList.vue"
  import RenderBounds from "./components/RenderBounds.vue"
</script>

<template>
  <div id="content">
    <RenderBounds></RenderBounds>
    <BoundaryList></BoundaryList>
  </div>
</template>

<style scoped>
  #content {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  RenderBounds {
    margin: 50px;
  }

  BoundaryList {
    margin: 50px;
  }
</style>
