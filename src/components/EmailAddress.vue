<template>
  <label class="is-error" v-show="!valid">contains only alphabet</label>
  <input v-model="email" placeholder="youremail@gmail.com" type="email" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { EmailAddress } from "@/models/email";
const email = ref<string>("");

const valid = computed(() => {
  return new EmailAddress(email.value).isValid;
});
</script>

<style scoped>
.is-error {
  color: red;
}
</style>
