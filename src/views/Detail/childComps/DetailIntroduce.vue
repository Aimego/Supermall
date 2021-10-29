<template>
	<div id="Introduce">
		<div class="recommend">
			<div class="top"></div>
			<div class="text">
				{{GoodsIntro.desc}}
			</div>
			<div class="bottom"></div>
		</div>
		
		<div class="ImgDetail">
				<div v-for="(imgs,index) in GoodsIntro.detailImage">
					<!-- <div class="show">{{imgs.key}}</div> -->
					<div v-for="(item,index) in imgs.list">
						<img :src="item" alt="" @load="ImgLoad">
					</div>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailIntroduce',
		props:{
			GoodsIntro:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			ImgLoad(){
				this.$emit('ImagLoads')
			}
		}
	}
</script>

<style scoped="scoped">
	.recommend{
		margin: 10px;
		position: relative;
	}
	.recommend .text{
		padding: 10px;
		font-size: 14px;
		line-height: 20px;
		text-indent: 10px;
	}
	.recommend .top{
		position: absolute;
		width: 60px;
		height: 5px;
		border-bottom: 1px solid black;
	}
	.recommend .bottom{
		position: absolute;
		width: 60px;
		height: 5px;
		border-bottom: 1px solid black;
		right: 0;
	}
	.recommend .top:before{
		content: '';
		display: block;
		position: absolute;
		height: 5px;
		width: 5px;
		background-color: black;
	}
	.recommend .bottom:after{
		content: '';
		display: block;
		position: absolute;
		height: 5px;
		width: 5px;
		background-color: black;
		right: 0px;
	}
	.ImgDetail .show{
		/* border: 1px solid red; */
		font-weight: bold;
		font-size: 14px;
		
	}
	.ImgDetail div img{
		width: 100%;
		height: 100%;
		vertical-align:top
	}
</style>
