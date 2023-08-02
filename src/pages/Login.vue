<template>
  <main id="login">
    <p class="title is-text-center">Login</p>
    <form class="form">
      <EmailAddress
        class="field"
        v-model:email="form.email"
        @update:validate="
          (isValid) => {
            form.emailIsValid = isValid;
          }
        "
      />
      <Password
        class="field"
        v-model:password="form.password"
        @update:validate="
          (isValid) => {
            form.passwordIsValid = isValid;
          }
        "
      />
      <p class="is-error">{{ serverError }}</p>
      <button class="button" :disabled="!enabled" @click.prevent="onClickLogin">
        Login
      </button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import EmailAddress from "@/components/EmailAddress.vue";
import Password from "@/components/Password.vue";
import { useRouter } from "vue-router";
import { login } from "@/http/login";

const router = useRouter();

const form = ref({
  email: "",
  password: "",
  emailIsValid: false,
  passwordIsValid: false,
});

const serverError = ref<string | undefined>(undefined);

const enabled = computed(() => {
  return form.value.emailIsValid && form.value.passwordIsValid;
});

const onClickLogin = async (_: MouseEvent) => {
  const { ok, message } = await login({
    email: form.value.email,
    password: form.value.password,
  });
  if (ok) {
    await router.push({ name: "home" });
  } else if (message) {
    serverError.value = message;
  }
};
</script>
<style scoped>
#login {
  max-width: 30rem;
  margin: auto;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.field {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}

.title {
  font-size: 2rem;
}
</style>
