<template>
	<div id="edit">
		<div >
			<slot name="btn"><div class="BtnSty">编辑</div></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'EditBtn',
		
	}
</script>

<style scoped="scoped">
	.BtnSty{		
		width: 100%;
		padding: 15px;
		letter-spacing: 2px;
		background-color: #ff3939;
		color: white;
		font-size: 18px;
		text-align: center;
		position: fixed;
		/* bottom: 0; */
		z-index: 9999;
		left: 50%;
		transform: translateX(-50%);
		touch-action: none;
	}
</style>
