<template>
    <a :href="url" class="profile-icon-link text-link">
      <BRow no-gutters align-v="center">
        <FontAwesomeIcon :icon="profileIcon" class="profile-icon-link-img"></FontAwesomeIcon>
        <p class="profile-icon-link-name">{{ name }}</p>
      </BRow>
    </a>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faEnvelope, faMedium, faLinkedin);

const IconLinkToAsset = {
  email: faEnvelope,
  github: faGithub,
  medium: faMedium,
  linkedin: faLinkedin,
};

export default {
  name: 'ProfileIconLink',
  props: {
    url: String,
    iconName: String,
    name: String,
  },
  computed: {
    profileIcon() {
      return IconLinkToAsset[this.iconName];
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped lang="scss">
@include text-link($color-text-light);
.profile-icon-link-img {
  margin-right: 0.2em;
}
</style>
