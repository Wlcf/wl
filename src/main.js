
// 按需引入
import { marquee } from './marquee.js'
// 默认引入
import tabs from './tabs.js'

// 函数的调用
marquee()
tabs()

// 引入css
import './styles/index.css'
// 引入less
import './styles/index.less'
// 根vue文件
import './app.vue' 
// 引入 图片
import gifSrc from './assets/1.gif'
const img = document.createElement('img')
img.src = gifSrc
document.body.appendChild(img)

import pngSrc from './assets/logo_small.png'
const img2 = document.createElement('img')
img2.src = pngSrc
document.body.appendChild(img2)
// 引入字体图标的css
import './assets/fonts/iconfont.css'

// import "./index.css";