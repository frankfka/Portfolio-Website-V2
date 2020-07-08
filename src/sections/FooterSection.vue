<template>
<div id="footer-section">
  <BRow align-h="around" align-v="center" no-gutters>
    <p>
      Designed & Built by {{ name }}
    </p>
    <BRow align-h="end" no-gutters id="footer-section-profiles">
      <IconLink
        v-for="profile in socialProfiles" :key="profile.url"
        :url="profile.url" :icon-name="profile.iconName"
        class="mx-2"
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
  props: {
    name: {
      type: String,
      required: true,
    },
    socialProfiles: {
      type: Array,
      required: true,
      validator: (prop) => prop.every((e) => e.iconName && e.name && e.url),
    },
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
