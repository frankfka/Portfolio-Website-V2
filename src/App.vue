<template>
  <div id="app">
<!--TODO: Can create a section wrapper-->
    <IntroSection class="portfolio-section" data-aos="fade-up"/>
    <AboutMeSection class="portfolio-section" data-aos="fade-up"/>
    <ExperienceSection class="portfolio-section" data-aos="fade-up"/>
    <ProjectsSection class="portfolio-section" data-aos="fade-up"/>
    <ContactSection class="portfolio-section" data-aos="fade-up"/>
    <FooterSection/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IntroSection from '@/sections/IntroSection.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import AboutMeSection from '@/sections/AboutMeSection.vue';
import ExperienceSection from '@/sections/ExperienceSection.vue';
import ProjectsSection from '@/sections/ProjectsSection.vue';
import ContactSection from '@/sections/ContactSection.vue';
import FooterSection from '@/sections/FooterSection.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

@Component({
  components: {
    FooterSection,
    ContactSection,
    ExperienceSection,
    AboutMeSection,
    IntroSection,
    ProjectsSection,
  },
  created() {
    AOS.init();
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.portfolio-section {
  @extend .container-fluid;
  padding: 6em;
}
</style>
