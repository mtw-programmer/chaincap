<template>
  <header>
    <button class="deposit-funds">Deposit Funds</button>
    <div class="funds">
      <span class="account-amount">128.0000001 ETH</span>
      <div class="benefits">
        <span class="benefits-title">Benefits: </span>
        <span class="green">0.0000006</span>
      </div>
    </div>
    <div class="search">
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
  </header>
</template>

<style lang="scss">
  @import '~/assets/css/variables/main.scss';

  header {
    display: flex;
    padding: 15px 3vw;
    width: 100vw;
    margin-bottom: 30px;
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: auto;
    background: $mainBlack;
    border-radius: 2px;
    cursor: pointer;

    i {
      font-size: 1.1rem;
    }
  }

  .deposit-funds {
    background: $mainRed;
    font-size: 0.9rem;
    width: 120px;
    height: 40px;
  }

  .deposit-funds::before {
    content: none;
  }

  .funds {
    margin: 3px 0 0 25px;
    font-size: 0.8rem;
    text-align: center;

    .account-amount {
      font-size: 0.95rem;
    }
  }

  .benefits {
    margin-top: 5px;
    font-size: 0.6rem;
  }

  .benefits-title {
    color: $mainGray;
  }
</style>
