<template>
	<div id="Car">
		<NavBar class="nav-home">
			<div slot="center">购物车<span v-show="SumOrder.SumPick.length!=0">({{SumOrder.SumPick.length}})</span></div>
			<div slot="right" v-show="PersonCar.length != 0" @click="Manage=!Manage">管理</div>
		</NavBar>
		<Scroll class="content" ref="scroll">
			<div class="Item" v-for="(item,index) in PersonCar" :key="index">
				<div class="Btn" @click="PickGoods(item.id)"><span :class="item.pick ? 'circle_active' : 'circle'"></span></div>
				<div class="left"><img :src="item.img" alt=""></div>
				<div class="right">
					<span class="title">{{item.title}}</span>
					<span class="desc">{{item.desc}}</span>
					<span class="price">￥{{item.price}}</span>
					<span class="number">x{{item.number}}</span>
				</div>
			</div>
		</Scroll>
		<!-- <div class="empty" v-if="PersonCar.length === 0">
			<div class="emptyImg"><img src="../../assets/img/icon/CarEempty.png" alt=""></div>
			<div class="text" @click="$router.push('/')">去首页逛逛</div>
		</div> -->
		<EmptyStyle :myShow="PersonCar.length === 0">
			<div slot="img" class="emptyImg"><img src="~assets/img/icon/CarEempty.png" alt=""></div>
			<div slot="emptyText" class="text"  @click="$router.push('/')">去首页逛逛</div>
		</EmptyStyle>
		<CarBotNav :Change="Manage"></CarBotNav>
	</div>
	
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import CarBotNav from './childComps/CarBotNav.vue'
	import {mapState,mapMutations,mapGetters} from 'vuex'
	import EmptyStyle from 'components/common/EmptyStyle/index.vue'
	export default{
		name:'Car',
		data(){
			return{
				TestArr:[
					{title:'2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮',
					 img:'//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg',
					 price:'149',
					 number:'1',
					 desc:'商品描述: 你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮住多余的腰腹和双臂肉肉，展现青春活力.下半身搭配浅色直筒牛仔裤，向来是竹竿腿的助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~'
					 },
				],
				Manage:false
			}
		},
		computed:{
			...mapState(['PersonCar']),
			...mapGetters(['SumOrder']),
		},
		components:{
			NavBar,
			CarBotNav,
			Scroll,
			EmptyStyle
		},
		methods:{
			...mapMutations(['PickGoods']),
			manage(){
				
			}
		},
		activated(){
			console.log('购物车刷新被触发')
			this.$refs.scroll.MyReFresh()
		}
	
	}
</script>

<style scoped="scoped">
	#Car{		
		height: 100vh;
		background-color: ghostwhite;
		position: relative;
	}
	/* .empty{
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%,-20%);
		display: flex;
		flex-direction: column;
		align-items: center;
	} */

	.empty .emptyImg:after{
		content: '- 购物车为空 -';
	}
	/* .empty .text{
		margin-top: 30px;
		background-color: #000;
		padding: 10px 40px;
		color: white;
		font-size: 12px;
		font-weight: bolder;
		border-radius: 20px;
	} */
	.circle{
		flex: 1;
		background: url(../../assets/img/icon/circle.png) no-repeat center center;
		background-size: 30px;
	}
	.circle_active{
		flex: 1;
		background: url(../../assets/img/icon/circle_active.png) no-repeat center center;
		background-size: 30px;
	}
	.nav-home{
		color: white;
		background-color: #000;
		font-weight: bolder;
		font-size: 18px;
	/* 	position: fixed;
		left: 0;
		right: 0;
		top: 0; */
		z-index: 999;
	}
	.Item{
		display: flex;
		/* border-bottom: 1px solid #ccc; */
		height: 143px;
		margin: 10px 10px;
		background-color: white;
		border-radius: 10px;
	}
	.Item .left img{
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
	.Item .Btn{
		flex: 10%;
		
		display: flex;
	} 
	.Item .left{
		padding: 10px;
		flex: 30%;
	}
	.Item .right{
		flex: 60%;
		display: flex;
		flex-direction: column;
		padding: 10px;
		/* position: relative; */
	}
	.Item .right .desc,.title{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.Item .right .title{
		font-size: 19px;
		font-weight: bold;
		margin-bottom: 15px;
		
	}
	.Item .right .price{
		margin-top: 15px;
		font-size: 15px;
		color: red;
	}
	.Item .right .number{
		color: #000000;
		font-size: 18px;
		margin-top: 10px;
		margin-left: 4px;
/* 		position: absolute;
		right: 10px;
		bottom: 10px; */
	}
	.content{
		height: calc(100% - 54px - 41px - 49px);
		overflow: hidden;
		
	}
</style>
