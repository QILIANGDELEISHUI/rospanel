<script setup lang="ts">
import {provide, ref, onMounted} from 'vue';

const addThemeAttribute = (theme: string) => {
  const html = document.documentElement;
  html.setAttribute('class', theme);
}

const theme = ref(localStorage.getItem('myTheme') || 'light');

onMounted(() => {
  addThemeAttribute(theme.value);
});

const setTheme = (newTheme: string) => {
  // 改变主题
  theme.value = newTheme;

  addThemeAttribute(newTheme);

  localStorage.setItem('myTheme', newTheme);
};

provide('theme', {
  theme,
  setTheme
});

</script>

<template>
  <div class="bg" >
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bg {
  background-color: var(--v-bg-color);

}
</style>
