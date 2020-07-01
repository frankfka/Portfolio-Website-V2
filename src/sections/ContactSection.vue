<template>
  <div class="text-center">
    <h2>Let's Connect</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
    <BRow align-v="center" align-h="center">
      <BaseButton label="Email" href="" size="lg"/>
      <BaseButton label="LinkedIn" href="" size="lg"/>
    </BRow>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';

export default {
  name: 'ContactSection',
  components: { BaseButton },
};
</script>

<style scoped>

</style>
