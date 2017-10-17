<template>
	<el-row class="container">
		<!-- header start -->
		<el-col :span="24" class="header">
			<transition name="fade" mode="out-in">
			<el-col :span="2" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				<transition name="fade" mode="out-in">
					<span v-if="collapsed">hello</span>
					<span v-else>hello vue</span>
				</transition>
			</el-col>
			</transition>
			<el-col :span="10">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner">
						{{sysUserName}}
						<img :src="this.sysUserAvatar" /> </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided>退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<!-- header end -->

		<el-col :span="24" class="main" v-loading.body="fullscreenLoading" element-loading-text="加载中...">
			<aside class="leftNav">
				<!-- <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span></el-menu-item>
					</template>
				</el-menu> -->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
					 unique-opened router  :collapse="isCollapse">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
			</aside>
			<section class="main-box">
				<el-col :span="24" class="content-wrapper">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</el-col>
			</section>
		</el-col>
	</el-row>
</template>

<script>
/*import VueRouter from 'vue-router'
import routes from '../routes'*/
export default {
	name: 'hello',
	data () {
		return {
			isCollapse: false,
			fullscreenLoading: false,    // 加载状态...
			msg: 'Welcome to Your Vue.js App',
			collapsed: false,            // 导航展开关闭
			sysUserAvatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
			sysUserName: '狗蛋'
		}
	},
	methods: {
		handleOpen: function () {

		},
		handleClose: function () {

		},
		handleSelect: function () {

		},
		collapse: function () {
			this.isCollapse = !this.isCollapse;
			console.log(this.isCollapse);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

a {
	color: #42b983;
}
.container {
	height: 100%;
	.header {
		background: #20a0ff;
		height: 60px;
		color:#fff;
		z-index:2;
		.logo {
			height:60px;
			font-size: 22px;
			padding-left:20px;
			padding-right:20px;
			border-color: rgba(238,241,146,0.3);
			border-right-width: 1px;
			border-right-style: solid;
			line-height:60px;
		}
		.tools {
			line-height:60px;
			text-align:left;
			i {
				cursor:pointer;
			}
		}
		.userinfo {
			text-align: right;
			padding-right: 35px;
			float: right;
			.userinfo-inner {
				cursor: pointer;
				line-height: 60px;
				color:#fff;
				img {
					width: 40px;
					height: 40px;
					border-radius: 20px;
					margin: 10px 0px 10px 10px;
					float: right;
				}
			}
		}
	}
}
.main {  //当有flex布局是不能用包含层级的样式形式  会影响到父元素样式
	display:flex;
	z-index:1;
	.leftNav {
		flex:0;
	}
	.main-box {
		flex:1;
		background:#fff;
		padding:20px;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
}
</style>
