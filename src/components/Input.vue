<template>
    <div class="input">
        <label 
            v-if="label"
            class="label">
                {{name}}
        </label>
        <input
            type="text"
            autocomplete="off"
            :placeholder="placeholder || `Enter ${name}`"
            :required="required"
            :id="id || name.toLowerCase()"
            v:value="value"
            v-on:input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
    export default {
        name: "Input",
        props: {
            name: String,
            id: String,
            placeholder: String,
            label: Boolean,
            required: Boolean,
            value: String,
        },
        methods: {
        }
    }
</script>

<style scoped>
    .label {
        text-align: left;
        margin-left: 15px;
        font-size: small;
        color: gray;
        font-family: 'Open Sans', sans-serif;
        ;
    }

    input {
        width: calc(100% - 20px);
        margin-left: 10px;
        padding: 12px 20px;
        display: inline-block;
        border: 1px solid var(--backgroundDark);
        background-color: var(--backgroundLight);
        border-radius: 10px;
        box-sizing: border-box;
        transition-duration: 0.1s;
        margin-top: 5px;
        margin-bottom: 10px;
        outline: none;
    }

    /*
input:focus {
  
}
*/
</style>