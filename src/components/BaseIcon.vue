<template>
<FontAwesomeIcon :icon="icon"></FontAwesomeIcon>
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
  name: 'BaseIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return IconLinkToAsset[this.iconName];
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>

</style>
