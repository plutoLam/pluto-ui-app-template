<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img
        src="./assets/smarty.svg"
        style="filter: invert(100%)"
        class="logo"
        alt="Vue logo"
      />
    </a>
  </div>
  <HelloWorld msg="PlutoUI + Vite + Vue" />
  <div style="margin-bottom: 20px">
    <LButton color="blue">主要按钮</LButton>
    <LButton color="green">绿色按钮</LButton>
    <LButton color="gray">灰色按钮</LButton>
    <LButton color="yellow">黄色按钮</LButton>
    <LButton color="red">红色按钮</LButton>
  </div>
  <div style="margin-bottom: 20px">
    <LButton color="blue" plain>朴素按钮</LButton>
    <LButton color="green" plain>绿色按钮</LButton>
    <LButton color="gray" plain>灰色按钮</LButton>
    <LButton color="yellow" plain>黄色按钮</LButton>
    <LButton color="red" plain>红色按钮</LButton>
  </div>
  <div style="margin-bottom: 20px">
    <LButton size="small" plain>小按钮</LButton>
    <LButton size="medium" plain>中按钮</LButton>
    <LButton size="large" plain>大按钮</LButton>
  </div>
  <div style="margin-bottom: 20px">
    <LButton color="blue" round plain icon="search">搜索按钮</LButton>
    <LButton color="green" round plain icon="edit">编辑按钮</LButton>
    <LButton color="gray" round plain icon="check">成功按钮</LButton>
    <LButton color="yellow" round plain icon="message">提示按钮</LButton>
    <LButton color="red" round plain icon="delete">删除按钮</LButton>
  </div>
  <div style="margin-bottom: 20px">
    <LButton color="blue" round plain icon="search"></LButton>
    <LButton color="green" round plain icon="edit"></LButton>
    <LButton color="gray" round plain icon="check"></LButton>
    <LButton color="yellow" round plain icon="message"></LButton>
    <LButton color="red" round plain icon="delete"></LButton>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
