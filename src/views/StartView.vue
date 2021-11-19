<template>
  <div class="container-fluid">
    <div class="row">
      <p v-if="new Date() < this.start_time">Голосование начнется через</p>
      <p v-else-if="new Date() < this.finish_time">
        Голосование закончится через
      </p>
    </div>
    <div class="row">
      <p class="timer">{{ interval_string }}</p>
    </div>
    <div class="row">
      <div class="col-sm" v-if="(new Date() < this.finish_time) & (new Date() > this.start_time)">
        <button class="btn btn-primary" @click="LoginButtonClick">Вход</button>
      </div>
      <div class="col-sm" v-if="new Date() < this.start_time">
        <button class="btn btn-primary" @click="RegistrationButtonClick">
          Регистрация
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start_time: new Date(Date.UTC(2021, 10, 20, 16)), /* Это 19:00 20 ноября МСК */
      finish_time: new Date(Date.UTC(2021, 10, 23, 19)), /* Это 22:00 23 ноября МСК */
      interval_string: "",
    };
  },
  mounted() {
    this.interval_string = this.formatTimer();
    this.startTimer();
  },
  unmounted() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.interval_string = this.formatTimer();
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
    formatTimer() {
      var now = new Date();
      var days;
      var hours;
      var mins;
      var secs;
      if (now < this.start_time) {
        days = Math.floor((this.start_time - now) / 1000 / 60 / 60 / 24);
        hours = Math.floor(((this.start_time - now) / 1000 / 60 / 60) % 24);
        mins = Math.floor(((this.start_time - now) / 1000 / 60) % 60);
        secs = Math.floor(((this.start_time - now) / 1000) % 60);
        return `${days}\u00A0дней ${hours}\u00A0часов ${mins}\u00A0минут ${secs}\u00A0секунд`;
      } else if (now < this.finish_time) {
        days = Math.floor((this.finish_time - now) / 1000 / 60 / 60 / 24);
        hours = Math.floor(((this.finish_time - now) / 1000 / 60 / 60) % 24);
        mins = Math.floor(((this.finish_time - now) / 1000 / 60) % 60);
        secs = Math.floor(((this.finish_time - now) / 1000) % 60);
        return `${days}\u00A0дней ${hours}\u00A0часов ${mins}\u00A0минут ${secs}\u00A0секунд`;
      } else {
        return "Мероприятие окончено";
      }
    },
    LoginButtonClick() {
      window.open("https://report.profcomff.com/report").focus();
    },
    RegistrationButtonClick() {
      this.$router.push("/register");
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
      }
    },
  },
};
</script>

<style>
p {
  text-align: center;
}

p.timer {
  font-size: 2rem;
  font-weight: bold;
}

div.row {
  align-content: center;
  align-items: center;
}

button {
  width: 100%;
  margin: 10px auto;
}
</style>
