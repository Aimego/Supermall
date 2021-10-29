<template>
	<div id="home">
		<NavBar class="nav-home"><div slot="center">Zack官方商城</div></NavBar>
			<TabControl v-show="isTabControl" :class="{tabcontrol:isTabControl}" :titles="['流行','新款','精选']" @Tabtype="MytabTypes" ref="Tabcontrol1"></TabControl>
			<Scroll class="content" @PullUp="loadMore" ref="scroll" :ProbeType="3" :PullUpLoad="true" @scroll="contentScroll">
				<HomeSwiper @swiperImageLoad.once="SwiperImg" :Mybanners="banners"></HomeSwiper>
				<RecommentView :MyRecomemnt="recommends" :MyComment="keywords"></RecommentView>
				<FeatureView></FeatureView>
				<TabControl :titles="['流行','新款','精选']" @Tabtype="MytabTypes" ref="Tabcontrol2"></TabControl>
				<Goods :GoodsList="showGoods"></Goods>
			</Scroll>
			<!-- 当需要监听组件的点击事件时，必须给事件加上native修饰符 -->
			<BackTop v-show="isShowBackTop" @click.native="backClick"></BackTop>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabControl from 'components/content/tabControl/TabControl.vue'
	import Goods from 'components/content/goods/Goods.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import BackTop from 'components/content/backTop/BackTop.vue'
	
	import {getHomeMultidata, getHomeGoods} from '../../network/home.js'
	import {debounce} from 'common/utils.js'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommentView from './childComps/RecommentView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	
	export default{
		name:'Home',
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					pop : {page:0, list:[]},
					new : {page:0, list:[]},
					sell: {page:0, list:[]}
				},
				keywords:[],
				CurretType:'pop',
				isShowBackTop:false,
				isTabControl:false,
				flag:true,
				saveY:''
			}
		},
		computed:{
			// 如果 this.CurretType 发生改变，则调用showGoods
			showGoods(){
				return this.goods[this.CurretType].list
			},
		},
		components:{
			NavBar,
			TabControl,
			Goods,
			Scroll,
			BackTop,
			HomeSwiper,
			RecommentView,
			FeatureView
		},
		created() {
			// 1. 请求多个数据
			this.getHomeMultidata()
			
			// 2. 请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
			
			
		},
		mounted(){
			// 通过$on 能够监听实例上的自定义事件，但是$emit和$on的事件必须使用一个空的 Vue 实例($but)作为中央事件总线的实例上，才能够触发
			const refresh = debounce(this.$refs.scroll.MyReFresh,200)
			this.$bus.$on('goodItemMethod',()=>{
				refresh()
			})
			
		},
		destroyed(){
			console.log('Home destroyed')
		},
		activated(){
			// 刷新防止content高度错误
			this.$refs.scroll.MyReFresh()
			// activated从一个页面回到当前页面时触发，将离开前的y轴坐标定位好
			this.$refs.scroll.BackTop(0,this.saveY,0)
		},
		deactivated(){
			// deactivated在离开当前页面时触发，保留页面离开前的y轴坐标
			this.saveY = this.$refs.scroll.getScrollY()
		},
		methods:{
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
					this.keywords = res.data.keywords.list
				})
			},
			getHomeGoods(type){
				const page = this.goods[type].page += 1
				getHomeGoods(type,page).then(res=>{
					console.log(res)
					// console.log(...res.data.list)
					this.goods[type].list.push(...res.data.list)
					// this.goods[type].page += 1
					// this.$refs.scroll.MyReFresh()
				})
			},
			MytabTypes(e){
				switch(e){
					case 0:this.CurretType = 'pop';
					break;
					case 1:this.CurretType = 'new';
					break;
					case 2:this.CurretType = 'sell';
					break;
				}
				// this.getHomeGoods(this.CurretType)
				
				this.$refs.Tabcontrol1.currentIndex = e
				this.$refs.Tabcontrol2.currentIndex = e
				// this.$refs.Tabcontrol1.currentIndex = e
				// this.$refs.Tabcontrol2.currentIndex = e
				
			},
			loadMore(){
				this.getHomeGoods(this.CurretType)
				this.$refs.scroll.finishPullUp()
			},
			backClick(){
				this.$refs.scroll.BackTop(0,0)
			},
			contentScroll(e){
				// console.log(e)
				// 1. 判断BackTop是否显示
				this.isShowBackTop = -e.y > 1000
				
				// 2. 决定tabControl是否吸顶
				this.isTabControl  = -e.y > 600
			},
			// // 防抖动 (事件触发多次，只执行最后一次)
			// debounce(func,delay){
			// 	let timer = null
			// 	// 使用闭包来保存timer变量
			// 	return function(){
			// 		if(timer) clearTimeout(timer)
			// 		timer = setTimeout(()=>{
			// 			// console.log(args)
			// 			func()
			// 		},delay)
			// 	}
			// }
			SwiperImg(){
				console.log(this.$refs.Tabcontrol2.$el.offsetTop)
			}
		}
	}
</script>

<style scoped>
	#home{
		padding-top: 44px;
		height: 100vh;
		
	}
	.nav-home{
		color: white;
		background-color: #000;
		font-weight: bolder;
		font-size: 18px;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
	}
	.tabcontrol{
		position: fixed;
		left: 0;
		right: 0;
		z-index: 999;
	}
	.content{
		/* border: 1px solid red; */
		height: calc(100% - 49px);
		overflow: hidden;
	}
</style>
