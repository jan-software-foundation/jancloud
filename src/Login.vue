<template>
  <div class="login">
    <div class="container" style="background-image: linear-gradient(var(--foreground),var(--foregroundDark))">
        <h1 style="padding: 10px;color:var(--background)">Log in to JanCloud</h1>
    </div>

    <div class="container">
      <Input name="Username" label></Input>
      <Input name="Password" label></Input>

      <button type="submit">Login</button>
      <button type="button" class="switchbtn">Sign up</button>
    </div>
  </div>
</template>

<script lang="ts">
import Input from './components/Input.vue'
//TODO: Button Component
export default {
    components: {
        Input
  },
  name: 'Login',
  methods: {
  }
}
</script>

<style scoped>

.login {
  width: 469px;
  margin: auto;
  background-color: var(--backgroundLight);
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