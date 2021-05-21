<template>
  <div class="filter-page">
    <form class="filter-page__form" @submit.prevent="submitForm">
      <select
        class="filter-page__select"
        required
        v-model="targetVacation.select"
      >
        <option
          v-for="vacation of allUsers[0].vacations"
          :key="vacation.id"
          :value="vacation.discription"
        >
          {{ vacation.discription }}
        </option>
      </select>

      <fieldset class="filter-page__fieldset">
        <input type="date" required v-model="targetVacation.dataStart" />
        <input
          type="date"
          required
          v-model="targetVacation.dataEnd"
          :min="targetVacation.dataStart"
          :max="countMaxDays"
          @change="counterDaysVacations"
        />
      </fieldset>
      <input
        class="filter-page__out-day"
        placeholder="Выбрано дней"
        type="text"
        readonly
        v-model="counterDays"
      />

      <Button v-bind="button"/>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Button from "@/components/Button";

export default {
  components: {
    Button,
  },
  data() {
    return {
      targetVacation: {
        select: "Неразрывный отпуск",
        dataStart: "",
        dataEnd: "",
      },
      counterDays: null,
      maxDay: null,
      button: {
        buttonName: "Подтвердить",
        buttonType: "submit",
        buttonDisabled: false,
      },
    };
  },
  methods: {
    ...mapMutations(["newVacation", "changeVacationsDaysOfUser"]),
    submitForm() {
      let counterDays =
        Math.floor(
          (new Date(this.targetVacation.dataEnd) -
            new Date(this.targetVacation.dataStart)) /
            (1000 * 60 * 60 * 24)
        ) + 1;

      const newTargetVacation = {
        select: this.targetVacation.select,
        dataStart: this.targetVacation.dataStart,
        dataEnd: this.targetVacation.dataEnd,
        all_days: counterDays,
      };

      if (
        newTargetVacation.select === "Неразрывный отпуск" &&
        newTargetVacation.all_days !== 14
      ) {
        return alert("Выбрано менее 14 дней");
      }

      this.newVacation(newTargetVacation);

      let couteredDays = this.counterDays;
      let select = this.targetVacation.select;
      this.changeVacationsDaysOfUser({ couteredDays, select });

      // null
      this.targetVacation.dataStart = '';
      this.targetVacation.dataEnd = '';
      this.counterDays = '';
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
    ...mapGetters(["allVacations", "allUsers"]),

    countMaxDays() {
      let maxDay = new Date(this.targetVacation.dataStart);

      let limitDays = this.$store.state.workers.workers[0].vacations.find(
        (vac) => vac.discription == this.targetVacation.select
      ).days;

      maxDay.setDate(maxDay.getDate() - 1 + limitDays);

      let day = maxDay.getDate();
      if (day < 10) {
        day = `0${day}`;
      }
      let month = maxDay.getMonth() + 1;
      if (month < 10) {
        month = `0${month}`;
      }
      let year = maxDay.getFullYear();
      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<style scoped>
.filter-page__form {
  display: flex;
  justify-content: center;
}

.filter-page__select {
  padding: 5px 10px;
  margin-right: 25px;
  border-radius: 5px;
}

.filter-page__fieldset {
  border: none;
  margin-right: 25px;
}
.filter-page__fieldset > input {
  padding: 5px 10px;
  width: 220px;
  border-radius: 5px;
}

.filter-page__fieldset > input[type="date"]:not(:last-child) {
  margin-right: 15px;
}

.filter-page__out-day {
  margin-right: 15px;
  padding: 0 10px;
  border-radius: 5px;
}

.filter-page__btn {
  max-width: 150px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 150%;
  border: 1px solid rgb(51, 50, 50);
  border-radius: 5px;
}
</style>
