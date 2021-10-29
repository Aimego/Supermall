<template>
	
		<div class="Goods">
				<GoodsItem v-for="(item,index) in GoodsList" :key="index" :GoodsItem="item" class="GoodsItem"></GoodsItem>
		</div>
	
	
</template>

<script>
	
	import GoodsItem from './GoodsItem.vue'
	export default{
		components:{
			GoodsItem
		},
		props:{
			GoodsList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		
	}
</script>

<style scoped="scoped">
	.Goods{
		width: 100%;
		/* display: flex; */
		flex-flow: row wrap;
		background-color: #F8F8FF;
		/* border: 1px solid lightgray;
		border-right: none;
		border-bottom: none; */
		-moz-column-count:4; /* Firefox */
		  -webkit-column-count:4; /* Safari 和 Chrome */
		  column-count:2; /* 分多少列 */
		  -moz-column-gap: 1em;
		-webkit-column-gap: 1em;
		column-gap: 1em;
	}
	.GoodsItem{
		/* flex: 47%; */
		/* border: 1px solid red; */
	}
</style>
