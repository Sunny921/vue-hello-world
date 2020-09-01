<template>
  <div>
    <input type="number" v-model="num" placeholder="숫자를 입력하세요"/> <br/>
    {{ num | money | won }}
  </div>
</template>
<script>
    export default {
        name: 'TextFilterTest',
        data() {
            return { num: 100 }
        },
        filters: {
            money: function (value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    }
</script>
