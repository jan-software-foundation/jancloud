<template>
    <div class="login">
        <div class="container">
            <div>
                <h1 style="padding: 10px; color: var(--font); text-align: center">Sign up for JanCloud</h1>
            </div>
        </div>

        <div class="container">
            <label style="color: red">{{usererr}}</label> <!-- TODO: Style this -->
            <Input
                name="Username"
                v-model="username"
                placeholder="You will be using this to log on."
                label></Input>
            <label style="color: red">{{passerr}}</label> <!-- TODO: Also style this -->
            <Input
                name="Password"
                v-model="password"
                placeholder="Enter your password" 
                label></Input>

            <Button type="submit" style="" :click-async="register">
                <img alt="" src="/graphics/login.svg" class=icon />
                <a style="padding-left: 10px;" class='icon'>Sign up</a>
            </Button>
        </div>
    </div>
</template>

<script>
    import Input from './components/Input.vue'
    import Button from './components/Button.vue'

    export default {
        components: {
            Input,
            Button
        },
        name: 'Signup',
        data: function() {
            return {
                username: '',
                password: '',
                userregex: /[A-z0-9_-]{2,32}/,
                passregex: /(.){8,128}/,
                usererr: '',
                passerr: ''
            }
        },
        watch: {
            username: 'validate_username',
            password: 'validate_password'
        },
        methods: {
            register() {},
            validate_username() {
                if(this.username.length <= 2 || this.username.length > 32) {
                    this.usererr = 'Username length should be inbetween 2 and 32.'
                }
                else if(!(/[A-z0-9_-]{2,32}/.test(this.username) && this.username.match(/[A-z0-9_-]{2,32}/)[0].length == this.username.length)) {
                    this.usererr = 'Username should be a combination of letters, numbers, underscores and hythens.'
                }
                else this.usererr = ''
            },
            validate_password() {
                if(this.password.length <= 8 || this.password.length > 128) {
                    this.passerr = 'Password length should be inbetween 8 and 128.'
                }
                else this.passerr = ''
                
            }
        }
    }
</script>

<style scoped>
    .icon {
        vertical-align: middle;
        display: inline-block;
    }

    .container+.container {
        margin-top: 25px;
    }

    h1 {
        margin: 0;
    }

    .login {
        max-width: 469px;
        width: 90%;
        margin: auto;
        margin-top: 69px;
        top: 100%;
    }


    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }

        .switchbtn {
            width: 100%;
        }
    }
</style>