<template>
	<div>
		<div class="empty" v-show="myShow">
			<slot name="img">
				<div class="emptyImg"></div>
			</slot>
			<slot name="emptyText">
				<div class="text"></div>
			</slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'EmptyStyle',
		props:{
			myShow:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped="scoped">
	.empty{
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%,-20%);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.empty .emptyImg:after{
		display: inline-block;
		content: '';
		position: relative;
		left: 50%;
		font-size: 12px;
		color: #acacac;
		margin-top: 10px;
		transform: translateX(-50%);
	}
	.empty .text{
		margin-top: 30px;
		background-color: #000;
		padding: 10px 40px;
		color: white;
		font-size: 12px;
		font-weight: bolder;
		border-radius: 20px;
	}
</style>
