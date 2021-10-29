<template>
	<div id="menu">
		<div class="orderList">
			<div class="listItem orderTop">
				<span><img src="../../../../assets/img/icon/Collect.png" alt=""></span>
				<span>我的订单</span>
			</div>
			<div class="orderShow">
				<div>
					<span><img src="../../../../assets/img/order/waitpay.png" alt=""></span>
					<span>待付款</span>
				</div>
				<div>
					<span><img src="../../../../assets/img/order/waitreceive.png" alt=""></span>
					<span>待收货</span>
				</div>
				<div>
					<span><img src="../../../../assets/img/order/Waitwrite.png" alt=""></span>
					<span>待评价</span>
				</div>
				<div>
					<span><img src="../../../../assets/img/order/backpay.png" alt=""></span>
					<span>退款/售后</span>
				</div>
			</div>
		</div>
		
		<ul class="menuList">
			<li  class="listItem" @click="NavMenu(index)" v-for="(item,index) in list" :key="index">
				<span><img :src="item.icon" alt=""></span>
				<img src="" alt="">
				<span>{{item.title}}</span>
			</li>
		</ul>
		
		<ul class="menuList">
			<li  class="listItem" @click="" v-for="(item,index) in Setlist" :key="index">
				<span><img :src="item.icon" alt=""></span>
				<img src="" alt="">
				<span>{{item.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import {message} from '../../../../common/utils.js'
	import {mapState} from 'vuex'
	export default{
		name:'MenuList',
		data(){
			return{
				list:[
					{
						title:'我的收藏',
						icon:require('../../../../../public/person/Mycollect.png')
					},
					{
						title:'个人信息',
						icon:require('../../../../../public/person/vita.png')
					},
					{
						title:'收货地址',
						icon:require('../../../../../public/person/address.png')
					}
					
				],
				Setlist:[
					{
						title:'投诉建议',
						icon:require('../../../../../public/person/complain.png')
					},
					{
						title:'关于我们',
						icon:require('../../../../../public/person/relation.png')
					},
					{
						title:'客服咨询',
						icon:require('../../../../../public/person/Myservice.png')
					},
					{
						title:'我要推广',
						icon:require('../../../../../public/person/extend.png')
					},
					{
						title:'我的分销',
						icon:require('../../../../../public/person/distribute.png')
					}
				]
			}
			},
			computed:{
				...mapState(['PersonUser'])
			},
			methods:{
				NavMenu(index){
					if(this.PersonUser.name){
						switch(index){
							case 0 : this.$router.push('/collect');
							break;
							case 1 : this.$router.push('/information');
							break;
							case 2 : this.$router.push('/address');
							break;
						}
					}else message()
				}
			}
		
	}
</script>

<style scoped="scoped">
	#menu{
		margin: 20px 10px;
	}
	.orderList{
		border-radius: 10px;
		background-color: white;
		padding: 10px;
	}

	.orderShow{
		display: flex;
	}
	.orderShow div{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20px;
		font-size: 14px;
	}
	.orderShow div span:nth-child(1){
		width: 20px;
		height: 20px;
	}
	.orderShow div span{
		margin: 5px 0px;
	}
	.orderShow div span img{
		width: 100%;
		height: 100%;
	}
	.menuList{
		border-radius: 10px;
		list-style: none;
		padding: 0;
		margin-top: 10px;
		background-color: white;
		padding: 10px;
		
	}
	.listItem{
		padding: 8px;
		display: flex;
		align-items: center;
		position: relative;
		border-bottom: 1px solid #eee;
		font-size: 14px;
	}
	.listItem:after{
		content: '';
		position: absolute;
		height: 25px;
		width: 25px;
		right: 0px;
		background: url(../../../../assets/img/icon/arrow2.png) no-repeat center;
		background-size: 25px;
	}
	.listItem span:nth-child(1){
		height: 20px;
		margin-right: 15px;
	}
	.listItem span img{
		width: 100%;
		height: 100%;	
	}
</style>
