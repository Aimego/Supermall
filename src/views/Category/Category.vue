<template>
	<div id="Cate">
		<NavBar class="nav-bar"><div slot="center">分类</div></NavBar>
			<Scroll class="content left" ref="scrollLeft">
				<ul class="leftBtn">
					<li :class="{Act : ActIndex === index}" @click="SelectC(item.maitKey,index)" v-for="(item,index) in leftScroll" :key="item.maitKey">{{item.title}}</li>
				</ul>
			</Scroll>
			
			<Scroll class="content right" ref="scrollRight">
				<div class="Goods">
					<div class="rightItem" v-for="(item,index) in rightGoods" :key="index">
						<span><img :src="item.image" alt="" @load="imgLoading()"></span>
						<span>{{item.title}}</span>
					</div>
				</div>
			</Scroll>
		
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import {category,getSubCategory} from '../../network/category.js'
	import {debounce,deb} from '../../common/utils.js'
	export default{
		data(){
			return{
				leftScroll:[],
				rightGoods:[],
				ActIndex:0,
				imgLoading:''
			}
		},
		components:{
			NavBar,
			Scroll,
		},
		methods:{
			SelectC(id,index){
				this.ActIndex = index
				this.SelectGoods(id)
			},
			SelectGoods(id){
				getSubCategory(id).then(res=>{
					this.rightGoods = res.data.list
					console.log(this.rightGoods)
				})
			},
		},
		computed:{
		},
		created(){
			category().then(res=>{
				let data = res.data.category
				this.leftScroll = data.list
				this.SelectGoods(this.leftScroll[0].maitKey)
			})
			
		},
		mounted(){
			this.imgLoading = debounce(this.$refs.scrollRight.MyReFresh,200)
		},
		watch:{
			// 使用 watch + $nextTick() 实现当v-for循环结束后回调
			leftScroll(){
				this.$nextTick(()=>{
					this.$refs.scrollLeft.MyReFresh()
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#Cate{
		height: 100vh;
		padding-top: 44px;
		display: flex;
	}
	.left{
		flex: 25%;
		background-color: #f5f5f5;
	}
	.right{
		flex: 75%;
		margin: 10px;
	}
	.Act{
		position: relative;
		background-color: white;
	}
	.Act:before{
		position: absolute;
		content: '';
		width: 5px;
		height: 15px;
		border-radius: 5px;
		border-left: 5px solid #474747;;
		left: 0;
	}
	.nav-bar{
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
	.leftBtn{
		padding: 0;
		margin: 0;
		list-style: none;
		text-align: center;
		font-size: 12px;
		display: flex;
		flex-direction: column;
	}
	.leftBtn li{
		padding: 15px;
		width: 100%;
	}
	.rightBtn{
		padding: 0;
		margin: 0;
		list-style: none;
		text-align: center;
	}
	.rightBtn li{
		padding: 15px;
		
	}
	.content{
		height: calc(100%  - 49px );
		/* border: 1px solid red; */
		
	}
	.Goods{
		width: 100%;
		display: flex;
		/* flex-direction: column; */
		
		
		flex-wrap: wrap;
	}
	.Goods .rightItem{
		flex: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-bottom: 25px;
	}
	/* .rightItem span:nth-child(1){
		flex: 80%;
	}
	.rightItem span:nth-child(2){
		flex: 20%;
	} */
	.rightItem span{
		width: 80%;
	}
	.rightItem img{
		width: 100%;
		height: 100%;
	}
</style>
