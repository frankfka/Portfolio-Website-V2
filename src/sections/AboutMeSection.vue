<template>
  <div>
    <BRow class="about-me-section" align-v="center">
      <BCol md="6" order="2" order-md="1">
        <h2 class="text-center text-md-left">About Me</h2>
        <div v-html="summary"/>
        <div class="highlights">
          <ul>
            <li v-for="highlight in highlights"
                :key="highlight" is="base-list-item">{{ highlight }}</li>
          </ul>
        </div>
      </BCol>
      <BCol md="6" order="1" order-md="2" class="text-center">
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

<style scoped>
ul {
  padding-left: 1em;
}
.about-me-profile-img {
  max-width: 80%;
}
</style>
