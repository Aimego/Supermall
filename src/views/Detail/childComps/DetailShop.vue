<template>
	<div class="Shop">
		<div class="shopMsg">
			<img :src="ShopItem.shopLogo" alt="">
			<span>{{ShopItem.name}}</span>
		</div>
			<div class="MyShop">
				<div class="left">
					<div>
						<span>{{sells}}万</span>
						<span>总销量</span>
					</div>
					<div>
						<span>{{ShopItem.goods}}</span>
						<span>全部宝贝</span>
					</div>
				</div>
				<div class="right">
					<div v-for="(item,index) in ShopItem.score" :key="index">
						<span>{{item.name}}</span>
						<span>{{item.score}}</span>
						<span :style="[{backgroundColor:item.isBetter ? '#FF1493' : '#67C23A'},{color:'white'}]">{{item.isBetter ? '高' : '低'}}</span>
					</div>
				</div>
			</div>
			<div><a class="onShop" :href="ShopItem.shopUrl">进店逛逛</a></div>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			ShopItem:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		computed:{
			sells(){
				return (this.ShopItem.sells / 10000).toFixed(2)
			}
		}
	}
</script>

<style scoped="scoped">
	.Shop{
		/* border: 1px solid red; */
		/* margin: 20px 10px 5px; */
		padding-bottom: 10px;
		border-bottom: 3px solid #eee;
	}
	.shopMsg{
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		
	}
	.shopMsg img{
		border: 1px solid #F5F5F5;
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.shopMsg span{
		margin-left: 10px;
		color: #F5DEB3;
		font-weight: bold;
	}
	.MyShop{
		
		display: flex;
		font-size: 12px;
		margin-bottom: 20px;
	}
	.MyShop .left{
		flex: 55%;
		/* border: 1px solid green; */
	}
	.MyShop .right{
		flex: 45%;
		/* border: 1px solid green; */
	}
	.MyShop .left{
		display: flex;
	}
	.MyShop .left div{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* border: 1px solid red; */
		flex: 1;
	}
	.MyShop .right div{
		display: flex;
		justify-content: space-between;
		/* border: 1px solid red; */
		text-align: center;
		margin: 5px;
	}
	.MyShop .right div span{
		/* flex: 1; */
		/* margin: 0px 10px; */
	}
	.onShop{
		
		display: block;
		width: 150px;
		padding: 8px 0px;
		background-color: #eee;
		text-align: center;
		margin: 10px auto;
		font-size: 12px;
		border-radius:15px;
	}
</style>
