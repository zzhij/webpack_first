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
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-message"></i>
							<span slot="title">导航一</span>
						</template>
						<el-menu-item-group>
							<span slot="title">案例</span>
							<el-menu-item index="1-1">TotoList</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<span slot="title">选项4</span>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">导航二</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-setting"></i>
						<span slot="title">导航三</span>
					</el-menu-item>
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
	.header {
		background: #20a0ff;
		height: 60px;
		color:#fff;
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
	},
	.main {
		.leftNav {
			
			display:flex;
			float:left;
		}
		.main-box {

		}
		.el-menu-vertical-demo:not(.el-menu--collapse) {
			width: 200px;
			min-height: 400px;
		}
	}
}
</style>
