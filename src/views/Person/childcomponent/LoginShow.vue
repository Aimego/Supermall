<template>
	<div id="loginShow">
		<div class="user">
			<div class="icon">
					<img :src="avatar" alt="">
			</div>
			<div class="operate">
				<span v-if="!login" @click="$router.push('/login')">登录</span>
				<span v-else>{{this.PersonUser.name}}</span>
				<span class="tag">
					<img :src="login ? require('../../../assets/img/icon/actTag.png') : require('../../../assets/img/icon/power.png')" alt="">
				{{login ? '查看个人权益' : '点击登录享受更多权益'}}
				</span>
			</div>
		</div>
		
		<div class="vip" v-if="login">
			<span class="text">普通会员</span>
			<span class="power">会员权益</span>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'LoginShow',
		computed:{
			...mapState(['PersonUser']),
			login(){
				return this.PersonUser.name ? true : false
			},
			avatar(){
				return this.login ? this.PersonUser.avatar : 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
			}
		},
	}
</script>

<style scoped="scoped">
	#loginShow{
		height: 170px;
		background: url(../../../assets/img/icon/0230c3f1f5b1d5e63e18ad427d72a15.png) no-repeat center;
		background-size: 100%;
		position: relative;
	}
	.vip{
		width: 92%;
		height: 35px;
		
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 10px;	
	}
	.vip .text{
		color: #f4d04a;
		font-weight: bold;
		font-size: 14px;
		position: absolute;
		left: 50px;
		top: 50%;
		transform: translateY(-50%);
	}
	.vip .power{
		background-color:#f4d04a ;
		color: #000;
		padding: 6px 12px;
		border-radius: 15px;
		font-size: 14px;
		font-weight: bold;
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
	}
	.user{
		display: flex;
		padding-top: 10px;
	}
	.user .icon{
		height: 71px;
		/* width: 50px; */
		flex: 20%;
		margin: 0px 10px;
		border-radius:  50%;
		overflow: hidden;
		
	}
	
	.user .icon img{
		width: 100%;
		height: 100%;
	}
	.user .operate{
		flex: 80%;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.operate span:nth-child(1){
		color: white;
		margin: 10px;
		font-size: 20px;
		font-weight: bold;
		position: absolute;
	}
	.operate .tag{
		font-size: 12px;
		padding: 5px 24px 5px;
		position: absolute;
		background-color:#ADD8E6;
		border-radius: 10px;
		top: 62%;
		background-size: 20px;
		display: flex;
		align-items: center;
	}
	.operate .tag img{
		width: 15px;
		height: 15px;
		position: absolute;
		left: 6px;
		top: 3px;
		
	}
	/* .operate .tag:before{
		content: '';
		position: absolute;
		left: 5px;
		top: 2px;
		width: 15px;
		height: 15px;
		background: url(../../../assets/img/icon/power.png) no-repeat left center;
		background-size: 15px;
	} */
	
	
	.operate .tag:after{
		content: '';
		position: absolute;
		right: 5px;
		width: 15px;
		height: 15px;
		background: url(../../../assets/img/icon/arrow2.png) no-repeat right center;
		background-size: 15px;
	}
</style>
