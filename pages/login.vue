<template>
  <div class="login-container">
    <h1 class="login-header">Hello, sign in using your crypto wallet</h1>
    <div class="account-copy expert">
      <p>Expert Account</p>
      <span>{{ address.expert }}</span>
      <i class="fa-regular fa-copy" @click="copy('expert')"></i>
    </div>
    <div class="account-copy">
      <p>Non-expert Account</p>
      <span>{{ address.regular }}</span>
      <i class="fa-regular fa-copy" @click="copy('regular')"></i>
    </div>
    <nuxt-link to="/faq#logging-in" class="account-link">Need help with logging in?</nuxt-link>
    <span class="form-message error" v-if="form.error && !form.loading">{{ form.error }}</span>
    <button
      :class="form.loading ? 'auth-btn auth-btn-disabled' : 'auth-btn'"
      :disabled="form.loading"
      @click="login"
    >
      <span v-if="!form.loading">Authenticate</span>
      <HalfCircleSpinner v-if="form.loading" color=#dfeed8 :size=22 class="formBtnSpinner" />
    </button>
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

  .auth-btn-disabled {
    cursor: default;
  }
  .auth-btn-disabled:hover::before {
    content: none;
  }
</style>


<script setup lang="ts">
import { reactive, watch } from 'vue';
import { getLoginResponse } from '~/utils/login';
import { getAddresses } from '~/utils/addresses';
import { HalfCircleSpinner } from 'epic-spinners';

const form = reactive({
  error: '',
  loading: false,
});

const address = reactive({
  regular: '',
  expert: ''
});

const fetchAddresses = async () => {
  const { result, loading } = await getAddresses();

  const displayAddresses = () => {
    if (result.value && result.value.addresses.status) {
      address.regular = result.value.addresses.address.regular;
      address.expert = result.value.addresses.address.expert;
      return;
    }
  };

  if (!loading.value) {
    displayAddresses();
  } else {
    watch(result, () => {
     displayAddresses();
    }, { deep: true });
  }
};

fetchAddresses();

const copy = (type:'expert'|'regular') => {
  navigator.clipboard.writeText(
    type === 'expert' ? address.expert : address.regular
  );
};

const login = async () => {
  if (form.loading) return;
  form.error = '';
  form.loading = true;

  const { result, loading, error } = await getLoginResponse();

  const displayError = (error:string) => {
    form.loading = false;
    form.error = error;
    return;
  }

  if (typeof error !== 'undefined') {
    displayError(error);
  }

  const verifyLogin = () => {
    if (typeof result.value === 'undefined') {
      return { error: 'Something went wrong! Please, try again later.' };
    } else if (result.value && result.value.login.status !== 200) {
      return { error: result.value.login.msg };
    } else if (result.value && result.value.login.status == 200) {
      return navigateTo('/dashboard');
    }
  };

  const handleErrors = () => {
    const { error } = verifyLogin();
    if (error) {
      displayError(error);
    }
  };

  if (!loading.value) {
    handleErrors();
  } else {
    watch(result, () => {
      handleErrors();
    }, { deep: true });

    const timeOut = setTimeout(() => {
      handleErrors();
      clearTimeout(timeOut);
    }, 10000);
  }
};
</script>
