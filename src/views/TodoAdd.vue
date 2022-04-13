<template>
  <div class="about">
    <h3>할일을 작성해주세요</h3>
    <div>
      <input type="text" v-model="message" />
      <button type="button">추가</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TodoAdd',
};
</script>

<style lang="scss" module>
button {
  margin-left: 10px;
}
</style>
