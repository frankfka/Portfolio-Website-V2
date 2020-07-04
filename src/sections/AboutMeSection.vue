<template>
  <div>
    <BRow id="about-me-section" align-v="center" align-h="center">
      <!--Column for text info-->
      <BCol cols="12" md="6" xl="8" order="2" order-md="1" id="about-me-text">
        <h2 class="text-center text-md-left mb-3">About Me</h2>
        <div v-html="summary" class="mb-3 about-me-text-summary"/>
        <div class="highlights mb-3">
          <ul>
            <li v-for="highlight in highlights"
                :key="highlight" is="base-list-item">{{ highlight }}</li>
          </ul>
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
import ProfileImage from '@/assets/personal-image.png';
import BaseListItem from '@/components/BaseListItem.vue';

export default {
  name: 'AboutMeSection',
  components: { BaseListItem },
  data() {
    return {
      summary: `
        <p>
          Hello! I'm Frank Jia, a mobile app developer,
          problem solver, and fitness enthusiast. <br><br>
          I am a fourth year <a href="http://www.engphys.ubc.ca/" target="_blank">Engineering
          Physics</a> student at UBC, which is a blend of Software Engineering &amp; Mechatronics.
          <br><br>
          Although I keep myself busy with school, I exercise on a daily basis and am committed to
          maintaining my health with whole foods. <br><br>
          I love learning new technologies and creating value through software. I have experience
          with:
        </p>
      `,
      profileImage: ProfileImage,
      highlights: [
        'Backend development in Java/Kotlin/Golang/NodeJS',
        'Machine learning in Python (Mainly NLP)',
        'Mobile development in Kotlin/Swift',
        'Methodologies such as Redux/Reactive Programming',
        'Web development in React/Native HTML/CSS',
        'Cloud infrastructure in AWS/GCP',
      ],
    };
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
