<template>
  <a :href="url" class="profile-icon-link flex-wrap-row-centered">
    <img class="profile-icon-link-img" :src="profileIcon" alt="TODO">
    <p class="profile-icon-link-name">{{ name }}</p>
  </a>
</template>

<script>
import EmailIcon from '@/assets/profiles/email.svg';
import PhoneIcon from '@/assets/profiles/phone.svg';

const IconLinkToAsset = {
  email: EmailIcon,
  phone: PhoneIcon,
};

export default {
  name: 'ProfileIconLink',
  props: {
    url: String,
    iconName: String,
    name: String,
  },
  computed: {
    profileIcon() {
      return IconLinkToAsset[this.iconName];
    },
  },
};
</script>

<style scoped>
.profile-icon-link {
  color: dimgray;
}
.profile-icon-link-img {
  width: 1em;
  height: 1em;
  margin: 0.5em;
}
</style>
