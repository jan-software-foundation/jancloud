<template>
    <div class="login">
        <div class="container">
            <div>
                <h1 style="padding: 10px; color: var(--font); text-align: center">Log in to JanCloud</h1>
            </div>
        </div>

        <div class="container">
            <Input name="Username" label></Input>
            <Input name="Password" label></Input>

            <Button type="submit" style="" :click-async="login">
                <img alt="" src="/graphics/login.svg" class=icon />
                <a style="padding-left: 10px;" class='icon'>Login</a>
            </Button>
        </div>
    </div>
</template>

<script lang="ts">
    import Input from './components/Input.vue'
    import Button from './components/Button.vue'
    export default {
        components: {
            Input,
            Button
        },
        name: 'Login',
        methods: {
            async login() {
                //TODO: Waiting for backend api to be finished
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
        width: 90%;
        max-width: 469px;
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