<template>
  <div>
    <label class="is-text-left">password</label>
    <input type="password" v-model="password" class="input" />
    <label class="is-error is-text-left" v-show="!valid"
      >contains alphabets and digits, 6 or more characters</label
    >
  </div>
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
