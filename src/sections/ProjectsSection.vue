<template>
<div class="w-100">
  <!--Header-->
  <h2 class="text-center mb-3">Projects</h2>
  <!--Each project is a card-->
  <BCard
    v-for="(project, index) in projects" :key="index"
    no-body
    class="project-item mb-3"
  >
    <!--Clickable row to expand-->
    <BRow
      align-v="center" no-gutters
      v-b-toggle="'project-collapse-' + index"
      class="project-item-collapse-header"
    >
      <!--Icon-->
      <img :src="project.icon" :alt="project.name" class="project-item-icon"/>
      <!--Project name-->
      <h4>{{ project.name }}</h4>
      <!--Spacer-->
      <BCol/>
      <!--Keywords-->
      <p class="project-item-keywords">{{ getKeywordsDescription(project) }}</p>
    </BRow>
    <!--Expandable content-->
    <BCollapse :id="'project-collapse-' + index" class="project-item-content">
      <!--Project description-->
      <div v-html="project.description" class="mb-3"/>
      <!--Associated links-->
      <BRow no-gutters align-h="end" align-v="center" id="project-icon-links">
        <a
          v-for="link in project.links" :key="link.url"
          :href="link.url" target="_blank"
          class="project-icon-link ml-3"
        >
          <BaseIcon :icon-name="link.iconName"/>
        </a>
      </BRow>
    </BCollapse>
  </BCard>
  <!--More projects button-->
  <div class="text-center">
    <BaseButton :href="moreProjectsLink" outlined label="More Projects on Github"/>
  </div>
</div>
</template>

<script>
import BetterplateLogo from '@/assets/projects/betterplate-logo.png';
import BaseButton from '@/components/BaseButton.vue';
import BaseIcon from '@/components/BaseIcon.vue';

export default {
  name: 'ProjectsSection',
  components: { BaseIcon, BaseButton },
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
      moreProjectsLink: '',
    };
  },
};
</script>

<style scoped lang="scss">
$project-card-padding: 1em;
.project-item-icon {
  max-height: $h4-font-size;
  margin-right: 1em;
}
.project-item-keywords {
  color: $color-primary;
}
.project-item-collapse-header {
  // Prevent outline on active state
  outline: none;
}
.project-item-content, .project-item-collapse-header {
  padding: $project-card-padding;
}
#project-icon-links {
  @include text-link($color-text-light);
}
.project-icon-link {
  font-size: 1.5em; // For icon sizing
}
</style>
