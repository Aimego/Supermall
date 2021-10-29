<template>
			<div>
				<!-- 排除不需要被缓存下来的组件，Detail是组件中的name -->
				<keep-alive exclude="Detail,Buy,ExtraAddress">
					<router-view></router-view>
				</keep-alive>
				<!-- <router-view></router-view> -->
				<TabBar v-show="$store.state.AppTab"></TabBar>
			</div>
</template>

<script>
import TabBar from 'components/content/TabBar.vue'
export default {
  name: 'App',
	components:{
		TabBar
	},

}
</script>

<style>
@import "assets/css/base.css";
	.el-message{
			border: 1px solid red;
			 min-width: 80%!important
		}
</style>
