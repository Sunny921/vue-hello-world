<template>
  <h3> {{ $route.params.goodsId }} {{ dynamicContent }} </h3>
</template>
<script>
    export default {
        name : 'Product',
        props : [ 'dynamicContent' ],
    }
</script>
