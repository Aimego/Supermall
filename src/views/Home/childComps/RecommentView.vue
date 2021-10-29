<template>
	<div>
		<div class="recomment">
			<div v-for="item in MyRecomemnt" class="recommentItem">
				<a :href="item.link">
					<img :src="item.image" alt="">
					<div>{{item.title}}</div>
				</a>
			</div>
		</div>


	</div>
	
</template>

<script>
	export default{
		props:{
			MyRecomemnt:{
				type:Array,
				default(){
					return []
				}
			},
			MyComment:{
				type:Array,
				default(){
					return []
				}
			}
			
		}
	}
</script>

<style scoped="scoped">
	.recomment{
		display: flex;
		text-align: center;
		font-size: 12px;
		padding: 15px 0 30px;
		margin: 10px 0;
		border-bottom: 8px solid #eee;
	}
	.recommentItem{
		flex: 1;
	}
	.recommentItem img{
		width: 65px;
		height: 65px;
	}
	
</style>
