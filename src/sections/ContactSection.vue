<template>
  <div class="text-center">
    <h2 class="mb-3">Let's Connect</h2>
    <p id="contact-section-description" class="mb-3" v-html="contactDescription"/>
    <BRow align-v="center" align-h="center">
      <BaseButton
        outlined size="lg" class="mx-3"
        v-for="contact in contactLinks" :key="contact.url"
        :label="contact.label" :url="contact.url"
      />
    </BRow>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'ContactSection',
  components: { BaseButton },
  props: {
    contactLinks: {
      type: Array,
      required: true,
      validator(links) {
        return links.every((link) => typeof link.label === 'string' && typeof link.url === 'string');
      },
    },
    contactDescription: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
#contact-section-description {
  @media (min-width: map-get($grid-breakpoints, lg)) {
    padding: 0 10%;
  }
}
</style>
