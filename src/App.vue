<template>
    <div id="app">
        <Navigation></Navigation>
        <transition name="fade">
            <router-view></router-view>
        </transition>
        <div class=background></div>
    </div>
</template>

<script>
    import Navigation from './components/Navigation.vue'

    export default {
        name: 'App',
        components: {
            Navigation
        }
    }
</script>

<style>
    @import url('/fonts/Open-Sans/font.css');

    @keyframes switch-page {
        0% {
            opacity: 0;
            top: 120;
        }
        100% {
            opacity: 1;
            top: 69;
        }
    }

    .fade-enter-active{
        animation: switch-page 0.69s;
    }

    .fade-enter,
    .fade-leave-to {
        margin-top: 120px;
        opacity: 0;
    }

    body {
        margin: 0;
    }

    :root {
        --backgroundDark: rgb(3, 9, 29);
        --background: #0d0b2c;
        --backgroundLight: #10244e;
        --foregroundDark: #21758a;
        --foreground: #a5d0e9;
        --font: whitesmoke;
        /* The above is(will be) customizable*/
        --error: #FF0018;
        --warn: #FFFF41;
        --info: #0000F9;
        --success: #008018;
        /* The lgbt flag makers have great colour schemes */
    }

    @-webkit-keyframes background {
        0% {
            background-position: 50% 0%
        }

        50% {
            background-position: 51% 100%
        }

        100% {
            background-position: 50% 0%
        }
    }

    @-moz-keyframes background {
        0% {
            background-position: 50% 0%
        }

        50% {
            background-position: 51% 100%
        }

        100% {
            background-position: 50% 0%
        }
    }

    @-o-keyframes background {
        0% {
            background-position: 50% 0%
        }

        50% {
            background-position: 51% 100%
        }

        100% {
            background-position: 50% 0%
        }
    }

    @keyframes background {
        0% {
            background-position: 50% 0%
        }

        50% {
            background-position: 51% 100%
        }

        100% {
            background-position: 50% 0%
        }
    }

    .background {
        background: linear-gradient(180deg, var(--backgroundDark) 86%, var(--foregroundDark) 105%);
        background-size: 105% 105%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: -100;
        -webkit-animation: background 10s ease infinite;
        -moz-animation: background 10s ease infinite;
        -o-animation: background 10s ease infinite;
        animation: background 10s ease infinite;
    }

    #app {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
    }

    * {
        color: var(--font)
    }
</style>