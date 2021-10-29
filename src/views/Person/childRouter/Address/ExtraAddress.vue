<template>
	<div class="extraAd">
		<NavBar class="nav-home">
			<div class="comBack" slot="left" @click="$router.back()"><img src="~assets/img/icon/back.png" alt=""></div>
			<div slot="center">{{Title}}</div>
		</NavBar>
		<form action="" class="myForm">
			<ul class="add">
				<li><label for="" class="tex">收货人:</label><input class="ipt" v-model.lazy="address.name" placeholder="请输入收货人姓名" type="text"></li>
				<li><label for="" class="tex">手机号:</label><input  class="ipt" v-model.lazy="address.phone" placeholder="请输入联系手机号码" type="text"></li>
				<!-- <li class="Tag"><label for="" class="tex">所在地:</label><input  placeholder="请选择省-市-区" class="ipt" type="text"></li> -->
				<li class="Tag"><label for="" class="tex">所在地</label>
					<el-cascader
					class="ipt cascader"
					v-model="address.site"
					:options="options"
					placeholder="请选择省-市-区"
					>
					</el-cascader>
				</li>
				
				<!-- <li><label for="" class="tex">详细地址:</label><input  class="ipt" type="" placeholder="如:道路,门牌号,小区,楼栋号,单元室等" ></li> -->
				<li><label for="" class="tex">详细地址:</label><textarea class="ipt" name="" placeholder="如:道路,门牌号,小区,楼栋号,单元室等" v-model.lazy="address.detailSite" id="" rows="2"></textarea></li>
				<!-- <li class="Tag"><label for="" class="tex">地址标签:</label></li> -->
				<li class="Tag"><label for="" class="tex">地址标签:</label>
					<el-select v-model="address.tag" class="ipt">
						<el-option
						v-for="item in Taglabel"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						>
						</el-option>
					</el-select>
				</li>
				<!-- <li><label for="" class="tex">设为默认地址:</label><input  class="ipt" type="text"></li> -->
				<li><label for="" class="tex">设为默认地址:</label>
					<el-switch
						v-model="address.active"
						active-color="#13ce66"
						inactive-color='#909399'
					>
					</el-switch>
				</li>
			</ul>
		</form>
		<EditBtn  @click.native="SaveAddress()">
			<div class="BtnSty" slot="btn">确认提交</div>
		</EditBtn>
	</div>
</template>

<script>
	
	
	import NavBar from 'components/common/navbar/NavBar.vue'
	import EditBtn from '../components/EditBtn.vue'
	import {mapActions,mapState} from 'vuex'
	
	export default{
		name:'ExtraAddress',
		data(){
			return{
				EditIndex:'',
				address:{
					name:'',
					phone:'',
					site:[],
					detailSite:'',
					tag:'',
					active:false,
				},
				options:[
					{
						label:'江西省',
						value:'江西省',
						children:[
						{
							label:'南昌市',
							value:'南昌市',
							children:[
								{
									label:'东湖区',
									value:'东湖区'
								},
								{
									label:'南昌县',
									value:'南昌县'
								}
							]
						},
						{
							label:'景德镇市',
							value:'景德镇市'
						},
						]
					},
					{
						label:'山东省',
						value:'山东省',
						children:[
							{
								label:'济南市',
								value:'济南市'
							},
							{
								label:'青岛市',
								value:'青岛市',
								children:[
									{
										label:'即墨市',
										value:'即墨市'
									},
									{
										label:'四方区',
										value:'四方区'
									}
								]
							}
						]
					}
				],
				Taglabel:[
					{
						label:'家',
						value:'家'
					},
					{
						label:'学校',
						value:'学校'
					},
					{
						label:'公司',
						value:'公司'
					}
				]
			}
		},
		components:{
			NavBar,
			EditBtn,
		},
		computed:{
			...mapState(['PersonUser']),
			Title(){
				return this.EditIndex ? '编辑地址' : '新增地址'
			},
			// 不要在computed中使用函数，否则会导致某些时候默认触发
			// EditOrJoin(){
			// 	return this.EditIndex ? this.EditAddress(this.EditIndex) : this.JoinAddress(this.address)
			// }
		},
		methods:{
			...mapActions(['JoinAddress','EditAddress']),
			SaveAddress(){
				this.EditIndex ? this.EditAddress(this.EditIndex) : this.JoinAddress(this.address)
				// 保存地址后，返回到 address 页面，但是此时 address 页面 $router.back() 的话就又会回到此页面，
				// 这是因为push是会记录到history中的 而$router.back()就是返回到之前从哪里跳转来到这个页面的就从哪里回去，
				// 所以这里最好使用 $router.back() 这样不会记录到history中，而上一层路由再次返回时，因为没有被记录再history
				// 中，所以就不会再跳转回来了
				// this.$router.push('/address')
				this.$router.back()
			}
		},
		created(){
			this.EditIndex = this.$route.query.index
			if(this.EditIndex){
				this.address = this.PersonUser.Address[this.EditIndex]
			}
		}
	}
</script>

<style scoped="scoped">
	#extraAd{
		height: 100vh;
	}
	.BtnSty{
		/* margin-top: 30%;
		width:90% ;
		border-radius: 8px; */
		bottom: 0;
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
	.myForm ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.myForm ul li{
		display: flex;
		/* border: 1px solid red; */
		padding: 10px;
		align-items: center;
		position: relative;
		border-bottom: 1px solid #eee;
		
		
	}
	.myForm ul .Tag:after{
		/* content: '';
		position: absolute;
		right: 0;
		width: 25px;
		height: 25px;
		background: url(../../../../assets/img/icon/arrow2.png) no-repeat center;
		background-size: 25px; */
	}
	.myForm ul li .tex{
		flex: 30%;
		font-size: 14px;
	}
	.myForm ul li .ipt{
		margin-right: 20px;
		flex: 70%;
		border: none;
		
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
	}
	/* 修改input中placeholder样式 */
	::-webkit-input-placeholder{
		font-size: 12px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
