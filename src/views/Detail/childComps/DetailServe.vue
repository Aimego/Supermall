<template>
	<div class="Serve">
		<div class="title">{{GoodsItem.title}}</div>
		<div class="price">
			<span class="newPrice">{{GoodsItem.newPrice}}</span>
			<span class="oldPrice">{{GoodsItem.oldPrice}}</span>
		</div>
		<div class="columns">
			<span v-for="(item,index) in GoodsItem.columns" :key="index">{{item}}</span>
		</div>
		<div class="Services">
			<div class="Items" v-for="(item,index) in GoodsItem.services" :key="index">
				<img :src="item.icon" alt="">
				<span>{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			GoodsItem:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.Serve{
		/* margin: 10px; */
	}
	.title{
		margin-bottom: 15px;
		font-weight: bold;
		margin: 10px;
	}
	.price{
		position: relative;
		/* margin-bottom: 10px; */
		margin: 10px;
	}
	.newPrice{
		font-size: 20px;
		color: var(--color-tint);
	}
	.oldPrice{
		margin-left: 10px;
		font-size: 14px;
		text-decoration: line-through;
		color: #9b9b9b;
		/* position: relative; */
	}
	.oldPrice:after{
		margin-left:5px ;
		content: '今日特价';
		position: absolute;
		border-radius: 5px;
		background-color: var(--color-tint);
		color: white;
		padding: 2px;
		top: -5px;
		
	}
	.columns{
		padding: 5px;
		font-size: 14px;
		color: #9b9b9b;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		padding-bottom: 15px;
		border-bottom: 1px solid #eee;
		
	}
	.Services{
		padding: 5px;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
		font-weight: bold;
		padding-bottom: 20px;
		border-bottom: 8px solid #eee;
	}
	.Services .Items{
		display: flex;
		height: 10px;
		align-items: center;
	}
	.Items img{
		height: 100%;
	}
</style>
