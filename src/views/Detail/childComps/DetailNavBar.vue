<template>
	<div>
		<NavBar>
			<div slot="left" class="Goback" @click="backClick">
				<img src="~assets/img/icon/back.png" alt="">
			</div>
			<div slot="center" class="title" >
				<div v-for="(item,index) in titles" :key="index" @click="DetailActive(index)" :class="{active:index == currentIndex}">{{item}}</div>
			</div>
		</NavBar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	export default{
		data(){
			return{
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		components:{
			NavBar
		},
		methods:{
			DetailActive(index){
				this.currentIndex = index
				this.$emit('NavTop',index)
			},
			backClick(){
				this.$router.back()
			}
		},
		
	}
</script>

<style scoped="scoped">
	.title{
		display: flex;
		justify-content: space-around;
		font-size: 15px;
	}
	.active{
		color: var(--color-high-text);
	}
	.Goback{
		/* border: 1px solid red; */
		position: relative;
		width: 100%;
		height: 100%;
	}
	.Goback img{
		position: absolute;
		width: 20px;
		height: 20px;
		top: 0;
		bottom: 0;
		left: -10;
		margin: auto;
	}
</style>
