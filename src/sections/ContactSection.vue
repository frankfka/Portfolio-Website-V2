<template>
  <div class="text-center">
    <h2 class="mb-3">Let's Connect</h2>
    <p id="connect-section-description" class="mb-3">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
    <BRow align-v="center" align-h="center">
      <BaseButton
        outlined size="lg" class="mx-3"
        v-for="contact in contactLinks" :key="contact.url"
        :label="contact.label" :href="contact.url"
      />
    </BRow>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'ContactSection',
  components: { BaseButton },
  data() {
    return {
      contactLinks: [
        {
          label: 'Email',
          url: 'asd',
        },
        {
          label: 'LinkedIn',
          url: 'saf',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
#connect-section-description {
  @media (min-width: map-get($grid-breakpoints, lg)) {
    padding: 0 10%;
  }
}
</style>
