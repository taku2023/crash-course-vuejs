<template>
  <label class="is-error" v-show="!valid">contains only alphabet</label>
  <input v-model="email" placeholder="youremail@gmail.com" type="email" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { EmailAddress } from "@/models/email";

const props = defineProps({
  email: {
    type: String,
    required: true,
  },
});

const email = ref<string>(props.email);

const emits = defineEmits<{
  "update:email": [email: string];
  "update:validate": [isValid: boolean];
}>();

const valid = computed(() => {
  const isValid = new EmailAddress(email.value).isValid;
  emits("update:email", email.value);
  emits("update:validate", isValid);
  return isValid;
});
</script>

<style scoped>
.is-error {
  color: red;
}
</style>
