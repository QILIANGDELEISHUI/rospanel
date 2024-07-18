<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header">
				<Header />
			</el-header>
			<el-container>
				<el-aside width="200px" class="aside">
					<Aside />
				</el-aside>
				<el-main class="main">
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
// 如果你需要在这个组件中使用Element Plus的组件，请确保已经安装并引入了Element Plus  
// 这里的示例并没有直接使用Element Plus的组件，除了可能的注释说明  
import Header from "./Header.vue"
// import Main from "./Main.vue"
import Aside from "./Aside.vue"
export default {
	name: 'Index',
	components: {
		Header,
		// Main,
		Aside
	}
}  
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	/* 占据整个视窗的高度 */
}

.header,
.footer {
	padding: 20px;
	text-align: center;
	background-color: #c83030;
	/* 示例背景色 */
}

.content {
	display: flex;
	flex: 1;
	/* 占据剩余空间 */
}

.aside {
	width: 200px;
	/* 侧边栏宽度 */
	background-color: #0f428e;
	/* 侧边栏背景色 */
	padding: 20px;
}

.main {
	flex-grow: 1;
	/* 主内容区占据剩余空间 */
	background-color: #0f8e39;
	padding: 20px;
}
</style>