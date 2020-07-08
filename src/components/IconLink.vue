<template>
<a :href="url" target="_blank">
  <BaseIcon :icon-name="iconName"/>
</a>
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  name: 'IconLink',
  components: { BaseIcon },
  props: {
    url: String,
    iconName: {
      type: String,
      required: true,
    },
  },
};
</script>
