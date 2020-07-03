<template>
<div class="w-100">
  <h2 class="text-center">Projects</h2>
  <BCard
    v-for="(project, index) in projects" :key="index"
    no-body
    class="project-item"
  >
    <BRow
      align-v="center" no-gutters
      v-b-toggle="'project-collapse-' + index"
      class="project-item-collapse-header"
    >
      <img :src="project.icon" :alt="project.name" class="project-item-icon"/>
      <h4>{{ project.name }}</h4>
      <BCol/>
      <p>{{ getKeywordsDescription(project) }}</p>
    </BRow>
    <BCollapse :id="'project-collapse-' + index">
      <div v-html="project.description"/>
      <BRow no-gutters align-h="start" align-v="center" >
        <ProjectIconLink
          v-for="link in project.links" :key="link.url"
          :url="link.url" :icon-name="link.iconName"
        />
      </BRow>
    </BCollapse>
  </BCard>
  <div class="text-center">
    <BaseButton href="#" label="More Projects on Github"/>
  </div>
</div>
</template>

<script>
import BetterplateLogo from '@/assets/projects/betterplate-logo.png';
import ProjectIconLink from '@/components/ProjectIconLink.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'ProjectsSection',
  components: { BaseButton, ProjectIconLink },
  methods: {
    getKeywordsDescription(project) {
      return project.keywords.join(', ');
    },
  },
  data() {
    return {
      projects: [
        {
          name: 'Betterplate',
          icon: BetterplateLogo,
          description: `
        <p>
          As a fitness enthusiast and stickler for healthy eating, I wanted to easily access
          nutritional information of restaurant menu items. However, I could not find an existing
          solution that integrated nutritional details of a variety of restaurants. I have always
          had an interest in developing mobile applications, so I decided to build this app myself.
        </p>
        <p>
          Unfortunately, I had no experience nor knowledge in mobile application development. I
          decided to
          <span class="accent-text">self-enroll in a Udemy course for iOS development</span>. This
          project was not only an excellent introduction into the realm of mobile software, but also
          allowed me to experiment in <span class="accent-text">web crawling, data processing, and SQLite databases.</span>
        </p>
          `,
          keywords: ['Swift', 'Kotlin', 'Google Cloud'],
          links: [
            {
              iconName: 'github',
              url: '#',
            },
            {
              iconName: 'github',
              url: '#1',
            },
            {
              iconName: 'github',
              url: '#2',
            },
          ],
        },
        {
          name: 'Clerc',
          icon: BetterplateLogo,
          description: 'An Android/iOS application to make healthy eating more accessible when dining out',
          keywords: ['Swift', 'Kotlin', 'Google Cloud'],
          links: [
            {
              iconName: 'github',
              url: '#',
            },
            {
              iconName: 'github',
              url: '#1',
            },
            {
              iconName: 'github',
              url: '#2',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.project-item {
  margin: 2em auto;
}
.project-item-icon {
  // TODO: Should be configured to same height
  max-height: 3em;
}
.project-item-collapse-header {
  padding: 1em;
  // Prevent outline on active state
  outline: none;
}
</style>
