<template>
	<div id="collect">
		<NavBar class="nav-home">
			<div class="comBack" @click="$router.back()" slot="left"><img src="~assets/img/icon/back.png" alt=""></div>
			<div slot="center">我的收藏</div>
		</NavBar>
		<Scroll class="content">
			<ItemList></ItemList>
		</Scroll>
		<!-- <div class="empty" v-show="$store.state.PersonUser.collect.length === 0">
			<div class="emptyImg"><img src="../../../../assets/img/icon/CarEempty.png" alt=""></div>
			<div class="text" @click="$router.push('/')">去首页逛逛</div>
		</div> -->
		<EmptyStyle :myShow="$store.state.PersonUser.collect.length === 0">
			<div slot="img" class="emptyImg"><img src="~assets/img/icon/CarEempty.png" alt=""></div>
			<div slot="emptyText" class="text"  @click="$router.push('/')">去首页逛逛</div>
		</EmptyStyle>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import ItemList from './childComponents/ItemList.vue'
	import EmptyStyle from 'components/common/EmptyStyle/index.vue'
	export default{
		name:'Collect',
		components:{
			NavBar,
			Scroll,
			ItemList,
			EmptyStyle
		},
		methods:{
		}
	}
</script>

<style scoped="scoped">
	#collect{
		height: 100vh;
		
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
		content: '- 您还没有收藏的产品哦 -';
	}
/* 	.empty .text{
		margin-top: 30px;
		background-color: #000;
		padding: 10px 40px;
		color: white;
		font-size: 12px;
		font-weight: bolder;
		border-radius: 20px;
	} */
	.nav-home{
		color: #000;
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
		height: calc(100% - 44px);
		
		overflow: hidden;
	}
</style>
