<template>
	<div id="message">
		<NavBar class="nav-home">
			<div class="comBack" slot="left" @click="$router.back()"><img src="~assets/img/icon/back.png" alt=""></div>
			<div slot="center">个人信息</div>
		</NavBar>
		<Scroll class="content">
			<div class="Avatar">
				<span><img :src="PersonUser.avatar" alt=""></span>
				<span>{{PersonUser.name}}</span>
			</div>
			
			<ul class="InformData">
				<li>
					<span>我的手机</span>
					<span><input class="ipt" type="text" @blur="SetPhone($event.target.value)" placeholder="请输入手机号"></span>
				</li>
				<li>
					<span>真实姓名</span>
					<span><input class="ipt" type="text" @blur="SetRealName($event.target.value)" placeholder="请输入姓名"></span>
				</li>
				<li>
					<span>身份证</span>
					<span><input class="ipt" type="text" @blur="SetIdCard($event.target.value)" placeholder="请输入身份证"></span>
				</li>
				<li>
					<span>性别</span>
					<span>
						<el-select v-model="sex" @blur="SetSex(sex)" placeholder="保密">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							></el-option>
						</el-select>
					</span>
				</li>
			</ul>
			
		</Scroll>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import {mapState,mapMutations} from 'vuex'
	export default{
		name:'PersonMessage',
		data(){
			return{
				options:[
					{
						label:'保密',
						value:'保密'
					},
					{
						label:'男',
						value:'男'
					},
					{
						label:'女',
						value:'女'
					}
				],
				sex:''
			}
		},
		computed:{
			...mapState(['PersonUser'])
		},
		components:{
			NavBar,
			Scroll
		},
		methods:{
			...mapMutations(['SetPhone','SetRealName','SetIdCard','SetSex'])
		}
		
	}
</script>

<style scoped="scoped">
	#message{
		height: 100vh;
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
	.Avatar{
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 10px solid #eee;
	
	}
	.Avatar span:nth-child(1){
		width: 72px;
		height: 71px;
		overflow: hidden;
		border-radius: 50%;
		margin: 10px 0px;
	}
	.Avatar span:nth-child(2){
		font-size: 14px;
		margin-bottom: 10px;
	}
	.Avatar span img{
		width: 100%;
		height: 100%;
	}
	.InformData{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.InformData li{
		font-size: 14px;
		display: flex;
		/* justify-content: space-between; */
		align-items: center;
		/* margin: 0px 10px; */
		padding: 10px 10px;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	.InformData li span:nth-child(1){
		margin-right: 15px;
		flex: 30%;
	}
	.InformData li span:nth-child(2){
		/* margin-right: 15px; */
		flex: 70%;
		
		text-align: right;
		margin-right: 15px;
	}
	.InformData li:after{
		position: absolute;
		content: '';
		right: 0;
		width: 25px;
		height: 25px;
		background: url(../../../../assets/img/icon/arrow2.png) no-repeat center;
		background-size: 25px;
	}
	.content{
		height: calc(100% - 44px);
	}
	/deep/ .el-input__inner{
		border: none;
		padding: 0;
		height: 100%;
	}
	/deep/ .el-cascader{
		line-height: 100%;
	}
	/deep/ .el-input__suffix{
		
		right:-25px;
		line-height: none;
	}
	/deep/ .el-input__icon{
		line-height:0;
		display: none;
	}
	.ipt{
		border: none;
	}
</style>
