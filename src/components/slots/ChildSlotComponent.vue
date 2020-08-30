<template>
  <div class="container">
    <header>
      <slot name="header"><h1>정의 된게 없으면 기본값 표출할래요 🐒</h1></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
  export default {
      name: 'ChildSlotComponent',
  }
</script>
