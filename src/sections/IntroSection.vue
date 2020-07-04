<template>
  <div class="text-center">
    <div class="text-center">
      <h1 class="mb-3">Hi! I'm {{ name }}.</h1>
      <h3 class="mb-3 primary-color">{{ keyPhrase }}</h3>
      <p class="mb-3 light-text-color" id="intro-summary">{{ summary }}</p>
    </div>
    <BRow align-v="center" align-h="center" class="mb-3">
      <ProfileIconLink
        v-bind="profile" v-for="profile in profiles" :key="profile.url"
        class="mx-3"
      />
    </BRow>
    <BRow align-v="center" align-h="center">
      <BaseButton
        outlined
        v-bind="cta" v-for="cta in ctas" :key="cta.href"
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
  data() {
    return {
      name: 'Frank Jia',
      keyPhrase: 'I\'m a business-minded full-stack software engineer.',
      summary: 'As an engineering student based in Vancouver, Canada, I have developed and maintained both frontend and backend production software. '
        + 'Outside of work, I am a fitness enthusiast passionate about maintaining an active and healthy lifestyle.',
      profiles: [
        {
          iconName: 'github',
          name: 'frankfka',
          url: 'https://github.com/frankfka',
        },
        {
          iconName: 'linkedin',
          name: 'jiafrank',
          url: 'https://www.linkedin.com/in/jiafrank/',
        },
        {
          iconName: 'medium',
          name: 'frankjia',
          url: 'https://medium.com/@frankjia',
        },
        {
          iconName: 'email',
          name: 'jiafrank98@gmail.com',
          url: 'mailto:jiafrank98@gmail.com',
        },
      ],
      ctas: [
        {
          label: 'Contact',
          href: '#',
          size: 'lg',
        }, {
          label: 'Resume',
          href: '#2',
          size: 'lg',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
#intro-summary {
  @media (min-width: map-get($grid-breakpoints, lg)) {
    padding: 0 10%;
  }
}
</style>
