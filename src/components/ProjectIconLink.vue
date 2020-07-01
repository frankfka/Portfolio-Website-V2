<template>
  <a :href="url" class="project-icon-link">
    <img class="project-icon-link-img" :src="projectIcon" alt="TODO">
  </a>
</template>

<script>
import GithubIcon from '@/assets/profiles/github.svg';

const IconLinkToAsset = {
  github: GithubIcon,
};

export default {
  name: 'ProjectIconLink',
  props: {
    url: String,
    iconName: String,
  },
  computed: {
    projectIcon() {
      return IconLinkToAsset[this.iconName];
    },
  },
};
</script>

<style scoped>
.project-icon-link-img {
  width: 1em;
  height: 1em;
  margin: 0.5em;
}
</style>
