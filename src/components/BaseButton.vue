<template>
  <BButton
    :class="outlined ? 'base-button-outline' : 'base-button-fill'"
    :size="size"
    :href="url"
    target="_blank"
  >
    {{ label }}
  </BButton>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: String,
    url: String,
    size: {
      type: String,
      default: '',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
  $border-style: 1px solid;

  // Filled
  .base-button-fill, .base-button-fill:hover, .base-button-fill:active, .base-button-fill:visited {
    background-color: $color-primary !important;
    border: $color-primary $border-style !important;
  }

  .base-button-fill {
    color: $color-text-white !important;
  }

  .base-button-fill:hover {
    background-color: $color-primary-dark !important;
  }

  // Outline
  .base-button-outline, .base-button-outline:hover,
  .base-button-outline:active, .base-button-outline:visited {
    background-color: transparent !important;
    border: $color-primary $border-style !important;
  }

  .base-button-outline {
    color: $color-primary !important;
  }

  .base-button-outline:hover {
    background-color: $color-primary-dark !important;
    color: $color-text-white !important;
  }
</style>
