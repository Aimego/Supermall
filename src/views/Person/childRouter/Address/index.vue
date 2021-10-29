<template>
	<div id="adr">
		<NavBar class="nav-home">
			<div class="comBack" slot="left" @click="$router.back()"><img src="~assets/img/icon/back.png" alt=""></div>
			<div slot="center">我的地址</div>
		</NavBar>
		
		<Scroll class="content">
			<div class="AddressList" v-for="(item,index) in PersonUser.Address" @click="$router.push({path:'/extraAddress',query:{index}})">
				<div class="left">
					<span>{{item.name.slice(0,1)}}</span>
					<!-- <img src="../../../../assets/img/icon/location.png" alt=""> -->
				</div>
				
				<div class="right">
					<span class="user">
						<span class="name">{{item.name}}</span>
						<span class="phone">{{item.phone}}</span>
						<span class="active" v-show="item.active">{{'默认'}}</span>
					</span>
					
					<span class="text">
						{{item.site.join(' ') + item.detailSite}}
					</span>
				</div>
			</div>
		</Scroll>
		
		<EmptyStyle :myShow="$store.state.PersonUser.Address.length === 0">
			<div slot="img" class="emptyImg"><img src="~assets/img/icon/CarEempty.png" alt=""></div>
			<div slot="emptyText"></div>
		</EmptyStyle>
		
		<!-- 组件添加事件记得加上native，否则会认为是组件中的自定义事件 -->
		<EditBtn @click.native="$router.push('/extraAddress')">
			<div  class="BtnSty" slot="btn">添加新的地址</div>
		</EditBtn>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import EditBtn from '../components/EditBtn.vue'
	import EmptyStyle from 'components/common/EmptyStyle/index.vue'
	import {mapState} from 'vuex'
	export default{
		name:'Address',
		components:{
			NavBar,
			Scroll,
			EditBtn,
			EmptyStyle
		},
		computed:{
			...mapState(['PersonUser'])
		},
	}
</script>

<style scoped="scoped">
	#adr{
		height:100vh ;
	}
	.empty .emptyImg:after{
		content: '- 您还没有添加任何地址 -';
	}
	.BtnSty{
		bottom: 0;
		/* width: 80%; */
	}
	.nav-home{
		color: #000;
		background-color: white;
		font-weight: bolder;
		font-size: 18px;
		z-index: 999;
		
	}
	.comBack{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-home div img{
		width: 20px;
		height: 20px;
	}
	.content{
		height: calc(100% - 44px);
	}
	.AddressList{
		display: flex;
		align-items: center;
		margin: 10px 5px;
	}
	.AddressList .left{
		margin: 0px 10px;
		text-align: center;
		flex: 15%;
		padding: 16px 0px;
		border-radius: 50%;
		background-color: #ffe2bd;
	}
	.AddressList .left span{
		font-size: 16px;
		color: #ff8352;
		font-weight: bold;
		max-width: 70%;
		max-height: 70%;
	}
	.AddressList .right{
		flex: 85%;
		display: flex;
		flex-direction: column;
		padding: 10px 40px 10px 5px;
		position: relative;
	}
	.AddressList .right:after{
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 25px;
		height: 25px;
		right: 5px;
		background: url(../../../../assets/img/icon/edit.png) no-repeat center;
		background-size: 25px;
		
	}
	.AddressList .right .user{
		position: relative;
	}
	.AddressList .right .name{
		color: #000;
		font-size: 18px;
		font-weight: bold;
		margin-right: 10px;
	}
	.AddressList .right .phone{
		color: #969696;
		font-size: 12px;
	}
	.AddressList .right .active{
		border-radius: 3px;
		margin-left: 10px;
		border: 1px solid #ff8352;
		padding: 3px;
		font-size: 14px;
		color: #ff8352;
		position: absolute;
		top: -10px;
	}
	.AddressList .right .text{
		margin-top: 5px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		line-height: 22px;
		color: #000;
	}
</style>
