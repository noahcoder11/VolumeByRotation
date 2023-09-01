<script setup>
  import BoundaryList from "../BoundaryList"
  import Boundary from "../Boundary"
  import { ref } from "vue"

  let inputValue = ref('')
</script>

<template>
  <div id="container">
    <h1>Boundaries:</h1>
    <div class="list-item-container">
      <input id="input" v-model="inputValue">
      <select id = "axis">
        <option value="0">f(x)</option>
        <option value="1">f(y)</option>
      </select>
      <button id="add" @click="BoundaryList.addBoundary(new Boundary({ f: Object.constructor(/[a-zA-Z]/, `return ${inputValue}`) }))">+</button>
    </div>
    <div class="list-item-container" v-for="(item, index) in BoundaryList.boundaries.value">
      <div class="list-item">{{ item.f.toString().includes("function anonymous(") ? item.f.toString().slice(18) : item.f }}</div>
      <div class="flex-spacer"></div>
      <button class="list-button" @click="BoundaryList.removeBoundary(index)">X</button>
    </div>
  </div>
</template>

<style scoped>
  #container {
    display: flex;
    flex-direction: column;
  }

  .list-item-container {
    display: flex;
    flex-direction: row;
  }

  #input {
    border: solid gray 2px;
    padding: 5px;
    border-radius: 5px;
    height: 50px;
  }

  .list-item {
    border: solid gray 2px;
    padding: 5px;
    border-radius: 5px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .list-button {
    background: rgb(255, 0, 0);
    width: 50px;
    height: 50px;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    border: solid 2px rgb(150, 0, 0);
  }

  #add {
    background: rgb(0, 200, 255);
    width: 50px;
    height: 50px;
    color: white;
    font-size: 30px;
    border-radius: 5px;
    border: solid 2px rgb(0, 150, 205);
  }

  .flex-spacer {
    flex: 1;
  }
</style>
