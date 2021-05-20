<template>
  <div class="filter-page">
    <form class="filter-page__form" @submit.prevent="submitForm">
      <select class="filter-page__select" required v-model="targetVacation.select">
        <option value="Неразрывный отпуск" :disabled="disabledOptions">
          Неразрывный отпуск
        </option>
        <option value="Основной отпуск" :disabled="disabledOptions">
          Основной отпуск
        </option>
        <option value="За доп должность" :disabled="disabledOptions">
          За доп должность
        </option>
      </select>

      <fieldset class="filter-page__fieldset">
        <input type="date" required v-model="targetVacation.dataStart"/>
        <input
          type="date"
          required
          v-model="targetVacation.dataEnd"
          :min="targetVacation.dataStart" :max="countMaxDays"
          @change="counterDaysVacations"
        />
      </fieldset>
      <input class="filter-page__out-day" placeholder="Выбрано дней" type="text" readonly v-model="counterDays" />

      <button class="filter-page__btn" type="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      targetVacation: {
        select: "Неразрывный отпуск",
        dataStart: "",
        dataEnd: "",
      },
      counterDays: null,
      maxDay: null,
    };
  },
  methods: {
    ...mapMutations(["newVacation", "changeVacationsDaysOfUser"]),
    submitForm() {

let counterDays = Math.floor((new Date(this.targetVacation.dataEnd) - new Date(this.targetVacation.dataStart)) /(1000 * 60 * 60 * 24)) + 1;

      const newTargetVacation = {
        select: this.targetVacation.select,
        dataStart: this.targetVacation.dataStart,
        dataEnd: this.targetVacation.dataEnd,
        all_days: counterDays,
      };

      this.newVacation(newTargetVacation);

      let couteredDays = this.counterDays;
      let select = this.targetVacation.select;
      this.changeVacationsDaysOfUser({ couteredDays, select });
    },
    counterDaysVacations() {
      this.counterDays =
        Math.floor(
          (new Date(this.targetVacation.dataEnd) -
            new Date(this.targetVacation.dataStart)) /
            (1000 * 60 * 60 * 24)
        ) + 1;
    },
    
  },
  computed: {
    ...mapGetters(["allVacations"]),
    disabledOptions() {
      return false;
    },
    countMaxDays(){
      let maxDay = new Date(this.targetVacation.dataStart);

      let limitDays = this.$store.state.workers.workers[0].vacations.find(vac => vac.discription == this.targetVacation.select).days

      maxDay.setDate(maxDay.getDate() - 1 + limitDays);

      let day = maxDay.getDate();
      if (day < 10) {
        day = `0${day}`
      }
      let month = maxDay.getMonth() + 1;
      if (month < 10 ) {
        month = `0${month}`
      }
      let year = maxDay.getFullYear();
      return `${year}-${month}-${day}`
    }
  },
};
</script>

<style scoped>

.filter-page__form{
  display: flex;
  justify-content: center;
}

.filter-page__select{
  margin-right: 25px;
}

.filter-page__fieldset{
  border: none;
  margin-right: 25px;
}
.filter-page__fieldset>input{
  padding: 5px 10px;
}

.filter-page__fieldset>input[type=date]:not(:last-child){
  margin-right: 15px;
}

.filter-page__out-day{
  margin-right: 15px;
  padding: 0 10px;
  border-radius: 5px;
}

.filter-page__btn{
  max-width: 150px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 150%;
  border: 1px solid rgb(51, 50, 50);
  border-radius: 5px;
}

</style>
