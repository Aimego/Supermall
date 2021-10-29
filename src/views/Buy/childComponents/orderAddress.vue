<template>
	<div id="or">
		<div class="myAr">
			<div class="left">
				<img src="../../../assets/img/icon/location.png" alt="">
			</div>
			<div class="right"  v-if="Address" @click="$router.push('/address')">
				<span class="mes">
					<span>{{ Address.name }}</span>
					<span>{{ Address.phone}}</span>
				</span>
				<span class="adr">{{PersonUser.Address[0].site.join(' ') + PersonUser.Address[0].detailSite}}</span>
			</div>
			<div class="right" @click="$router.push('/address')" v-else>
				<span class="adr">请选择一个地址</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'orderAddress',
		data(){
			return{
			}
		},
		computed:{
			...mapState(['PersonUser']),
			Address(){
				return this.PersonUser.Address.length != 0 ? this.PersonUser.Address[0] : ''
			}
		}
	}
</script>

<style scoped="scoped">
	#or{
		/* border: 1px solid red; */
		/* margin: 20px 20px; */
		
		
	}
	.myAr{
		background-color: white;
		border-radius: 20px;
		display: flex;
		align-items: center;
		padding: 20px 0px;
	}
	.myAr .left{
		flex: 15%;
		margin: 0px 10px;
		height: 35px;
	}
	.myAr .left img{
		max-width: 100%;
		max-height: 100%;
	}
	.myAr .right{
		flex: 85%;
		display: flex;
		flex-direction: column;
	}
	.myAr .right .adr{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		padding-right: 30px;
		position: relative;
	}
	.myAr .right .adr:after{
		content: '';
		position: absolute;
		width: 25px;
		height: 25px;
		top: 50%;
		transform: translateY(-50%);
		right: 5px;
		background: url(../../../assets/img/icon/arrow2.png) no-repeat center;
		background-size: 25px;
	}
	.myAr .right .mes{
		color: #000;
		font-size: 18px;
		font-weight: bold;
	}
	.myAr .right .mes span:nth-child(2){
		font-size: 14px;
		margin-left: 10px;
		color: #999999;
	}
	.myAr .right .mes,.adr{
		margin: 8px 0px;
	}
</style>
