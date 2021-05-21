<template>
  <div class="person-info">
    <div class="person-info__bio">
      <h2 class="person-info__bio-name">ФИО: {{ allUsers[0].name }} <span v-if="allUsers[0].level" class="check-boss"></span></h2>
      <p class="person-info__bio-position">Должность:</p>
      <p class="person-info__bio-experience">Стаж:</p>
      <p class="person-info__bio-days">Всего дней отпуска: {{ sumDaysVacationsUser }}</p>
    </div>

    <table border="1" bordercolor="black" class="table">
      <thead>
        <tr>
          <td>Вид отпуска</td>
          <td>Всего дней</td>
          <td>Использовано дней</td>
          <td>Осталось дней</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="vacation of allUsers[0].vacations" :key="vacation.id">
          <td>{{ vacation.discription }}</td>
          <td>{{ vacation.days_res }}</td>
          <td>{{ vacation.days_res - vacation.days }}</td>
          <td>{{ vacation.days }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allUsers", "sumDaysVacationsUser", "allVacations"]),
  },
};
</script> 

<style scoped>
.person-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.person-info__bio {
  flex: 0 1 380px;
  padding: 15px;
  text-align: left;
  font-size: 16px;
  line-height: 150%;
  background-color: rgba(255, 255, 255, 0.808);
  border-radius: 10px;
}

.person-info__bio-name {
  font-size: 18px;
  line-height: 150%;
  display: flex;
}
.check-boss{
  margin-left: 10px;
  flex: 0 0 25px;
  background-image: url(../assets/Boss.svg);
  background-size: contain;
  background-repeat: no-repeat;
}
.person-info__bio-position {
}
.person-info__bio-experience {
}
.person-info__bio-days {
}

.table {
  max-width: 800px;
  font-size: 16px;
  line-height: 150%;
  background-color: #e4e4e4;
}

.table > thead > tr > td {
  width: 200px;
  height: 24px;
  border-bottom: 1px solid black;
}

.table > thead > tr > td:not(:last-child){
  border-right: 1px solid black;
}

.table > tbody > tr > td {
  width: 200px;
  height: 24px;
  border-bottom: 1px solid black;
}

.table > tbody > tr > td:not(:last-child){
  border-right: 1px solid black;
}

</style>