<script setup>
import Logo from "./Logo.vue";
import NavigationLinks from "./NavigationLinks.vue";
import AuthButton from "@/components/layouts/AuthButton.vue";
import {useUserStore} from "@/stores/user.js";
import {computed, onMounted} from "vue";
import UserInfo from "@/components/layouts/UserInfo.vue";

const userStore = useUserStore()
const user = computed(() => userStore.getUser)
const isLoggedIn = computed(() => userStore.isLoggedIn)

onMounted(() => {
    userStore.fetchUser()
})
</script>

<template>
    <nav
        class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
    >
        <div
            class="container flex flex-wrap items-center justify-between mx-auto my-2"
        >
            <Logo />
            <NavigationLinks />
            <UserInfo v-if="isLoggedIn" :user="user.data" />
            <AuthButton v-else/>
        </div>
    </nav>
</template>
