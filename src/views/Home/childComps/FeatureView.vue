<template>
	<div>
		<div class="title">本周流行</div>
		<div class="comment">
			<div v-for="item in HomeCate" class="commentItem">
				<a href="#">
					<img :src="item.img" alt="">
					<div>{{item.title}}</div>
				</a>
			</div>
		</div>
	</div>
				
</template>

<script>
	export default{
		data(){
			return{
				HomeCate:[
					{img:'https://img.alicdn.com/imgextra/i1/32960648/TB2LOLarER1BeNjy0FmXXb0wVXa_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',title:'套装女夏'},
					{img:'https://img.alicdn.com/imgextra/i4/44242389/O1CN01ARtCfm1TWCoiUz3vu_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',title:'时尚运动鞋'},
					{img:'https://img.alicdn.com/imgextra/i3/56358663/O1CN01lcHa1Z2DrhoifZfhD_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',title:'新款服装'},
					{img:'https://img.alicdn.com/imgextra/i2/14693938/O1CN016poANt1exeOcYhzL7_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',title:'修身女神范'},
					{img:'https://img.alicdn.com/imgextra/i3/15171914/O1CN017lXDtf1Q0elNhst22_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',title:'百搭时尚'},
					{img:'https://img.alicdn.com/imgextra/i4/15171914/O1CN01RQi7O11Q0ejujZPP5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',title:'高贵冷淡'},
					{img:'https://img.alicdn.com/imgextra/i1/97427953/O1CN01ehhM4828cWbroWpUw_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',title:'百洛安气质'},
					{img:'https://img.alicdn.com/imgextra/i1/132512474/O1CN01UGptVG1U98ZCNvAw0_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',title:'德诗夏季'}
					]
			}
		},
	}
</script>

<style scoped="scoped">
	.comment{
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		text-align: center;
		font-size: 12px;
	}
	.title{
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 15px;
		
		text-align: center;
	}
	.commentItem{
		flex: 25%;
		margin-bottom: 15px;
	}
	.commentItem img{
		width: 65px;
		height: 65px;
		border-radius: 50%;
	}
</style>
