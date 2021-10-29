<template>
	<div id="orlist">
		<div>
			<span class="store">
				<span><img src="../../../assets/img/icon/mall.png" alt=""></span>
				<span>Aimego官方旗舰店</span>
			</span>
		</div>
		
		<div class="goodsMsg" v-for="(item,index) in dataList" :key="index">
			<span class="goodsImg"><img :src="item.img" alt=""></span>
			<span class="tit">{{item.title}}</span>
			<span class="price">
				<span>{{item.price}}</span>
				<span>x{{item.number}}</span>
			</span>
		</div>
		
		<div class="PriceDetail">
			<div>
				<span class="text">商品总价</span>
				<span class="pri">￥{{ListPrice}}</span>
			</div>
			<div>
				<span class="text">运费</span>
				<span class="pri">+￥{{freight}}</span>
			</div>
			
		</div>
		<div class="SumPri">
			
			<span class="sum">
				<span class="number">共{{dataList.length}}件</span>
				<span class="text">小计:</span>
				<span class="toprice2">{{GoodPriceShow.toPrice2}}</span>
				<span class="outprice2">{{GoodPriceShow.outPrice2}}</span>
				</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'orderList',
		data(){
			return{
				freight:15
			}
		},
		computed:{
			totalPrice(){
				return (parseFloat(this.ListPrice) + this.freight).toFixed(2)
			},
			GoodPriceShow(){
				let index = this.totalPrice.indexOf('.')
				let toPrice2 = this.totalPrice.slice(0,index+1)
				let outPrice2 = this.totalPrice.slice(index+1,9)
				return {toPrice2,outPrice2}
			}
		},
		props:{
			dataList:{
				type:Array,
				default(){
					return []
				}
			},
			ListPrice:{
				type:String,
				default:''
			}
		}
	}
</script>

<style scoped="scoped">
	#orlist{
		background-color: white;
		margin-top: 10px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		padding: 0px 8px 40px;
		position: relative;
	}
	.store{
		display: flex;
		align-items: center;
		margin: 10px 0px;
	}
	.store span:nth-child(2){
		position: relative;
	}
	.store span:nth-child(2):after{
		content: '';
		display: inline-block;
		width: 25px;
		height: 25px;
		top: 50%;
		transform: translateY(-50%);
		background: url(../../../assets/img/icon/arrow2.png) no-repeat center;
		background-size: 25px;
		position: absolute;
	}
	.goodsMsg{
		margin-bottom: 20px;
		display: flex;
		
	}
	.goodsMsg .goodsImg{
		flex: 35%;
		height: 80px;
		margin-right: 10px;
		border-radius: 5px;
		overflow: hidden;
	}
	.goodsMsg span img{
		max-width: 100%;
		/* max-height: 100%; */
	}
	.goodsMsg .tit{
		/* 关于css控制行数问题，如果盒子的高度不是由盒子内容文本来决定的，那么行数显示就会出错 */
		flex: 45%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 100%;
		font-size: 16px;
		color: #000000;
		font-weight: 500;
		line-height: 22px;
		/* display: flex; */
		/* flex-direction: column; */
	}
	.goodsMsg .price{
		font-size: 12px;
		flex: 20%;
		display: flex;
		flex-direction: column;
		text-align: right;
		color: #000;
	}
	.goodsMsg .price span:nth-child(2){
		margin-top: 5px;
		color: #838383;
	}
	.PriceDetail{
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		
	}
	.PriceDetail div{
		margin: 5px 0px;
		color: #000000;
		font-size: 14px;
		font-weight: bold;
		
		display: flex;
		justify-content: space-between;
		text-align: right;
	}
	.PriceDetail div .text{
		flex: 30%;
	}
	.PriceDetail div .pri{
		flex: 70%;
	}
	.SumPri{
		text-align: right;
		position: absolute;
		bottom: 5px;
		right: 5px;
	}
	.SumPri .number{
		font-size: 14px;
		color: #838383;
		position: absolute;
		bottom: 0;
		left: -50px;
	}
	.SumPri .sum{
		position: relative;
	}
	.SumPri .sum .text{
		color: #000000;
		font-size: 14px;
		
	}
	.sum .toprice2{
		color: #fb8b21;
		font-size: 18px;
		font-weight: 400;
	}
	.sum .toprice2::before{
		color: #fb8b21;
		content: '￥';
		font-size: 12px;
	}
	.sum .outprice2{
		color: #fb8b21;
		font-size: 12px;
		font-weight: 400;
	}
</style>
