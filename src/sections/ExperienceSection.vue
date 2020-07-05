<template>
<div id="experience-section">
  <!--Header-->
  <h2 class="text-center mb-3">Experience</h2>
  <!--All Tabs-->
  <BTabs
    v-model="selectedTabIndex" justified pills
    active-nav-item-class="experience-active-tab-nav"
    nav-wrapper-class="experience-tab-nav-wrapper"
    nav-class="experience-tab-navs"
    no-nav-style
  >
    <!--Experience Tab-->
    <BTab
      class="experience-section-tab-content"
      v-for="experience in items" :key="experience.startDate + experience.company"
      :title="getTabTitle(experience)"
    >
      <!--Software Engineer Intern @SAP Concur-->
      <h3 class="my-3">
        {{ experience.position }} <a :href="experience.website"
                                     target="_blank">@{{experience.company}}</a>
      </h3>
      <!--May 2019 - Dec 2019-->
      <h5 class="mb-3">
        {{ experience.startDate }} - {{experience.endDate}}
      </h5>
      <!--HTML Summary-->
      <p class="mb-3" v-html="experience.summary"/>
      <!--Highlights-->
      <ul>
        <li
          class="mb-1"
          v-for="highlight in experience.highlights"
          :key="highlight" is="base-list-item"
          v-html="highlight"
        />
      </ul>
    </BTab>
  </BTabs>
</div>
</template>

<script>
// TODO: Custom formatting: https://bootstrap-vue.org/docs/components/tabs
import BaseListItem from '@/components/BaseListItem.vue';

export default {
  name: 'ExperienceSection',
  components: { BaseListItem },
  methods: {
    getTabTitle(experience) {
      return experience.company.replace(/\s+/g, '\u00a0'); // Disallow space breaks
    },
  },
  data() {
    return {
      selectedTabIndex: 0,
      items: [
        {
          company: 'SAP Concur',
          position: 'Software Engineer Intern',
          website: 'https://www.concur.ca/',
          startDate: 'May 2019',
          endDate: 'Dec 2019',
          summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          highlights: [
            'Optimized the existing code base and introduced new product features to enhance the efficiency and value proposition of our core product',
            'Developed expertise in Java for enterprise applications with over 1000+ individual contributions and 75+ merge requests',
            'Solely responsible for developing and integrating ID verification functionality, such as OCR and barcode scanning, that reduced fraud rates in online banking applications',
            'Became familiar with industry tools, such as: <span class="primary-color">Spring/Guice, Maven, Git, and Google Cloud Platform</span>',
          ],
        },
        {
          company: 'Company',
          position: 'President',
          website: 'http://company.com',
          startDate: 'Jan 2018',
          endDate: 'Apr 2018',
          summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          highlights: [
            'Optimized the existing code base and introduced new product features to enhance the efficiency and value proposition of our core product',
            'Developed expertise in Java for enterprise applications with over 1000+ individual contributions and 75+ merge requests',
            'Solely responsible for developing and integrating ID verification functionality, such as OCR and barcode scanning, that reduced fraud rates in online banking applications',
            'Became familiar with industry tools, such as: <span class="primary-color">Spring/Guice, Maven, Git, and Google Cloud Platform</span>',
          ],
        },
        {
          company: 'Company2',
          position: 'President',
          website: 'http://company.com',
          startDate: 'Jan 2018',
          endDate: 'Apr 2018',
          summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          highlights: [
            'Optimized the existing code base and introduced new product features to enhance the efficiency and value proposition of our core product',
            'Developed expertise in Java for enterprise applications with over 1000+ individual contributions and 75+ merge requests',
            'Solely responsible for developing and integrating ID verification functionality, such as OCR and barcode scanning, that reduced fraud rates in online banking applications',
            'Became familiar with industry tools, such as: <span class="primary-color">Spring/Guice, Maven, Git, and Google Cloud Platform</span>',
          ],
        },
        {
          company: 'Company4',
          position: 'President',
          website: 'http://company.com',
          startDate: 'Jan 2018',
          endDate: 'Apr 2018',
          summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          highlights: [
            'Optimized the existing code base and introduced new product features to enhance the efficiency and value proposition of our core product',
            'Developed expertise in Java for enterprise applications with over 1000+ individual contributions and 75+ merge requests',
            'Solely responsible for developing and integrating ID verification functionality, such as OCR and barcode scanning, that reduced fraud rates in online banking applications',
            'Became familiar with industry tools, such as: <span class="primary-color">Spring/Guice, Maven, Git, and Google Cloud Platform</span>',
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.experience-section-tab-content {
  @include text-link();
}
// Matches each individual tab
#experience-section .nav-link {
  $bottom-nav-link-border: 1px solid;
  color: $color-text;
  border-bottom: $bottom-nav-link-border $color-text-light;
  &:hover {
    color: $color-primary;
    border-bottom: $bottom-nav-link-border $color-primary;
  }
  &.active {
    border-bottom: $bottom-nav-link-border $color-primary-dark;
    color: $color-primary-dark !important;
  }
}
// Matches current active tab
.experience-active-tab-nav {
}
// <ul> element for navs
.experience-tab-navs {
}
// Entire nav section for tabs
.experience-tab-nav-wrapper {
}
</style>
