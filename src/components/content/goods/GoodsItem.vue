<template>
	<div class="GoodsItem" @click="itemClick(GoodsItem.iid)">
		<!-- :width="GoodsItem.show.w" :height="GoodsItem.show.h" -->
		<!-- <img :src="GoodsItem.show.img"  alt="" @load="loadImgReFresh"> -->
		<!-- 使用vue-lazyload图片懒加载时，:scr要变成v-lazy -->
		<img v-lazy="GoodsItem.show.img"  alt="" @load="loadImgReFresh">
			<div class="ItemTitle">{{GoodsItem.title}}</div>
			<div class="prices">
				<span class="newPrice">{{GoodsItem.orgPrice}}</span>
				<span class="oldPrice">￥{{GoodsItem.price}}</span>
			</div>
			<div class="icon"><a href="#">Aimego旗舰店</a></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				id:1
			}
		},
		props:{
			GoodsItem:{
				type:Object,
				default:{}
			}
		},
		methods:{
			loadImgReFresh(){
				this.$bus.$emit('goodItemMethod')
			},
			itemClick(id){
				this.$router.push('/detail/'+id)
			}
		}
	}
</script>

<style scoped="scoped">
	.GoodsItem{
		/* border-right: 1px solid lightgray;
		border-bottom: 1px solid lightgray; */
		color:#9b9b9b ;
		font-size: 14px;
		/* margin: 5px 1%; */
		margin-bottom: 10px;
		background-color: white;
		
		padding: 1em;
		 margin: 0 0 1em 0;
		 -moz-page-break-inside: avoid;
		 -webkit-column-break-inside: avoid;
		 break-inside: avoid;
	}
	.GoodsItem .ItemTitle{
		overflow:hidden;
		 text-overflow:ellipsis;
		 display:-webkit-box;
		 -webkit-line-clamp:2;
		 -webkit-box-orient:vertical;
	}
	.prices{
		margin: 5px 0px;
	}
	.prices .newPrice{
		font-size: 20px;
		color:#fd3f31;
		margin-right: 10px;
	}
	.prices .oldPrice{
		text-decoration: line-through;
	}
	.GoodsItem img{
		border-radius: 5px;
		width: 100%;
		height: 70%;
	}
	.icon{
		display: flex;
		align-items: center;
		font-size: 12px;
		/* border: 1px solid red; */
	}
	.icon:before{
		display: block;
		content: '';
		width: 12px;
		height: 12px;
		background: url(~assets/img/icon/mall2.png) no-repeat left center;
		background-size: 12px;
		margin-right: 7px;
	}
</style>
