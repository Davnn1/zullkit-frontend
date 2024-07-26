<script setup>
import ItemCard from "@/components/card/ItemCard.vue";
import {ref} from "vue";

const items = ref([
	{
		id: 1,
		title: "Mobile UI Kit",
		subTitle: "Mobile UI Kit",
		image: "src/assets/img/items-1.jpg",
	},
	{
		id: 2,
		title: "Online Doctor Consultation",
		subTitle: "Website UI Kit",
		image: "src/assets/img/items-2.jpg",
	},
	{
		id: 3,
		title: "Banking Crypto",
		subTitle: "Mobile UI Kit",
		image: "src/assets/img/items-3.jpg",
	},
]);
</script>
<template>
	<div class="container px-4 mx-auto my-16 md:px-12">
		<h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
		<div class="flex flex-wrap -mx-1 lg:-mx-4">
			<ItemCard v-for="item in items" :key="item.id"  :title="item.title" :image="item.image" :sub-title="item.subTitle"/>
		</div>
	</div>
</template>
