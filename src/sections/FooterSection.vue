<template>
<div id="footer-section">
  <BRow align-h="around" align-v="center" no-gutters>
    <p>
      Designed & Built by Frank Jia
    </p>
    <BRow align-h="end" no-gutters id="footer-section-profiles">
      <IconLink
        v-for="profile in profiles" :key="profile.url"
        :href="profile.url" :icon-name="profile.iconName"
        class="ml-3"
      />
    </BRow>
  </BRow>
  </div>
</template>

<script>
import IconLink from '@/components/IconLink.vue';

export default {
  name: 'FooterSection',
  components: { IconLink },
  data() {
    return {
      profiles: [
        {
          iconName: 'github',
          url: 'https://github.com/frankfka',
        },
        {
          iconName: 'linkedin',
          url: 'https://www.linkedin.com/in/jiafrank/',
        },
        {
          iconName: 'medium',
          url: 'https://medium.com/@frankjia',
        },
        {
          iconName: 'email',
          url: 'mailto:jiafrank98@gmail.com',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
#footer-section {
  padding: 1em;
}
#footer-section-profiles {
  @include text-link($color-text-light);
  font-size: 1.2em;
}
</style>
