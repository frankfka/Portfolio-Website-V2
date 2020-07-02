<template>
  <div class="intro-section text-center">
    <div class="intro-header-text">
      <h1>Hi! I'm <span id="intro-name">{{ name }}</span>.</h1>
      <h3 id="intro-key-phrase">{{ keyPhrase }}</h3>
    </div>
    <BRow align-v="center" align-h="center" class="intro-profiles">
      <ProfileIconLink
        v-bind="profile" v-for="profile in profiles" :key="profile.url"
        class="mx-3"
      />
    </BRow>
    <BRow align-v="center" align-h="center" class="intro-buttons">
      <BaseButton
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
      keyPhrase: 'Business minded engineer & fitness enthusiast.',
      profiles: [
        {
          iconName: 'email',
          name: 'jiafrank98@gmail.com',
          url: '',
        },
        {
          iconName: 'phone',
          name: '+1-778-384-9871',
          url: '',
        },
        {
          iconName: 'phone',
          name: '+1-778-384-9871',
          url: '',
        },
        {
          iconName: 'phone',
          name: '+1-778-384-9871',
          url: '',
        },
        {
          iconName: 'phone',
          name: '+1-778-384-9871',
          url: '',
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
#intro-key-phrase {
  color: darkorange;
}
</style>
