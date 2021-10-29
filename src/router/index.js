import Vue from 'vue'
import Vuerouter from 'vue-router'
import App from '../main.js'

Vue.use(Vuerouter)

const Home = ()=> import('../views/Home/Home')
const Category = ()=> import('../views/Category/Category')
const Car = ()=> import('../views/Car/Car')
const Person = ()=> import('../views/Person/Person')
const Detail = ()=> import('../views/Detail/Detail')
const Login = ()=> import('../views/login')
const Collect = ()=> import('../views/Person/childRouter/Collect/Collect')
const Information = ()=> import('../views/Person/childRouter/Information')
const Address = ()=> import('../views/Person/childRouter/Address')
const ExtraAddress = ()=> import('../views/Person/childRouter/Address/ExtraAddress')
const BuyOrder = ()=> import('../views/Buy')
const routes = [
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/Car',
		component:Car
	},
	{
		path:'/person',
		component:Person
	},
	{
		path:'/detail/:id',
		component:Detail
	},
	{
		path:'/login',
		component:Login
	},
	{
		path:'/collect',
		component:Collect
	},
	{
		path:'/information',
		component:Information
	},
	{
		path:'/address',
		component:Address
	},
	{
		path:'/extraAddress',
		component:ExtraAddress
	},
	{
		path:'/buyorder',
		name:'buy',
		component:BuyOrder
	}
]

const router = new Vuerouter({
	routes,
	// mode:'history'
})




export default router