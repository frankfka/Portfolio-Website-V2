<template>
  <BButton class="base-button" :size="size" :href="href">{{ label }}</BButton>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: String,
    href: String,
    size: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.base-button, .base-button:hover, .base-button:active, .base-button:visited {
  background-color: orange !important;
  border: none !important;
}
.base-button:hover {
  background-color: darkorange !important;
}
</style>
