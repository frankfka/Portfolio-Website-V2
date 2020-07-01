<template>
<div>
  <h2 class="text-center">Experience</h2>
  <BTabs
    v-model="selectedTabIndex" justified pills
  >
    <BTab
      v-for="experience in items" :key="experience.startDate + experience.company"
      :title="getTabTitle(experience)"
    >
      <h3>{{ experience.position }} <a :href="experience.website">@{{experience.company}}</a></h3>
      <h5>{{ experience.startDate }} - {{experience.endDate}}</h5>
      <p><span v-html="experience.summary"/></p>
      <div>
        <ul>
          <li v-for="highlight in experience.highlights"
              :key="highlight" is="base-list-item"><span v-html="highlight"/></li>
        </ul>
      </div>
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
            'Became familiar with industry tools, such as: <span class="text-accent">Spring/Guice, Maven, Git, and Google Cloud Platform</span>',
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
            'Became familiar with industry tools, such as: <span class="text-accent">Spring/Guice, Maven, Git, and Google Cloud Platform</span>',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-accent {
  color: darkorange;
}
</style>
