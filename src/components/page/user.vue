<template>
	<el-row class="container">
		<div>我是来演示的user！</div>
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
