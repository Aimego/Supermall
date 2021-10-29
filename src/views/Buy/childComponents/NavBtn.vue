<template>
	<div id="nav">
		<div class="Btn">
			<span class="showPrice">
				<span class="num">共{{ListLength}}件</span>
				<span class="text">合计:<span class="toprice2">{{GoodPriceShow.toPrice2}}</span><span class="outprice2">{{GoodPriceShow.outPrice2}}</span></span>
			</span>
			<span class="giveOrder">提交订单</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'NavBtn',
		data(){
			return{
				freight:15
			}
		},
		computed:{
			GoodPriceShow(){
				let index = this.TotalPrice.indexOf('.')
				let toPrice2 =  this.TotalPrice.slice(0,index+1)
				let outPrice2 = this.TotalPrice.slice(index+1,9)
				return {toPrice2,outPrice2}
			},
			TotalPrice(){
				return (parseFloat(this.OrderPrice) + this.freight).toFixed(2)
			}
		},
		props:{
			ListLength:{
				type:Number,
				default:''
			},
			OrderPrice:{
				type:String,
				default:''
			}
		}
	}
</script>

<style scoped="scoped">
	#nav{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: white;
	}
	.Btn{
		display: flex;
		align-items: center;
		padding:8px;
		border: 1px solid white;
	}
	.Btn .showPrice{
		text-align: right;
		flex: 75%;
	}
	.Btn .showPrice .num{
		font-size: 12px;
		color: #838383;
		margin-right: 10px;
	}
	.Btn .showPrice .text{
		font-size: 14px;
		color: #000000;
	}
	.toprice2{
		font-size: 18px;
		color: #fb7922;
	}
	.toprice2::before{
		content: '￥';
		font-size: 12px;
	}
	.outprice2{
		color: #fb7922;
	}
	.Btn .giveOrder{
		flex: 25%;
		text-align: center;
		border: 1px solid red;
		padding: 8px;
		background-color: #fa6a01;
		color: white;
		border-radius: 20px;
		font-size: 14px;
		margin: 0px 10px;
	}
</style>
