<template>
  <div id="app">
    <PortfolioSectionWrapper>
      <IntroSection v-bind="introSectionData"/>
    </PortfolioSectionWrapper>
    <PortfolioSectionWrapper>
      <AboutMeSection v-bind="aboutMeSectionData"/>
    </PortfolioSectionWrapper>
    <PortfolioSectionWrapper>
      <ExperienceSection/>
    </PortfolioSectionWrapper>
    <PortfolioSectionWrapper>
      <ProjectsSection/>
    </PortfolioSectionWrapper>
    <PortfolioSectionWrapper>
      <ContactSection/>
    </PortfolioSectionWrapper>
    <FooterSection/>
  </div>
</template>

<script>
import AppData from '@/assets/data/all-data';
import { Vue } from 'vue-property-decorator';
import IntroSection from '@/sections/IntroSection.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import AboutMeSection from '@/sections/AboutMeSection.vue';
import ExperienceSection from '@/sections/ExperienceSection.vue';
import ProjectsSection from '@/sections/ProjectsSection.vue';
import ContactSection from '@/sections/ContactSection.vue';
import FooterSection from '@/sections/FooterSection.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioSectionWrapper from '@/components/PortfolioSectionWrapper.vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

export default {
  data() {
    return {
      appData: AppData,
    };
  },
  computed: {
    introSectionData() {
      const profileData = this.appData.profile;
      return {
        name: profileData.name,
        keyPhrase: profileData.keyPhrase,
        summary: profileData.summary,
        socialProfiles: profileData.profiles,
        ctas: profileData.ctas,
      };
    },
    aboutMeSectionData() {
      return {
        personalProfile: this.appData.profile.personalProfile,
        highlights: this.appData.profile.highlights,
      };
    },
  },
  components: {
    PortfolioSectionWrapper,
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
};
</script>

<style lang="scss">
</style>
