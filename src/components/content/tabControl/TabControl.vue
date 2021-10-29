<template>
	<div class="tab-control">
		<div class="tabItem" v-for="(item,index) in titles" 
			:class="{active : index == currentIndex}"
			@click="itemClick(index)"
			>
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				this.$emit('Tabtype',index)
			}
		},
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.tab-control{
		display: flex;
		text-align: center;
		font-size: 15px;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		
	}
	.tabItem{
		flex: 1;
		
	}
	.active span{
		font-size: 18px;
		padding: 5px 5px;
		color: var(--color-high-text);
		border-bottom: 3px solid var(--color-tint);
	}
</style>
