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
      <p v-html="project.description" class="mb-3"/>
      <!--Highlights-->
      <ul>
        <li
          class="mb-1"
          v-for="highlight in project.highlights"
          :key="highlight" is="base-list-item"
          v-html="highlight"
        />
      </ul>
      <!--Associated links-->
      <BRow no-gutters align-h="end" align-v="center" id="project-icon-links">
        <TextIconLink
          v-for="link in project.links" :key="link.url"
          :url="link.url" :icon-name="link.iconName" :name="link.name"
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
import TextIconLink from '@/components/TextIconLink.vue';
import BaseListItem from '@/components/BaseListItem.vue';

export default {
  name: 'ProjectsSection',
  components: { BaseListItem, TextIconLink, BaseButton },
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
          const highlightsIsValid = Array.isArray(project.highlights)
            && project.highlights.length > 0
            && project.highlights.every((highlight) => typeof highlight === 'string');
          const linksAreValid = Array.isArray(project.links)
            && project.links
              .every(
                (link) => typeof link.iconName === 'string'
                && typeof link.url === 'string'
                && typeof link.name === 'string',
              );
          const keyWordsAreValid = Array.isArray(project.keywords)
            && project.keywords.every((keyword) => typeof keyword === 'string');
          return linksAreValid && keyWordsAreValid && highlightsIsValid
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
</style>
