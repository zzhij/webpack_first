<template>
	<el-row class="container-table">
		<!-- header start -->
		<el-col :span="24" class="topBar">
			<div>我是来演示的！</div>
		</el-col>
		<!-- header end -->

		
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
.topBar {
	height:100%;
	background:#ccc;
}
</style>
