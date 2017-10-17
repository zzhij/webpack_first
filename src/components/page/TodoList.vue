<template>
	<el-row class="">
		<el-col :span="24">
			<el-form>
				<el-form-item label="创建任务">
					<el-col :span="10">
						<el-input placeholder="请输入内容..." v-model="newTodolist"></el-input>
					</el-col>
					<el-col :span="3">
						<el-button type="primary" @click="addTodolist">创建</el-button>
					</el-col>
				</el-form-item>
				<el-form-item>
					<span><b style="color:red">5</b>&nbsp;&nbsp;项任务没有完成！</span>
				</el-form-item>
			</el-form>
			<el-col :span="24">
				<div class="line-bar"></div>
			</el-col>
			<el-col :span="24" class="todo-list">
				<transition name="fade">
					<ul v-if="tableData.length > 0">
						<li v-for="item in tableData" class="li-style-show">
							<el-row :span="24">
								<el-col :span="22">
									<el-col :span="1">
										<el-checkbox v-model="item.flag" :class="{complete:item.flag}"></el-checkbox>
									</el-col>
									
									<el-col :span="10">
										<span @dblclick="editItem(item)" v-show="item != editTodo" :class="{complete:item.flag}">{{item.name}}</span>
										<el-input v-focus="item == editTodo" v-model="item.name" @blur="saveItem(item)" v-show="item == editTodo" placeholder="请输入..."></el-input>

									</el-col>
								</el-col>
								<el-col :span="2">
									<i class="el-icon-delete2" @click="deleteData(item)"></i>
								</el-col>
							</el-row>
						</li>
					</ul>
					<p v-else>
						还没有数据
					</p>
				</transition>
			</el-col>
		</el-col>

	</el-row>
</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			newItem: "",
			newTodolist: "",
			editTodo:"",
			tableData:[
				{
					flag:true,
					name:"ceshi"
				}
			]
		}
	},
	methods: {
		deleteData: function(item) {
			var index = this.tableData.indexOf(item);
			this.tableData.splice(index,1);
		},
		saveItem: function(item) {
			this.editTodo = "";
		},
		editItem: function(item) {
			this.editTodo = item;
		},
		addTodolist: function () {        //增加任务
			let newlist = {
				flag:false,
				name:this.newTodolist
			};
			this.tableData.push(newlist);
			this.newTodolist = "";
		},
		handleOpen: function () {

		},
		handleClose: function () {

		},
		collapse: function () {
			this.isCollapse = !this.isCollapse;
			console.log(this.isCollapse);
		}
	},
	directives: {
		"focus": {
			update(el,binding) {
				// console.log(el);
				// console.log(binding);
				if (binding.value) {
					//console.log(el.children[0]);
					el.children[0].focus();
				}
			}
		}
	},
	computed: {
		
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

$line-color:#ccc;
.line-bar {
	border-bottom:1px solid $line-color;
	box-shadow:inset 0 1px 1px rgba(0,0,0,.075);
	transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.todo-list {
	padding:20px 10px;
}
.complete {
	color:red;
}
.todo-list ul li {
	padding:10px;
	border-bottom:1px solid #ccc;
	box-shadow:outset 0 1px 1px rgba(0,0,0,.075);
	transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.todo-list ul li:last-of-type {
	border:none;
}
.li-style-show {
	line-height:56px;
	i {
		cursor:pointer;
	}
}
</style>
