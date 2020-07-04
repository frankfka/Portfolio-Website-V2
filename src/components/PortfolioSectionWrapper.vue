<template>
<div class="portfolio-section" data-aos="fade-up">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'PortfolioSectionWrapper',
};
</script>

<style lang="scss">
.portfolio-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  @media (min-width: map-get($grid-breakpoints, lg)) {
    padding: 0 10%;
  }
  @media (min-width: map-get($grid-breakpoints, xl)) {
    padding: 0 15%;
  }
}
</style>
