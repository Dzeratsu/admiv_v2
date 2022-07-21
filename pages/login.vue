<template>
  <div class="auth-form">
    <h2 class="title">
      Войти в личный кабинет
    </h2>
    <div class="form">
      <div><input v-model="auth.login" placeholder="Email" type="email"  ></div>
      <div class="password"><input v-model="auth.password" placeholder="Пароль" :type="showPassword" >
      <img src="@/assets/icons/eye.svg" alt="eye" width="19px" class="show" @click="showPasswordHandler">
      </div>
      </div>
    <div class="login">
    <button @click="signIn">
      Войти
    </button>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import { Login } from '~/Interface/login/Login'

@Component({
  name: 'login'
})
export default class login extends Vue {
  private auth: Login = { login: '', password: '' }
  private showPassword: string = 'password'

  private showPasswordHandler () {
    this.showPassword = this.showPassword === 'password' ? 'text' : 'password'
  }

  private async signIn () {
    const resp = await this.$auth.loginWith('local', {
      data: this.auth
    })
    if (resp) {
      if (resp.data.error) {
        alert('123')
      } else {
        await this.$router.push({ path: '/requests' })
      }
    }
  }
}
</script>

<style>

</style>
