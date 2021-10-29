<template>
	<div id="itemlist">
		<Item  :ItemData="item" v-for="(item,index) in $store.state.PersonUser.collect" :key="index"></Item>
	</div>
</template>

<script>
	import Item from './Item.vue'
	export default{
		name:'ItemList',
		props:{
			// ListData:{
			// 	type:Array,
			// 	default(){
			// 		return []
			// 	}
			// }
		},
		components:{
			Item
		}
	}
</script>

<style scoped="scoped">
	#itemlist{
		border-top:8px solid #eee;
	}
</style>
