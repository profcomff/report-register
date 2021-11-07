<template>
  <div class="container-fluid" @submit.prevent @submit="send">
    <form>
      <div class="form-group">
        <label for="surnameInput">Фамилия</label>
        <input
          type="text"
          class="form-control"
          id="surnameInput"
          placeholder="Иванов"
          required
        />
      </div>

      <div class="form-group">
        <label for="firstnameInput">Имя</label>
        <input
          type="text"
          class="form-control"
          id="firstnameInput"
          placeholder="Иван"
          required
        />
      </div>
      <div class="form-group">
        <label for="patronymicInput">Отчетсво</label>
        <input
          type="text"
          class="form-control"
          id="patronymicInput"
          placeholder="Иванович"
          required
        />
      </div>
      <div class="form-group">
        <label for="groupInput">Номер академической группы</label>
        <input
          type="text"
          class="form-control"
          id="groupInput"
          placeholder="104м"
          required
        />
      </div>
      <div class="form-group">
        <label for="emailInput">Email</label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
          placeholder="Enter email"
          required
        />
        <small id="emailHelp" class="form-text text-muted"
          >Мы не будем использовать этот адрес для маркетинговых
          рассылок.</small
        >
      </div>
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="isSUMember"
          required
        />
        <label for="isSUMember"
          >Подтверждаю, что являюсь членом профсоюза</label
        >
      </div>
      <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    send() {
      axios
        .post(
          "https://app.profcomff.com/report/api/register",
          {
            last_name: document.getElementById("surnameInput").value,
            first_name: document.getElementById("firstnameInput").value,
            patronymic: document.getElementById("patronymicInput").value,
            academic_group_number: document.getElementById("groupInput").value,
            email: document.getElementById("emailInput").value,
          },
          {
            headers: {
              "Content-Type": "Application/json",
            },
          }
        )
        .then(this.openOk, this.openFail);
    },
    openOk() {
      this.$router.push("/message_ok");
    },
    openFail(response) {
      console.log(response);
      if (response.status == 409) {
        this.$router.push(`/message_fail`);
      } else {
        this.$router.push(`/message_critical`);
      }
    },
  },
};
</script>

<style>
.form-check,
.form-group {
  margin-bottom: 10px;
}
</style>
