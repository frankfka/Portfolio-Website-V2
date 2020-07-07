<template>
  <div class="text-center">
    <div class="text-center">
      <!--Intro text section -->
      <h1 class="mb-3">Hi! I'm {{ name }}.</h1>
      <h3 class="mb-3 primary-color">{{ keyPhrase }}</h3>
      <p class="mb-3 light-text-color" id="intro-summary">{{ summary }}</p>
    </div>
    <!--Row of social profile icons-->
    <BRow align-v="center" align-h="center" class="mb-3">
      <ProfileIconLink
        v-bind="profile" v-for="profile in socialProfiles" :key="profile.url"
        class="mx-3"
      />
    </BRow>
    <!--Call to actions for contact/resume-->
    <BRow align-v="center" align-h="center">
      <BaseButton
        v-for="cta in ctas" :key="cta.url"
        outlined size="lg"
        :label="cta.label" :url="cta.url"
        class="mx-3"
      />
    </BRow>
  </div>
</template>

<script>
import ProfileIconLink from '@/components/ProfileIconLink.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'IntroSection',
  components: { BaseButton, ProfileIconLink },
  props: {
    name: {
      type: String,
      required: true,
    },
    keyPhrase: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    socialProfiles: {
      type: Array,
      required: true,
      validator: (prop) => prop.every((e) => e.iconName && e.name && e.url),
    },
    ctas: {
      type: Array,
      required: true,
      validator: (prop) => prop.every((e) => e.url && e.label),
    },
  },
};
</script>

<style scoped lang="scss">
#intro-summary {
  @media (min-width: map-get($grid-breakpoints, lg)) {
    // Prevent text from being too wide on large screens
    padding: 0 10%;
  }
}
</style>
