<script setup>
import ItemCard from "@/components/card/ItemCard.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const items = ref([]);
const $route = useRoute();
const categoryName = ref("");

async function getItemsData() {
  try {
    const response = await axios.get('https://zullkit-backend-87125781cc8c.herokuapp.com/api/categories?id=' + $route.params.id +'&show_product=1');
    categoryName.value = response.data.data.name
    items.value = response.data.data.products;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

onMounted(() => {
  getItemsData();
});
</script>
<template>
	<div class="container px-4 mx-auto my-16 md:px-12">
		<h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ categoryName }}</h2>
		<div class="flex flex-wrap -mx-1 lg:-mx-4">
			<ItemCard v-for="item in items" :key="item.id"  v-bind="item"/>
		</div>
	</div>
</template>
