<template>
	<el-row class="container">
		我是404！
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

