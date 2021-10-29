<template>
	<div id="BotNav">
		<div class="Item">
			<span><img src="../../../assets/img/icon/Service.png" alt=""></span>
			<span>客服</span>
		</div>
		<div class="Item">
			<span><img src="../../../assets/img/icon/Shop.png" alt=""></span>
			<span>店铺</span>
		</div>
		<div class="Item" @click="Collect(myGoods)">
			<span v-show="GoodsCollect(myGoods.id)"><img src="../../../assets/img/icon/ReadyCollect.png" alt=""></span>
			<span v-show="!GoodsCollect(myGoods.id)"><img src="../../../assets/img/icon/Collect.png" alt=""></span>
			<span>{{ GoodsCollect(myGoods.id)  ?  '已收藏' : '收藏'}}</span>
		</div>
		<div class="car" @click="JoinCar">加入购物车</div>
		<div class="buy" @click="$router.push({name:'buy',params:{data:[Goods],totalPrice:Goods.price}})">立即购买</div>
	</div>
</template>

<script>
	import {FastBuy} from '../../../network/detail.js'
	import {message} from '../../../common/utils.js'
	import {mapState,mapActions,mapGetters} from 'vuex'
	export default{
		name:'DetailBotNav',
		computed:{
			...mapGetters(['GoodsCollect']),
			...mapState(['PersonUser'])
		},
		data(){
			return{
				Goods:{}
			}
		},
		props:{
			myGoods:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			...mapActions(['JoinMyCollect']),
			JoinCar(){
				if(this.PersonUser.name) this.$emit('EJoinCar')
				else message()
			},
			Collect(item){
				if(this.PersonUser.name) this.JoinMyCollect(item)
				else message()
			},
		},
		created() {
			
			
		},
		watch:{
			myGoods:{
				handler:function(val){
					// 这里不能使用箭头函数，因为我们需要的this是handler作用域下的this，也就是Vue.handler,
					// 如果使用箭头函数，就是handler作用域上的myGoods的this，也就是watch.myGoods
					this.Goods = new FastBuy(val)
				},
				// deep:true
			}
		}
	}
</script>

<style scoped="scoped">
	#BotNav{
		position: fixed;
		width: 100%;
		display: flex;
		bottom: 0;
		background-color: white;
		
		
	}
	#BotNav .Item{
		padding: 5px;
		display: flex;
		flex-direction: column;
		font-size: 12px;
		align-items: center;
	}
	#BotNav .Item img{
		width: 23px;
		height: 23px;
	}
	#BotNav .Item{
		flex: 13.4%;
	}
	#BotNav .Item span{
		margin-top: 5px;
	}
	#BotNav .car,.buy{
		flex: 30%;
		font-size: 15px;
	}
	.car{
		background-color: #F9CD0B;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.buy{
		color: white;
		background-color: var(--color-high-text);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
