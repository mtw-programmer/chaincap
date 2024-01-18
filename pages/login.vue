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
    <nuxt-link to="/faq#logging-in" class="account-link">Need help with logging in?</nuxt-link>
    <span class="form-message error" v-if="message.error">{{ message.error }}</span>
    <button class="auth-btn" @click="login">Authenticate</button>
    <footer>
      <span>ChainCAP Ventures {{ new Date().getFullYear() }} &copy; Application in development mode only.</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/css/variables/main.scss';
  .login-container .login-header, .account-copy {
    text-align: center;
  }
  .login-header {
    margin-top: 23vh;
    margin-bottom: 7vh;
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

  .account-link {
    text-align: left;
    margin: 0;
    left: 5%;
  }

  .auth-btn {
    margin: 0 auto;
    padding: 15px 20px;
    margin-top: 5vh;
  }

  .form-message {
    display: block;
    margin: 5vh auto 2vh auto;
    text-align: center;
  }
</style>


<script setup lang="ts">
import { reactive } from 'vue';
import { useLogin } from '~/utils/login';

const message = reactive({
  error: '',
});

const login = async () => {
  message.error = '';
  const response = await useLogin();
  if (typeof response !== 'undefined') {
    const { error } = response;

    if (error) {
      message.error = error;
    }
  }
};
</script>
