<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <div class=background></div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style>
body {
  margin: 0;
}
}
@-webkit-keyframes background {
  0%{background-position:50% 0%}
  50%{background-position:51% 100%}
  100%{background-position:50% 0%}
}
@-moz-keyframes background {
  0%{background-position:50% 0%}
  50%{background-position:51% 100%}
  100%{background-position:50% 0%}
}
@-o-keyframes background {
  0%{background-position:50% 0%}
  50%{background-position:51% 100%}
  100%{background-position:50% 0%}
}
@keyframes background {
  0%{background-position:50% 0%}
  50%{background-position:51% 100%}
  100%{background-position:50% 0%}
}

.background {
  background: linear-gradient(180deg, var(--backgroundDark) 70% , var(--foregroundDark));
  background-size: 120% 120%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -100;
  -webkit-animation: background 15s ease infinite;
  -moz-animation: background 15s ease infinite;
  -o-animation: background 15s ease infinite;
  animation: background 15s ease infinite;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
* {
  color: var(--font)
}
  </style>
