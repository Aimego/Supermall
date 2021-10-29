<template>
	<div id="login">
		
		<form class="myFrom" action="">
			<h3>欢迎登入</h3>
			<div>
				<label class="tex" for="">用户名</label>
				<input class="ipt" :class="resU" type="text" :value="user.name" @blur="desirName" placeholder="请输入用户名">
			</div>
			<div>
				<label class="tex" for="">密码</label>
				<input class="ipt" :class="resP" :value="user.password" type="password" @blur="desirPass"  placeholder="请输入密码">
			</div>
			<div class="btn">
				<button type="button"  @click="Login(user)">登录</button>
				<button type="button"  @click="reset">重置</button>
			</div>
		</form>
	</div>
</template>

<script>
	import {RegUser,RegPass,FormReg} from '../../common/utils.js'
	import {mapMutations} from 'vuex'
	export default{
		name:'login',
		data(){
			return{
				user:{
					name:'',
					password:'',	
				},
				success:true,
				success2:true,
			}
		},
		computed:{
			resU(){
				return this.success ? '' : 'low'
			},
			resP(){
				return this.success2 ? '' : 'low'
			}
		},
		methods:{
			...mapMutations(['UserLogin']),
			reset(){
				
				Object.keys(this.user).forEach((val,index,arr)=> this.user[val] = '')				
			},
			desirName(e){
				let name = e.target.value
				this.user.name = name
				FormReg(RegUser,name).then(res=>{
					this.user.name = name
					this.success = res.condition
				}).catch(res=>{
					this.success = res.condition
				})
			},
			desirPass(e){
				let pass = e.target.value
				this.user.password = pass
				FormReg(RegPass,pass).then(res=>{
					this.user.password = pass
					this.success2 = res.condition
				}).catch(res=>{
					this.success2 = res.condition
				})
			},
			Login(user){
				
				if(this.success & this.success2){
					this.$router.push('/person')
					this.UserLogin(user)
				}
				
			}
		},
	}
</script>

<style scoped="scoped">
	
	#login{
		height: 100vh;
		background-color: #F0F2F5;
		border: 1px solid #F0F2F5;
	}
	h3{
		text-align: center;
		margin: 15px;
		color: #000;
	}
	.myFrom{
		border-radius: 10px;
		background-color: white;
		margin: 100px auto;
		width: 80%;
		box-shadow: 0 0 20px #f2f6fc;
		display: flex;
		flex-direction: column;
	}
	.myFrom div{
		display: flex;
		text-align: center;
		align-items: center;
		margin: 10px 20px;
		font-size: 14px;
		
	}
	.myFrom div .tex{
		flex: 30%;
	}
	.myFrom div .ipt{
		flex: 70%;
	}
	.myFrom .btn{
		display: flex;
		justify-content: center;
	}
	.myFrom .btn button{
		border: 1px solid white;
		background-color: #409eff;
		padding: 8px;
		border-radius: 6px;
		margin: 0px 10px;
		color: white;
		font-size: 12px;
	}
	.ipt{
		border: 1px solid #dcdfe6;
		height: 30px;
		border-radius: 5px;
		padding: 5px;
	}
	.low{
		border: 1px solid red;
	}
</style>
