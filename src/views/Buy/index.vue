<template>
	<div id="buy">
		<NavBar class="nav-home">
			<div class="comBack" slot="left" @click="$router.back()"><img src="~assets/img/icon/back.png" alt=""></div>
			<div slot="center">确认订单</div>
		</NavBar>
		<Scroll class="content" ref="scroll">
			<OrderAddress></OrderAddress>
			<OrderList :dataList="OrderList" :ListPrice="totalPrice"></OrderList>
			<intergral :ScorePrice="totalPrice"></intergral>
		</Scroll>
		<NavBtn :ListLength="OrderList.length" :OrderPrice="totalPrice"></NavBtn>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import OrderAddress from './childComponents/orderAddress.vue'
	import OrderList from './childComponents/orderList.vue'
	import intergral from './childComponents/intergral.vue'
	import NavBtn from './childComponents/NavBtn.vue'
	export default{
		name:'Buy',
		data(){
			return{
				OrderList:[],
				totalPrice:''
			}
		},
		components:{
			NavBar,
			Scroll,
			OrderAddress,
			OrderList,
			intergral,
			NavBtn
		},
		created(){
			if(Object.keys(this.$route.params).length != 0){
				console.log('赋值被触发')
				sessionStorage.setItem('orderData',JSON.stringify(this.$route.params.data))
				sessionStorage.setItem('totalPrice',this.$route.params.totalPrice)
			}
			this.OrderList = JSON.parse(sessionStorage.getItem('orderData'))
			this.totalPrice = sessionStorage.getItem('totalPrice')
			this.$nextTick(()=>{
				this.$refs.scroll.MyReFresh()
			})
		},
		
	}
</script>

<style scoped="scoped">
	#buy{
		height: 100vh;
		background-color: #f5f2f5;
		margin-top: 44px;
	}
	.nav-home{
		color: #000;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: white;
		font-weight: bolder;
		font-size: 18px;
		z-index: 999;
	}
	.comBack{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-home div img{
		width: 20px;
		height: 20px;
	}
	.content{
		height: calc(100% - 44px - 55px);
		padding: 10px 20px 0px;
	}
</style>
