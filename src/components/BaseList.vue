<template>
<ul>
  <li
    class="mb-1"
    v-for="item in items"
    :key="item" is="base-list-item"
    v-html="item"
  />
</ul>
</template>

<script>
import BaseListItem from '@/components/BaseListItem.vue';

export default {
  name: 'BaseList',
  components: { BaseListItem },
  props: {
    items: {
      type: Array,
      required: true,
      validator(items) {
        return items.every((item) => typeof item === 'string');
      },
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  padding-left: 1em;
  @media (min-width: map-get($grid-breakpoints, md)) {
    padding-left: 2em;
  }
}
</style>
