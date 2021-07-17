<template>
    <div class="profile-card" :class="{ smallcard : (type !== 'card')}">
        <div class="profile-header">
            <img class="profile-pic" src="../assets/testpfp.png" alt="" :class="{ smallicon : (type !== 'card')}">
            <div class="profile-name" :class="{ smallname : (type !== 'card')}">
                {{ name }}
                <div style="display: inline-block" v-if="type == 'card'">
                    <Label v-bind:key="role.id" v-for="role in roles" :color="role.color">{{role.name}}</Label>
                </div>
            </div>
        </div>
        <p class="description" v-if="type == 'card'">{{description}}</p>
    </div>
</template>

<script lang="ts">
    import Label from './Label.vue'
    export default {
        props: {
            /* One of user or id. If id is passed, user profile will be fetched.*/
            user: Object,
            id: String,
            /* card/label */
            type: {
                type: String,
                default: 'label'
            }
        },
        components: {
            Label
        },
        name: 'ProfileCard',
        data: function () {
            return {
                name: '@LoremIpsum',
                description: `imposter amoung us`,
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
        width: 300px;
        max-width: 490px;
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
        overflow-wrap: break-word;
        width: 100%;
    }

    h1 {
        margin: 0;
    }
    .smallicon {
        width: 48px;
        border-radius: 8px;
    }
    .smallname {
        font-size: large;
        white-space: nowrap;
        margin-left: 2px;
    }
    .smallcard {
        padding: 5px;
        width: min-content;
        white-space: nowrap;
    }

</style>