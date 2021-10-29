<template>
	<div id="detail">
		<DetailNavBar ref="MyNavBar" class="detail-nav" @NavTop="ActNav"></DetailNavBar>
			<Scroll class="content" ref="scroll" :ProbeType="3" @scroll="contentScroll">
				<DetailSwiper :topImage="topImg"></DetailSwiper>
				<DetailServe :GoodsItem="goods"></DetailServe>
				<DetailShop :ShopItem="shop"></DetailShop>
				<DetailIntroduce @ImagLoads="imgLoad" :GoodsIntro="GoodsDetail"></DetailIntroduce>
				<DetailParameter ref="Mparameter" :Parameter="GoodsParameter"></DetailParameter>
				<DetailComment ref="Mcomment" :Comment="Comment"></DetailComment>
				<Goods ref="Mgoods" :GoodsList="Recommend.Arr"></Goods>
			</Scroll>
			<DetailBotNav :myGoods="Collect" @EJoinCar="MyJoinCar"></DetailBotNav>
			<backTop v-show="isShowBackTop" @click.native="BackTop"></backTop>
	</div>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll.vue'
	import Goods from '../../components/content/goods/Goods.vue'
	
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import DetailSwiper from './childComps/DetailSwiper.vue'
	import DetailServe from './childComps/DetailServe.vue'
	import DetailShop from './childComps/DetailShop.vue'
	import DetailIntroduce from './childComps/DetailIntroduce.vue'
	import DetailParameter from './childComps/DetailParameter.vue'
	import DetailComment from './childComps/DetailComment.vue'
	import DetailRecommend from './childComps/DetailRecommend.vue'
	import DetailBotNav from './childComps/DetailBotNav.vue'
	
	import backTop from 'components/content/backTop/BackTop.vue'
	import {debounce} from 'common/utils.js'
	import {getDetail,NetGoods,Shop,Parameter,getRecomment,GoodsList,JoinCar,GoodsCollect} from 'network/detail.js'
	import {mapMutations,mapActions} from 'vuex'
	export default{
		name:'Detail',
		data(){
			return{
				iid:'',
				topImg:[],
				goods:{},
				shop:{},
				GoodsDetail:{},
				GoodsParameter:{},
				Comment:[],
				Recommend:[],
				isShowBackTop:false,
				NavBtn:[],
				MyOfsetTop:'',
				ScrollNavTop:0,
				Collect:{}
			}
		},
		components:{
			Scroll,
			
			DetailNavBar,
			DetailSwiper,
			DetailServe,
			DetailShop,
			DetailIntroduce,
			DetailParameter,
			DetailComment,
			DetailRecommend,
			Goods,
			DetailBotNav,
			backTop
		},
		methods:{
			...mapActions(['JoinMyCarOrNumber']),
			...mapMutations(['JoinCar']),
			BackTop(){
				this.$refs.scroll.BackTop(0,0)
			},
			contentScroll(e){
				// console.log(e)
				this.isShowBackTop = -e.y > 1000
				
				let DistanceY = -e.y
				// console.log(DistanceY)
				for(let i=0; i<this.NavBtn.length-1;i++){
					if(this.ScrollNavTop !== i && (DistanceY >= this.NavBtn[i] && DistanceY <= this.NavBtn[i+1])){
						
						this.ScrollNavTop = i
						this.$refs.MyNavBar.currentIndex = this.ScrollNavTop
						
					}
				}
			},
			ActNav(e){
				// console.log(e)
				this.ScrollNavTop = e
				// this.$refs.scroll.MyReFresh() 
				this.$refs.scroll.BackTop(0,-this.NavBtn[e])
			},
			imgLoad(){
				console.log('我被调用了')
				this.MyOfsetTop()
			},
			
			// 加入购物车调用
			MyJoinCar(){
			  let sendCar	= new JoinCar(this.iid,this.goods,this.topImg[0],this.GoodsDetail.desc)
			  this.JoinMyCarOrNumber(sendCar)
			}
		},
		mounted() {
			this.MyOfsetTop = debounce(()=>{
				// 这里的MyReFresh()的作用是为了防止Bscroll还不知道异步刷新出来数据的高度
				this.$refs.scroll.MyReFresh()
				// splice('从0开始更新数组','直接清空','替换数组')
				this.NavBtn.splice(0,this.NavBtn.length,...[0,this.$refs.Mparameter.$el.offsetTop,this.$refs.Mcomment.$el.offsetTop,this.$refs.Mgoods.$el.offsetTop,Number.MAX_VALUE])
			},200)
		},
		created(){
			this.iid = this.$route.params.id
			getDetail(this.iid).then(res=>{
				// 1. 获取顶部的图片轮播数据
				// console.log(res)
				const data = res.result
				this.topImg = data.itemInfo.topImages
				
				// 2. 获取商品信息
				this.goods = new NetGoods(data.itemInfo,data.columns,data.shopInfo.services)
				
				// 3. 获取店铺信息
				this.shop = new Shop(data.shopInfo)
				
				// 4. 获取商品详细信息
				this.GoodsDetail = data.detailInfo
				
				// 5. 获取商品参数信息
				this.GoodsParameter = new Parameter(data.itemParams.info,data.itemParams.rule)
				
				// 6. 获取用户评价
				if(data.rate.list){
					this.Comment = data.rate.list
				}
				
				// 加入收藏整合
				this.Collect = new GoodsCollect(this.goods,this.iid,this.topImg[0])
			})
			
			getRecomment().then(res=>{
				this.Recommend = new GoodsList(res.data.list)
			})
		},

	}
</script>

<style scoped="scoped">
	#detail{
		position: relative;
		z-index: 9;
		background-color: #fff;
		height: 100vh;
	}
	.detail-nav{
		position: relative;
		z-index: 999;
		background-color: #fff;
	}
	.content{
		height: calc(100% - 44px - 52px);
	}
</style>
