<template>
  <nav class="nav-container">
    <nuxt-link to="/" :class="{ 'nav-selected': props.active === 'home' }">
      <i class="fa-solid fa-chart-column"></i>
      <span>Invest</span>
    </nuxt-link>
    <nuxt-link to="/wallet" :class="{ 'nav-selected': props.active === 'wallet' }">
      <i class="fa-solid fa-wallet"></i>
      <span>My Wallet</span>
    </nuxt-link>
    <nuxt-link to="/settings" :class="{ 'nav-selected': props.active === 'settings' }">
      <i class="fa-solid fa-gear"></i>
      <span>Settings</span>
    </nuxt-link>
  </nav>
</template>

<style lang="scss">
  @import '~/assets/css/variables/main.scss';

  .nav-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 70px;
    background: $mainBlack;
    bottom: 0;
    padding: 0 2%;

    a {
      text-align: center;
    }

    .nav-selected {
      color: $mainRed;
    }

    i {
      font-size: 1.7rem;
      text-align: center;
    }

    span {
      display: block;
      margin-top: 5px;
      font-size: 0.7rem;
    }
  }
</style>

<script setup lang="ts">
  const props = defineProps(['active']);
</script>