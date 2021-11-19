<template>
  <div class="content">
    <router-link to="/">Home</router-link>
    <router-link to="/guide">Guide</router-link>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  width: 40%;
  min-width: 500px;
  margin: 0 auto;
  position: relative;
}

a {
  font: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 1rem;
}
a:hover,
a.router-link-active {
  border-bottom: 2px solid #3498db;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
