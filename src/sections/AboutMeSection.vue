<template>
  <div>
    <BRow id="about-me-section" align-v="center" align-h="center">
      <!--Column for text info-->
      <BCol cols="12" md="6" xl="8" order="2" order-md="1" id="about-me-text">
        <h2 class="text-center text-md-left mb-3">About Me</h2>
        <div v-html="personalProfile" class="mb-3 about-me-text-summary"/>
        <div class="highlights mb-3">
          <BaseList :items="highlights"/>
        </div>
      </BCol>
      <!--Column for face image-->
      <BCol cols="6" xl="4" order="1" order-md="2" class="text-center my-5">
        <img :src="profileImage" alt="Profile Photo" class="img-fluid about-me-profile-img">
      </BCol>
    </BRow>
  </div>
</template>

<script>
import BaseList from '@/components/BaseList.vue';

export default {
  name: 'AboutMeSection',
  components: { BaseList },
  props: {
    profileImage: String,
    personalProfile: {
      type: String,
      required: true,
    },
    highlights: {
      type: Array,
      required: true,
      validator: (prop) => prop.every((e) => (typeof e) === 'string'),
    },
  },
};
</script>

<style lang="scss">
#about-me-text {
  @include text-link();  // v-html does not work with scoped style
}
</style>
<style scoped lang="scss">
ul {
  padding-left: 1em;
}
</style>
