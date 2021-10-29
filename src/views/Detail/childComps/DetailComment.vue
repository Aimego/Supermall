<template>
	<div id="DetailCom">
		<div class="Comset">
			<span>用户评价({{Comment.length}})</span>
			<span>更多</span>
		</div>
		<div class="PersonCom">
			<div v-for="(item,index) in Comment.slice(0,2)">
				<div class="user">
					<div><img :src="item.user.avatar" alt=""></div>
					<div>{{item.user.uname}}</div>
				</div>
				
				<div class="content">{{item.content}}</div>
				<div class="buyValue">
					<span>{{item.created | buyDate}}</span>
					<span>{{item.style}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {formatDate} from 'common/utils.js'
	export default{
		name:'DetailComment',
		data(){
			return{
			}
		},
		props:{
			Comment:{
				type:Array,
				default(){
					return []
				}
			}
		},
		computed:{
			// buyDate(){
			// 	return item=>{
			// 		var date = new Date(item)
			// 		return formatDate(date,'yyyy-MM-dd')
			// 	}
			// }
		},
		filters:{
			buyDate(item){
					const date = new Date(item)
					return formatDate(date,'yyyy-MM-dd')
			}
		}
	}
</script>

<style scoped="scoped">
	#DetailCom{
		margin: 10px 0px 30px;
		border-radius: 20px;
		
		padding: 0px 8px;
		border: 2px solid #ececec;
		/* border-bottom: 2px solid #ececec; */
	}
	.Comset{
		padding: 10px 5px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ececec;
	}
	.Comset span:nth-child(1){
		font-size: 14px;
		color: #000000;
		font-weight: bolder;
	}
	.Comset span:nth-child(2){
		font-size: 14px;
		color: #000;
		font-weight: bolder;
	}
	.Comset span:nth-child(2):after{
		  content: '';
		  display: inline-block;
		   width: 10px;
		   height: 10px;
		   border-top: 1px solid #000;
		   border-left: 1px solid #000;
		   transform: rotate(135deg)
	}
	.PersonCom{
		margin: 12px 0px;
		
	}
	.PersonCom .content{
		
		margin-top: 5px;
	}
		
	.user{
		display: flex;
		align-items: center;
	}
	.user div{
		margin-right: 10px;
		
	}
	.user img{
		width: 44px;
		height: 44px;
		border-radius: 50%;
	}
	.buyValue{
		/* border: 1px solid red; */
		font-size: 14px;
		color: #999;
		margin-top: 8px;
	}
	.buyValue span{
		margin-right: 10px;
		/* border: 1px solid red; */
	}
</style>
