<template>
    <a :href="url" class="profile-icon-link text-link" target="_blank">
      <BRow no-gutters align-v="center">
        <BaseIcon :icon-name="iconName" class="profile-icon-link-img"/>
        <p class="profile-icon-link-name">{{ name }}</p>
      </BRow>
    </a>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue';

export default {
  name: 'ProfileIconLink',
  props: {
    url: String,
    iconName: String,
    name: String,
  },
  components: {
    BaseIcon,
  },
};
</script>

<style scoped lang="scss">
@include text-link($color-text-light);
.profile-icon-link-img {
  margin-right: 0.2em;
}
</style>
