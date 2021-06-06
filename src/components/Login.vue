<template>
    <div class="login-page">
        <img src="../assets/logo.png" alt="" class="logo">
        <div class="login-form-wrapper">
            <form class="login" @submit.prevent="login">
                <div class="login__title">
                    <span>В</span>
                    <span>Х</span>
                    <span>О</span>
                    <span>Д</span>
                </div>
                <div class="login__item">
                    <label for="email" class="form__label">E-mail</label>
                    <input type="text" class="login__input" id="email" required v-model="email" placeholder="tutor@kiberone-khv.com">
                </div>
                <div class="login__item">
                    <label for="password" class="form__label">Пароль</label>
                    <input type="password" class="login__input" id="password" required v-model="password">
                </div>
                <button type="submit" class="login__submit">Войти</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login: function() {
            let email = this.email
            let password = this.password
            this.$store.dispatch('login', {"password": password,
            "email": email})
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        font-family: Roboto, sans-serif;
    }

    html, body, #app {
        min-height: 100vh;

    }

    body {
        margin: 0;
    }

    .logo {
        display: block;
        margin-bottom: 60px;
    }

    .login-page {
        min-height: 100vh;
        background-color: #3681A0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .login-form-wrapper {
        width: 625px;
        min-height: 395px;
        background-color: #fff;
        border: 3px solid #5D7873;
        filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.25));
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login__title {
       font-size: 72px;
       text-transform: uppercase;
       font-weight: bold;
       text-align: center;
       margin-top: 20px;
       margin-bottom: 25px;
    }

    .login__title span:first-child {
        color: #4DAED1;
    }
    .login__title span:nth-child(2) {
        color: #D7B122;
    }
    .login__title span:nth-child(3) {
        color: #692528;
    }
    .login__title span:last-child {
        color: #295975;
    }

    .login__submit {
        font-size: 24px;
        border: none;
        text-transform: uppercase;
        background-color: #692528;
        width: 224px;
        height: 49px;
        cursor: pointer;
        color: #fff;
        border: 1px solid transparent;
        margin-top: 10px;
        transition: .3s;
    }

    .login__submit:hover {
        background-color: #fff;
        color: #692528;
        border-color: #692528;
    }

    .login__input {
        border: 3px solid #DBC461;
        display: block;
        width: 345px;
        padding: 13px 20px;
        outline: none;
    }

    .login__input:focus {
        filter: drop-shadow(0 0 15px rgba(0,0,0,0.15));
    }

    .login__item {
        margin-bottom: 15px;
    }

    .form__label {
        display: inline-block;
        margin-bottom: 5px;
    }

    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>