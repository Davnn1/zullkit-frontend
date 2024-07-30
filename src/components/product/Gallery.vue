<script setup>
import { ref, toRef, watch } from "vue";

const props = defineProps({
    thumbnails: String,
    galleries: Array
});

const thumbnail = ref(props.thumbnails);

function changeThumbnail(image) {
    thumbnail.value = image;
}
</script>

<template>
    <section id="gallery">
        <img :src="thumbnail" alt="" class="w-full mt-6 rounded-2xl">
        <div class="grid grid-cols-4 gap-4 mt-4">
            <template v-for="gallery in galleries" :key="gallery.id">
                <div @click="changeThumbnail(gallery.url)" class="overflow-hidden cursor-pointer rounded-2xl"   :class="{ 'ring-2 ring-indigo-500' : thumbnail === gallery.url}">
                    <img :src="gallery.url" class="w-full h-full" alt="">
                </div>
            </template>
        </div>
    </section>
</template>