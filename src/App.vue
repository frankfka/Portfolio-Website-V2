<template>
  <div id="app">
    <PortfolioSection>
      <IntroSection data-aos="fade-up"/>
    </PortfolioSection>
    <PortfolioSection>
      <AboutMeSection data-aos="fade-up"/>
    </PortfolioSection>
    <PortfolioSection>
      <ExperienceSection data-aos="fade-up"/>
    </PortfolioSection>
    <PortfolioSection>
      <ProjectsSection data-aos="fade-up"/>
    </PortfolioSection>
    <PortfolioSection>
      <ContactSection data-aos="fade-up"/>
    </PortfolioSection>
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
import PortfolioSection from '@/components/PortfolioSection.vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

@Component({
  components: {
    PortfolioSection,
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
</style>
