<template>
  <div class="row">
    <h2>{{ title }}</h2>
    <p class="card-text">{{ text }}</p>
    <button class="btn btn-light" @click="onClick" >Готово</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Успешная регистрация!",
      text: "Скоро на почту придет письмо с инструкциями и ссылкой на подтверждение регистрации.",
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
</style>
