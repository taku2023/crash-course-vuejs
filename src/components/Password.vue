<template>
  <label class="is-error" v-show="!valid"
    >contains alphabets and digits, 6 or more characters</label
  >
  <input type="password" v-model="password" />
</template>

<script setup lang="ts">
import { Password } from "@/models/password";
import { ref, computed } from "vue";
const password = ref<string>("");

const valid = computed(() => {
  return new Password(password.value);
});
</script>

<style scoped>
.is-error {
  color: red;
}
</style>
