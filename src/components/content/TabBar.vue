<template>
	<div id="tab-bar">
		<slot>
			<tab-bar-item path="/home" activeColor="deeppink">
				<img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
				<img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
				<div slot="item-text">首页</div>
			</tab-bar-item>
			
			<tab-bar-item path="/category" activeColor="deeppink">
				<img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" alt="">
				<img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
				<div slot="item-text">分类</div>
			</tab-bar-item>
			
			<tab-bar-item path="/car" activeColor="deeppink">
				<img slot="item-icon-active" src="../../assets/img/tabbar/car_active.png" alt="">
				<img slot="item-icon" src="../../assets/img/tabbar/car.png" alt="">
				<div slot="item-text">购物车</div>
			</tab-bar-item>
			
			<tab-bar-item path="/person" activeColor="deeppink">
				<img slot="item-icon-active" src="~assets/img/tabbar/person_active.png" alt="">
				<img slot="item-icon" src="~assets/img/tabbar/person.png" alt="">
				<div slot="item-text">我的</div>
			</tab-bar-item>
		</slot>
	</div>
</template>

<script>
	import TabBarItem from 'components/common/TabBarItem.vue'
	export default{
		name:'TabBar',
		components:{
			TabBarItem
		}
	}
</script>

<style scoped="scoped">
	#tab-bar{
		display: flex;
		background-color: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 10px 5px 10px rgba(100,100,100,0.1);
		font-size: 14px;
	}
</style>
