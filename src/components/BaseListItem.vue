<template>
<li>
  <slot></slot>
</li>
</template>

<script>
export default {
  name: 'BaseListItem',
};
</script>

<style scoped>
li {
  list-style-type: none;
}
li:before {
  content: ">";
  font-size: 1em;
  margin-left: -1em;
  margin-right: 1em;
  color: darkorange;
}
</style>
