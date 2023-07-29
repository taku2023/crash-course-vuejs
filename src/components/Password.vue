<template>
  <label class="is-error" v-show="!valid"
    >contains alphabets and digits, 6 or more characters</label
  >
  <input type="password" v-model="password" />
</template>

<script setup lang="ts">
import { Password } from "@/models/password";
import { ref, computed } from "vue";

const props = defineProps({
  password: {
    type: String,
    required: true,
  },
});

const emits = defineEmits<{
  "update:password": [password: string];
  "update:validate": [isValid: boolean];
}>();

const password = ref<string>(props.password);

const valid = computed(() => {
  const isValid = new Password(password.value).isValid;
  emits("update:password", password.value);
  emits("update:validate", isValid);
  return isValid;
});
</script>

<style scoped>
.is-error {
  color: red;
}
</style>
