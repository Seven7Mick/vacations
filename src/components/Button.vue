<template>
  <button class="btn" :type="buttonType" :disabled="buttonDisabled">{{buttonName}}</button>
</template>

<script>
export default {
  props:{
    buttonName: String,
    buttonType: String,
    buttonDisabled: Boolean,
  }
};
</script>

<style scoped>
.btn {
  max-width: 150px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 150%;
  border: 1px solid rgb(51, 50, 50);
  border-radius: 5px;
}

.btn:hover{
  box-shadow: 2px 2px 3px rgb(145, 142, 142);
}

.btn:active{
  box-shadow: 2px 2px 2px rgb(145, 142, 142);
  transform: translateY(2px)
}
</style>