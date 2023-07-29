<template>
  <p class="title is-center">Login</p>
  <form class="form">
    <label class="is-text-left">email</label>
    <EmailAddress
      v-model:email="form.email"
      @update:validate="
        (isValid) => {
          form.emailIsValid = isValid;
        }
      "
    />
    <label class="is-text-left">password</label>
    <Password
      v-model:password="form.password"
      @update:validate="
        (isValid) => {
          form.passwordIsValid = isValid;
        }
      "
    />
    <button class="button" :disabled="!enabled">Login</button>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import EmailAddress from "@/components/EmailAddress.vue";
import Password from "@/components/Password.vue";

const form = ref({
  email: "",
  password: "",
  emailIsValid: false,
  passwordIsValid: false,
});

const enabled = computed(() => {
  return form.value.emailIsValid && form.value.passwordIsValid;
});
</script>
<style scoped>
.title {
  font-size: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
}

.is-text-left {
  text-align: left;
}
</style>
