<script setup>
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import axios from "axios";
import {useUserStore} from "@/stores/user.js";
import {useRouter} from "vue-router";

const props = defineProps({
    user: Object
})

const userStore = useUserStore()

const $router = useRouter();

async function logout() {
    try {
        localStorage.removeItem("access_token");
        localStorage.removeItem("token_type");
        await userStore.fetchUser();
        await $router.push("/");
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

</script>

<template>
    <div class="flex items-center md:order-2">
        <Menu as="div" class="relative inline-block text-left">
            <div class="flex items-center"> <!-- Ubah dari "contents" menjadi "flex items-center" -->
                <a class="mr-2 text-sm font-regular">Halo, {{ user.name }}</a>
                <MenuButton
                    class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false">
                    <span class="sr-only">Open user menu</span>
                    <img
                        class="w-8 h-8 rounded-full"
                        :src="user.profile_photo_url"
                        alt="user photo"
                    />
                </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">{{ user.name }}</span>
                        <span
                            class="block text-sm text-gray-500 truncate font-regular dark:text-gray-400"
                        >{{ user.email }}</span>
                    </div>
                    <div class="py-1">
                        <MenuItem v-slot="{ active }">
                            <a href="#"
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Subscriptions</a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <a href="#"
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Setting</a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <a @click="logout"
                               :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Log out</a>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
        <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
        >
            <span class="sr-only">Open main menu</span>
            <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                />
            </svg>
            <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    </div>
</template>
