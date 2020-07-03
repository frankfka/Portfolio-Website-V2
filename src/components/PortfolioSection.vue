<template>
<BContainer fluid="" class="portfolio-section">
  <slot></slot>
</BContainer>
</template>

<script>
export default {
  name: 'PortfolioSection',
};
</script>

<style lang="scss">
.portfolio-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
}
</style>
