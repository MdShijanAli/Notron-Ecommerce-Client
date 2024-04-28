<script setup>
import AppConfig from "@/layout/AppConfig.vue";
import { useLayout } from "@/layout/composables/layout";
import { useAuthStore } from "@/stores/auth";
import { TOKEN, USER } from "@/utils/constant";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import loginService from "../services/loginService";

const authStore = useAuthStore();
const router = useRouter();
const error = ref("");

const { layoutConfig } = useLayout();
const userName = ref("user");
const password = ref("updateme");
const checked = ref(false);

const logoUrl = computed(() => {
  return "/images/logo-1.png";
});

const submit = async () => {
  try {
    const response = await loginService.userLogin({
      password: password.value,
      username: userName.value,
    });
    console.log("auth response", response);
    if (response?.accessToken) {
      // can not remove token and user from localstorage
      // because we need it to know whether user already login or not when refresh page
      // or when user access application next time, don't need to login anymore
      localStorage.setItem(TOKEN, response?.accessToken || "");
      localStorage.setItem(USER, JSON.stringify(response.user));
      authStore.user = response.user;
      router.push("/");
    }
  } catch (err) {
    error.value = err?.message;
    console.log("Error: ", err);
  }
};

watch(
  () => password.value,
  () => (error.value = "")
);
</script>

<template>
  <div
    class="surface-ground flex items-center justify-center min-h-screen min-w-screen overflow-hidden"
  >
    <div class="flex flex-column items-center justify-center">
      <!-- <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" /> -->
      <div
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(
            180deg,
            var(--primary-color) 10%,
            rgba(33, 150, 243, 0) 30%
          );
        "
      >
        <div
          class="w-full surface-card py-8 px-5 sm:px-8"
          style="border-radius: 53px"
        >
          <div class="mb-5">
            <div class="flex justify-center h-24">
              <img src="/images/logo-1.png" alt="Image" class="mb-3 h-full" />
            </div>
            <div class="text-center">
              <div class="text-900 text-3xl font-medium mb-3">
                Welcome, TAKMIL Dashboard!
              </div>
              <span class="text-600 font-medium">Sign in to continue</span>
            </div>
          </div>

          <form @submit.prevent="submit">
            <label for="email1" class="block text-900 text-xl font-medium mb-2"
              >Username</label
            >
            <InputText
              id="email1"
              type="text"
              placeholder="UserName"
              class="w-full md:w-30rem p-[1rem] border mb-5"
              v-model="userName"
            />

            <label
              for="password1"
              class="block text-900 font-medium text-xl mb-2"
              >Password</label
            >
            <Password
              id="password1"
              v-model="password"
              placeholder="Password"
              :toggleMask="true"
              class="w-full border mb-3"
              inputClass="w-full"
              :inputStyle="{ padding: '1rem' }"
            ></Password>

            <div class="flex items-center justify-content-between mb-5 gap-5">
              <div class="flex items-center">
                <Checkbox
                  v-model="checked"
                  id="rememberme1"
                  binary
                  class="mr-2 border"
                ></Checkbox>
                <label for="rememberme1">Remember me</label>
              </div>
              <a
                class="font-medium no-underline ml-2 text-right cursor-pointer"
                style="color: var(--primary-color)"
                >Forgot password?</a
              >
            </div>
            <p v-if="error" class="text-red-600 mb-5" style="font-size: 14px">
              {{ error }}
            </p>
            <Button
              type="submit"
              label="Sign In"
              class="w-full p-3 text-xl bg-primary"
            ></Button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <AppConfig simple />
</template>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>
