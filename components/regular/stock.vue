<template>
  <div class="stock">
    <img :src="props.img" :alt="props.title">
    <div class="name-change">
      <h3 class="name">
        {{ props.title.length > 10
          ? props.title.substr(0, 7) + '...'
          : props.title }}
      </h3>
      <span :class="{
        'percent-change': true,
        'red': props.change[0] === '-',
        'green': props.change[0] === '+'
      }">{{ props.change }}</span>
    </div>
    <div class="buy-container">
      <h3 class="buy-price">{{ props.buy }}</h3>
      <span class="buy-text gray">Buy</span>
    </div>
    <div class="sell-container">
      <h3 class="sell-price">{{ props.sell }}</h3>
      <span class="sell-text gray">Sell</span>
    </div>
    <div class="mark-favourite">
      <i :class="{
        'fa-star': true,
        'fa-regular': !props.favourite,
        'fa-solid': props.favourite,
      }"></i>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~/assets/css/variables/main.scss';

  a::before {
    content: none;
  }

  .stock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto auto 2px auto;
    padding: 0 12px;
    background: $mainBlack;
    width: 97vw;
    height: 60px;

    img {
      width: 40px;
      height: 45px;
    }

    .name-change {
      margin-left: -15px;
    }

    .percent-change, .buy-text, .sell-text {
      display: block;
      margin-top: 3px;
      font-size: 10px;
      text-align: center;
    }

    .name-change, .buy-container, .sell-container, .mark-favourite {
      height: 45px;
      text-align: center;
    }

    .name, .buy-price, .sell-price {
      font-size: 12px;
      font-weight: normal;
      margin-top: 7px;
    }

    .mark-favourite {
      display: flex;
      font-size: 20px;
      align-items: center;
      cursor: pointer;

      .fa-solid {
        color: #ffff00;
      }
    }
  }
</style>

<script setup lang="ts">
  const props = defineProps(['img', 'title', 'change', 'buy', 'sell', 'favourite']);
</script>