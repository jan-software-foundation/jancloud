<template>
    <div class="profile">
        <profile-card></profile-card>
        <div style="">
            <Button>Edit profile</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import Button from './components/Button.vue'
    import ProfileCard from './components/ProfileCard.vue'
    export default {
        components: {
            Button,
            ProfileCard
        },
        name: 'Profile',
        data: function () {
            return {
                editing: false
            }
        }
    }
</script>

<style scoped>
    .profile {
        width: 469px;
        margin: auto;
        margin-top: 69px;
        top: 100%;
    }
</style>