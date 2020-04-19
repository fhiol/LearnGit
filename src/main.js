import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data?',
//   //专门针对get请求参数的拼接
//   params: {
//     type: 'sell',
//     pag: 2
//   }
// }).then(res => {
//   console.log(res)
// })




// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data?',
//     //专门针对get请求参数的拼接
//     params: {
//       type: 'sell',
//       pag: 2
//     }
//   })
// ]).then(resluts => {
//   console.log(resluts)
// })


// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data?',
//     //专门针对get请求参数的拼接
//     params: {
//       type: 'sell',
//       pag: 2
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

//数组的解构
// const name = ['re', 'sd', 'ds', 'vd']
// // const name1 = name[0]
// // const name2 = name[1]
// // const name3 = name[2]
// // const name4 = name[3]

// const [name1, name2, name3, name4] = name



// axios.all([
//   axios({
//     baseURL: 'http://123.207.32.32:8000',
//     url: '/home/multidata',
//     timeout: 5000
//   }),
//   axios({
//     baseURL: 'http://123.207.32.32:8000',
//     url: '/home/data?',
//     timeout: 5000,
//     //专门针对get请求参数的拼接
//     params: {
//       type: 'sell',
//       pag: 2
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// axios({
//   url: '/category'
// }).then(res => {
//   console.log(res)
// })








// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// instance1({
//   url: '/home/data?',
//   timeout: 5000,
//   params: {
//     type: 'sell',
//     pag: 2
//   }
// }).then(res => {
//   console.log(res)
// })



// 5.封装request模块
import { request } from "./network/request";


// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request({
//   baseConfig: {
//
//   },
//   success: function (res) {
//
//   },
//   failure: function (err) {
//
//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  // console.log(err);
})