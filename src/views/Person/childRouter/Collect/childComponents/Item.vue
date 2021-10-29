<template>
	<div id="item">
		<div class="goodsItem">
			<div class="left">
				<img :src="ItemData.img" alt="">
			</div>
			<div class="right">
				<span class="tit">{{ItemData.title}}</span>
				<span class="price">
					<span>￥</span>{{priceStyle.priceTop}}<span class="PriceEnd2">{{priceStyle.priceEnd2}}</span>
					<span class="oldPrice">{{ItemData.oldPrice}}</span>
				</span>
				<span class="btn" @click="$router.push(`/detail/${ItemData.id}`)">去购买</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'item',
		computed:{
			priceStyle(){
				let index = this.ItemData.realPrice.indexOf('.')
				let priceEnd2 = this.ItemData.realPrice.slice(index+1,999)
				let priceTop = this.ItemData.realPrice.slice(0,index+1)
				return {priceTop,priceEnd2}
			}
		},
		props:{
			ItemData:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#item{
		margin: 8px 5px 25px;
		
	}
	.goodsItem{
		margin: 5px;
		display: flex;
		
	}
	.goodsItem .left,.right{
		flex: 1;
	}
	.goodsItem .left{
		/* 父盒子设置overflow:hidden 解决图片太大而溢出的问题 */
		height: 110px;
		overflow: hidden;
		
		border-radius: 15px;
		margin-right: 10px;
	}
	.goodsItem .left img{
		/* max-width与max-height 解决父盒子太小而导致图片变形 */
		max-width: 100%;
		
	}
	.goodsItem .right{
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.goodsItem .right .tit{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 14px;
		font-weight: bold;
		line-height: 18px;
		
	}
	.goodsItem .right .price span:nth-child(1){
		font-size: 13px;
	}
	.goodsItem .right .price{
		color: #ff3939;
		font-size: 18px;
		font-weight: 600;
		margin-top: 10px;
	}
	.PriceEnd2{
		font-size: 14px;
	}
	.oldPrice{
		color: #9B9B9B;
		text-decoration: line-through;
		font-size: 12px;
		margin-left: 10px;
	}
	.goodsItem .right .btn{
		position: absolute;
		padding: 6px 20px;
		border-radius: 25px;
		border: 1px solid #fcb681;
		right: 3px;
		bottom: 0px;
		font-size: 14px;
		font-weight: bold;
		color: #fcb681;
	}
</style>
