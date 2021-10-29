<template>
	<div class="tab-bar-item" @click="btnClick">
	<div  v-if="isActive">
		<slot name="item-icon"></slot>
	</div>
	
	<div v-else="!isActive">
		<slot  name="item-icon-active"></slot>
	</div>
	 

	 <div :style="activeStyle">
		 <slot name="item-text"></slot>
	 </div>
	 
	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		props:{
			path:{
				type:String
			},
			activeColor:{
				type:String,
				default:'red'
			}

		},
		data(){
			return{
				// isActive:true
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) == -1 
			},
			activeStyle(){
				return this.isActive ? {} : {color:this.activeColor}
			}
		},
		methods:{
			btnClick(){
				// // // 当前的路由 != 去往的路由，此时则跳转
				// // console.log(this.$route.path) // 获取跳转之前的路由
				if(this.$route.path != this.path){
				this.$router.push(this.path) // 跳转路由
				// console.log(this.$route.path) // 获取跳转之后的路由
				}
			}
		}
	}
</script>

<style scoped="scoped">
	
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
/* 	.active{
		color: red;
	} */
</style>
