<template>
    <div class="profile-card">
        <div class="profile-header">
            <img class="profile-pic" src="../assets/testpfp.png" alt="">
            <div class="profile-name">
                {{ name }}
                <div style="display: inline-block">
                    <Label v-bind:key="role.id" v-for="role in roles" :color="role.color">{{role.name}}</Label>
                </div>
            </div>
        </div>
        <div class="description">{{description}}</div>
    </div>
</template>

<script lang="ts">
    import Label from './Label.vue'
    export default {
        props: {
            /* One of user or id. If id is passed, user profile will be fetched.*/
            user: Object,
            id: String
        },
        components: {
            Label
        },
        name: 'ProfileCard',
        data: function () {
            return {
                name: 'Lorem Ipsum',
                description: 'among us',
                userid: 'object ojbect',
                roles: [
                    {
                        name: "Admin",
                        color: "red",
                        id: "amoungs"
                    },
                    {
                        name: "Developer",
                        color: "blue",
                        id: "amoung"
                    },
                    {
                        name: "aaaaaa",
                        color: "green",
                        id: "that thing blang b"
                    }
                ]
            }
        },
        async mounted() {
            if(this.id) {
                //TODO: Waiting for backend to be exist
                await fetch('')
            }
            else if(this.user) {
                this.userid = this.user.id
            }
        }
    }
</script>

<style scoped>
    Label + Label {
        margin-left: 2px;
    }

    .profile-pic {
        width: 64px;
        display: inline-block;
        border-radius: 16px;
        vertical-align: top;
    }

    .profile-card {
        width: 90%;
        min-width: 300px;
        max-width: 490px;
        height: 180px;
        padding: 20px;
        text-align: left;
        margin: auto;
        border-radius: 4px;
        background-color: var(--backgroundLight);
    }

    .profile-name {
        vertical-align: top;
        font-size: x-large;
        display: inline-grid;
        margin-left: 10px;
    }

    .description {
        color: grey;
        font-size: 18px;
        text-overflow: ellipsis;
        width: 100%c;
        height: 60px;
    }

    h1 {
        margin: 0;
    }

</style>