<template>
	<div id="Person">
		<NavBar class="nav-bar"><div slot="center">个人中心</div></NavBar>
		<Scroll class="content">
			<LoginShow></LoginShow>
			<MenuList></MenuList>
		</Scroll>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import LoginShow from './childcomponent/LoginShow.vue'
	import MenuList from './childcomponent/MenuList/MenuList.vue'
	
	export default{
		name:'Person',
		
		components:{
			Scroll,
			NavBar,
			LoginShow,
			LoginShow,
			MenuList
		}
	}
</script>

<style scoped="scoped">
	#Person{
		padding-top: 44px;
		height: 100vh;
		background-color: #f5f5f5;
	}
	.nav-bar{
		color: white;
		background-color: #12b4b4;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
	}
	.content{
		height: calc(100% - 50px);
		
	}
</style>
