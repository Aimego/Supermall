import { Message } from 'element-ui'


	// 防抖动 (事件触发多次，只执行最后一次)
export function	debounce(func,delay){ // (需要被执行的内容，防抖延迟时间)
					let timer = null
					// 使用闭包来保存timer变量
					return function(){
						if(timer) clearTimeout(timer)
						timer = setTimeout(()=>{
							func()
						},delay)
					}
			}

// 登录正则
export const RegUser = /^[\u4e00-\u9fa5\w]{2,8}$/
export const RegPass = /^[\w]{6,16}$/

export function FormReg(reg,val){
	return new Promise((resolve,reject)=>{
		if(reg.test(val)){
			resolve({condition:true})
		}else{
			reject({
				condition:false,
				text:'输入格式不正确',
				})
		}
	})
}

export function message(){
	return Message({
	message:'请先登录',
	offset:30
})
}


export function formatDate(date, fmt) {

  //1.获取年份
  //y+ 1个或者多个y
  //y* 0个或者多个y
  //y? 0个或者1个y
  if (/(y+)/.test(fmt)) {

    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

  }
  //2.
  let o = {

    'M+': date.getMonth() + 1,

    'd+': date.getDate(),

    'h+': date.getHours(),

    'm+': date.getMinutes(),

    's+': date.getSeconds()

  };

  for (let k in o) {

    if (new RegExp(`(${k})`).test(fmt)) {

      let str = o[k] + '';

      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));

    }

  }

  return fmt;

};

function padLeftZero (str) {//保证时间的位数，不够左侧加0

  return ('00' + str).substr(str.length);

};