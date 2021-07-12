<template>
    <button class="button" @click="onclick">
        <b>
            <slot></slot>
        </b>
        <!--TODO: Loading animation looks like minecraft art-->
        <!--TODO: Make this loading thing a component -->
        <div class="lds-spinner" v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </button>
</template>

<script>
    export default {
        name: "Button",
        data: function () {
            return {
                loading: false
            }
        },
        props: {
            /** If an async function is to be assigned to the button, use this attr
             * A loading animation will show and will stop once a return value is received
             */
            clickAsync: Function
        },
        methods: {
            async onclick() {
                if (this.clickAsync) {
                    this.loading = true
                    await this.clickAsync()
                    this.loading = false
                }
            }
        }
    }
</script>

<style scoped>
    .button {
        background-color: var(--background);
        color: var(--font);
        padding: 14px 20px;
        border: none;
        cursor: pointer;
        transition-duration: 100ms;
        text-transform: uppercase;
        font-size: initial;
        border-radius: 10px;
        margin: 8px;
        width: 50%;
        margin-left: 25%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button:hover {
        filter: brightness(1.5);
    }

    .lds-spinner {
        color: official;
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        transform: scale(25%) translateZ(1px);
    }

    .lds-spinner div {
        transform-origin: 40px 40px;
        animation: lds-spinner 1.2s linear infinite;
    }

    .lds-spinner div:after {
        content: " ";
        display: block;
        position: absolute;
        top: 3px;
        left: 37px;
        width: 6px;
        height: 18px;
        border-radius: 20%;
        background: #fff;
    }

    .lds-spinner div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
    }

    .lds-spinner div:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
    }

    .lds-spinner div:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
    }

    .lds-spinner div:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
    }

    .lds-spinner div:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
    }

    .lds-spinner div:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
    }

    .lds-spinner div:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
    }

    .lds-spinner div:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
    }

    .lds-spinner div:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
    }

    .lds-spinner div:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
    }

    .lds-spinner div:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
    }

    .lds-spinner div:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
    }

    @keyframes lds-spinner {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
</style>