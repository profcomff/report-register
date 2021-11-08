<template>
  <div class="row">
    <h2>{{ title }}</h2>
    <p class="card-text">{{ text }}</p>
    <button class="btn btn-primary" @click="onClick" >Попробовать снова</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Произошла непредвиденная ошибка",
      text: "Попробуйте пройти регистрацию еще раз",
    };
  },
  methods: {
    onClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
p, h2 {
  text-align: center;
}
</style>
