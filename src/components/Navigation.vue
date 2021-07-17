<template>
    <ul class="sidenav">
        <li>
            <router-link to="/home">Home</router-link>
        </li>
        <div style="float:right;">
            <li>
                <router-link to="/login">Login</router-link>
            </li>
            <li>
                <router-link to="/sign-up">Sign Up</router-link>
            </li>
        </div>
    </ul>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
    div li {
         display: inline-grid;
    }

    ul.sidenav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        background: linear-gradient(var(--background), var(--backgroundDark));
        overflow: auto;
        width: 100%;
        height: auto;
        position: relative;
    }

    ul.sidenav li a,
    router-link {
        color: var(--font);
        display: block;
        text-decoration: none;
        float: left;
        padding: 15px;
    }

    .router-link-active {
        background-color: var(--backgroundLight);
        color: var(--background);
    }

    ul.sidenav li a:hover:not(.router-link-active) {
        background-color: var(--foreground);
        color: var(--background);
    }

    @media screen and (max-width: 400px) {
        ul.sidenav li a {
            text-align: center;
            float: none;
        }
    }
</style>