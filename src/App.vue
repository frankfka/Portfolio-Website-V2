<template>
  <div id="app">
    <PortfolioSectionWrapper>
      <IntroSection v-bind="introSectionData"/>
    </PortfolioSectionWrapper>
    <PortfolioSectionWrapper>
      <AboutMeSection v-bind="aboutMeSectionData"/>
    </PortfolioSectionWrapper>
    <PortfolioSectionWrapper>
      <ExperienceSection v-bind="experienceSectionData"/>
    </PortfolioSectionWrapper>
    <PortfolioSectionWrapper>
      <ProjectsSection v-bind="projectsSectionData"/>
    </PortfolioSectionWrapper>
    <PortfolioSectionWrapper>
      <ContactSection v-bind="contactSectionData"/>
    </PortfolioSectionWrapper>
    <FooterSection v-bind="footerSectionData"/>
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

// TODO: https://cli.vuejs.org/guide/deployment.html#github-pages
// TODO: disable aos for mobile
// TODO: mobile appearance

// Bootstrap init
Vue.use(BootstrapVue);
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
        brandImage: profileData.brandImage,
        keyPhrase: profileData.keyPhrase,
        summary: profileData.summary,
        socialProfiles: profileData.socialProfiles,
        ctas: this.appData.ctas,
      };
    },
    aboutMeSectionData() {
      const profileData = this.appData.profile;
      return {
        profileImage: profileData.profileImage,
        personalProfile: profileData.personalProfile,
        highlights: profileData.highlights,
      };
    },
    experienceSectionData() {
      return {
        experienceItems: this.appData.experience,
      };
    },
    projectsSectionData() {
      return {
        projects: this.appData.projects,
        moreProjectsLink: this.appData.moreProjectsLink,
      };
    },
    contactSectionData() {
      return {
        contactLinks: this.appData.contactLinks,
        contactDescription: this.appData.contactDescription,
      };
    },
    footerSectionData() {
      return {
        name: this.appData.profile.name,
        socialProfiles: this.appData.profile.socialProfiles,
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
    // Initialize scrolling animations
    AOS.init();
  },
};
</script>

<style lang="scss">
</style>
