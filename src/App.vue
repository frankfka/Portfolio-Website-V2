<template>
  <div id="app">
    <IntroSection class="portfolio-section"/>
    <AboutMeSection class="portfolio-section"/>
    <ExperienceSection class="portfolio-section"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IntroSection from '@/sections/IntroSection.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import AboutMeSection from '@/sections/AboutMeSection.vue';
import ExperienceSection from '@/sections/ExperienceSection.vue';
import HelloWorld from './components/HelloWorld.vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

@Component({
  components: {
    ExperienceSection,
    AboutMeSection,
    HelloWorld,
    IntroSection,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto Mono', 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-decoration: none;
  /*TODO: Animation on hover*/
}
.portfolio-section {
  @extend .container-fluid;
  padding: 6em;
}
</style>
