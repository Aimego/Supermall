<template>
	<div id="parameter">
		<div class="data">
			<div class="SizeData" v-for="(items,index) in Parameter.sizeKind">
				<div class="SizePar" v-for="(item,index) in items"><span>{{item}}</span></div>
			</div>
			
			<div class="ProductData" v-for="(items,index) in Parameter.product">
				<span>{{items.key}}</span>
				<span>{{items.value}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailParameter',
		props:{
			Parameter:{
				type:Object,
				default(){
					return{}
				}
			}
		}
		
	}
</script>

<style scoped="scoped">
	#parameter{
	}
	#parameter .data{
		/* display: flex; */
		/* flex-wrap: wrap; */
		/* flex-direction: column; */
		
	}
	.data{
		border-top:4px  solid #ececec;
	}
	.data .SizeData{
		
		margin-top: 10px;
		/* margin: 10px 0px; */
		padding: 4px;
		/* flex: 1;
		display: flex; */
		justify-content: space-between;
		display: flex;
		/* border: 1px solid red; */
		text-align: center;
		border-bottom: 1px solid #ececec;
	}
	.SizePar{
		font-size: 14px;
		width: 50px;
		/* padding: 0px 10px; */
		/* border: 1px solid red; */
		/* border: 1px solid red; */
		/* flex: 25%; */
	}
	.ProductData{
		display: flex;
		border-bottom: 1px solid #ececec;
		font-size: 12px;
		padding: 5px;
		
		
	}
	.ProductData span{
		flex: 30%;
		margin-left: 12px;
		/* border: 1px solid red; */
		/* margin-left: 10px; */
	}
	.ProductData span:nth-child(2){
		/* margin-left: 99px; */
		flex: 70%;
		text-align: center;
	}
</style>
