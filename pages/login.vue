<template>
  <div class="login-container">
    <h1 class="login-header">Hello, sign in using your crypto wallet</h1>
    <div class="account-copy expert">
      <p>Expert Account</p>
      <span>0x38585389934</span>
      <i class="fa-regular fa-copy"></i>
    </div>
    <div class="account-copy">
      <p>Non-expert Account</p>
      <span>0x38585389934</span>
      <i class="fa-regular fa-copy"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/css/variables/main.scss';
  .login-container {
    text-align: center;
  }
  .login-header {
    margin-top: 27vh;
    margin-bottom: 10vh;
  }

  .account-copy {
    position: relative;
    width: 90%;
    padding: 20px 20px;
    border: 1px solid $mainWhite;
    margin: 5vh auto;
    text-align: left;

    p {
      position: absolute;
      top: 0;
      left: 10px;
      padding: 0 8px;
      transform: translateY(-50%);
      background: $mainBackground;
      text-transform: uppercase;
      font-weight: 400;
    }

    span {
      font-size: 1.2rem;
    }

    .fa-copy {
      position: absolute;
      right: 15px;
      font-size: 1.5rem;
      cursor: pointer;
      transition: .3s all ease;
      color: $mainRed;
    }

    .fa-copy:hover {
      color: $mainWhite;
    }
  }

  .account-copy.expert {
    border: 1px solid $mainRed;

    p {
      color: $mainRed;
    }
  }
</style>
