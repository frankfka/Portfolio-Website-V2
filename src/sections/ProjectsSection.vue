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
        <IconLink
          v-for="link in project.links" :key="link.url"
          :url="link.url" :icon-name="link.iconName"
          class="project-icon-link ml-3"
        />
      </BRow>
    </BCollapse>
  </BCard>
  <!--More projects button-->
  <div class="text-center">
    <BaseButton :url="moreProjectsLink" outlined label="More Projects on Github"/>
  </div>
</div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import IconLink from '@/components/IconLink.vue';

export default {
  name: 'ProjectsSection',
  components: { IconLink, BaseButton },
  methods: {
    getKeywordsDescription(project) {
      return project.keywords.join(', ');
    },
  },
  props: {
    projects: {
      type: Array,
      required: true,
      validator(projects) {
        return projects.every((project) => {
          const linksAreValid = Array.isArray(project.links)
            && project.links
              .every((link) => typeof link.iconName === 'string' && typeof link.url === 'string');
          const keyWordsAreValid = Array.isArray(project.keywords)
            && project.keywords.every((keyword) => typeof keyword === 'string');
          return linksAreValid && keyWordsAreValid
            && typeof project.name === 'string' && typeof project.description === 'string'
            && typeof project.icon === 'string';
        });
      },
    },
    moreProjectsLink: {
      type: String,
      required: true,
    },
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
