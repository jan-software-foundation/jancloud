<template>
  <div class="input">
    <label v-if="label" class="label">{{name}}</label>
    <input type="text" :placeholder="placeholder || `Enter ${name}`" :required="required" :id="id || name.toLowerCase()">
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
    required: Boolean
  },
  mounted() {
  }
}
</script>

<style scoped>

.label{
  text-align: left;
  margin-left: 15px;
  font-size: small;
  color: gray;
  font-family: Calibri,serif;
}

input {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 0px solid var(--backgroundDark);
  background-color: var(--backgroundLight);
  box-sizing: border-box;
  transition-duration: 0.1s;
}
input:hover{
  background-color: var(--foregroundDark);
}

input:focus{
  background-image: linear-gradient(var(--foregroundDark),var(--foreground));
  color: var(--background);
  outline: none;
}
</style>