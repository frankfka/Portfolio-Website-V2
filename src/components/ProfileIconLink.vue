<template>
    <a :href="url" class="profile-icon-link text-link">
      <BRow no-gutters align-v="center">
        <img class="profile-icon-link-img" :src="profileIcon" alt="TODO">
        <p class="profile-icon-link-name">{{ name }}</p>
      </BRow>
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

<style scoped lang="scss">
@include text-link($color-text-light);
.profile-icon-link-img {
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
}
</style>
