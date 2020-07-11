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
      v-for="experience in experienceItems" :key="experience.startDate + experience.company"
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
      <BaseList :items="experience.highlights"/>
    </BTab>
  </BTabs>
</div>
</template>

<script>
import BaseList from '@/components/BaseList.vue';

export default {
  name: 'ExperienceSection',
  components: { BaseList },
  methods: {
    getTabTitle(experience) {
      // Default to company
      let title = experience.company;
      if (experience.title) {
        title = experience.title;
      }
      return title.replace(/\s+/g, '\u00a0'); // Disallow space breaks
    },
  },
  data() {
    return {
      selectedTabIndex: 0,
    };
  },
  props: {
    experienceItems: {
      type: Array,
      required: true,
      validator(items) {
        return items.every((item) => {
          const highlightsIsValid = Array.isArray(item.highlights)
            && item.highlights.length > 0
            && item.highlights.every((highlight) => typeof highlight === 'string');
          return highlightsIsValid
            && typeof item.company === 'string'
            && typeof item.position === 'string'
            && typeof item.website === 'string'
            && typeof item.startDate === 'string'
            && typeof item.endDate === 'string'
            && typeof item.summary === 'string';
        });
      },
    },
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
