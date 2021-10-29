<template>
	<div id="Nav">
		<div class="NavBot" v-show="PersonCar.length != 0">
			<span class="AllCheck" @click="AllPick">
				<span :class="ActClass"></span>
				<span class="text">全选</span>
				</span>
			<span class="Sum">
				<span>合计:</span>
				<span class="price">￥{{SumOrder.SumPrice}}</span>
			</span>
			<!-- 1. 使用params传参 需要通过name(路由表中的name)来定位路由，优点在于因为会被认为是post传参所以数据不展示在url中，但是缺点是一旦刷新数据就会丢失
				 解决方法:需要将参数实际保存在路由中，就需要将路由设置为动态路由，并且动态路由的id需要与params中的成员变量一致(如果成员变量存储的数据是复杂数据类型，
				 那么需要用JSON.stringify()转换成字符串，但是这样数据又会重新展示在url中)
			-->
			<span class="Pay"  v-show="!Change" @click="$router.push({name:'buy',params:{data:SumOrder.SumPick,totalPrice:SumOrder.SumPrice}})">结算<span v-show="SumOrder.SumPick.length!=0">({{SumOrder.SumPick.length}})</span></span>
			
			<!-- 2. 使用query传参 通过path定位路由，不需要成员变量可以直接给query赋值，优点在于刷新数据也不会丢失(如果是复杂数据类型刷新后可能会无法正确展示数据，需要通过JSON解决)，但是缺点在于数据会展示在url中， -->
			<!-- <span class="Pay" @click="$router.push({path:'buyorder',query:{data:JSON.stringify(SumOrder.SumPick)}})"  v-show="!Change">结算<span v-show="SumOrder.SumPick.length!=0">({{SumOrder.SumPick.length}})</span></span> -->
			<span class="Pay"  v-show="Change" @click="Delete" style="background-image: linear-gradient(62deg, #ff0b0b 10%, #ff0000 100%);">删除<span v-show="SumOrder.SumPick.length!=0">({{SumOrder.SumPick.length}})</span></span>
		</div>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations} from 'vuex'
	export default{
		name:'CarBotNav',
		data(){
			return{
				
			}
		},
		props:{
			Change:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			...mapState(['AllSelect','PersonCar']),
			...mapGetters(['SumOrder','AllCheckPick']),
			ActClass(){
				return this.AllCheckPick ? 'circle_active' : 'circle'
			}
		},
		methods:{
			...mapMutations(['AllPick','DeleteCar']),
			Delete(){
				let flag = this.PersonCar.filter(item=>item.pick)
				this.DeleteCar(flag)
			}
		}
	}
</script>

<style scoped="scoped">
	#Nav{
		position: fixed;
		bottom: 49px;
		left: 0;
		right: 0;
		background-color: #f6f6f6;
		border-bottom: 1px solid #DCDCDC;
		line-height: 40px;
		
	}
	.NavBot{
		display: flex;
		
		margin: 5px 0px;
	}
	.NavBot .AllCheck{
		flex: 20%;
	}totalPrice
	
	.NavBot .Sum{
		flex: 55%;
		text-align: right;
		padding-right: 10px;
		color: #000000;
		font-weight: 550;
	}
	.NavBot .Sum .price{
		font-size: 12px;
		color: #ff5500;
	}
	.NavBot .Pay{
		flex: 25%;
		text-align: center;
		/* background-color: #FF8C00; */
		background-image: linear-gradient(62deg, #ffaa00 0%, #ff5500 100%);
		color: white;
		font-size: 15px;
		border-radius: 50px;
		font-weight: 500;
		margin: 0px 8px 0px 2px;
	}
	.AllCheck{
		text-align: center;
		display: flex;
		
	}
	.AllCheck .text{
		flex: 60%
	}
	.circle{
		flex: 40%;
		background: url(../../../assets/img/icon/circle.png) no-repeat center 4px;
		background-size: 30px;
	}
	.circle_active{
		flex: 40%;
		background: url(../../../assets/img/icon/circle_active.png) no-repeat center 4px;
		background-size: 30px;
	}
</style>
