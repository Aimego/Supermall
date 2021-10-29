<template>
	<div id="inter">
		<div class="score">
			<span>美点</span>
			<span>获得{{score}}点积分</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'intergral',
		data(){
			return{
				
			}
		},
		computed:{
			score(){
				return  parseInt(this.ScorePrice * 1.5) 
			}
		},
		props:{
			ScorePrice:{
				type:String,
				default:0
			}
		}
	}
</script>

<style scoped="scoped">
	#inter{
		border-radius: 10px;
		background-color: white;
		margin-top: 10px;
	}
	.score{
		display: flex;
		padding: 15px;
		align-items: center;
		line-height: 20px;
	}
	.score span:nth-child(1){
		border: 1px solid red;
		color: red;
		flex: 15%;
		text-align: center;
		font-size: 12px;
		font-weight: bold;
		border-radius: 5px;
	}
	.score span:nth-child(2){
		flex: 85%;
		text-align: left;
		margin-left: 10px;
		font-weight: bold;
		font-size: 12px;
		
		color: #000;
	}
</style>
