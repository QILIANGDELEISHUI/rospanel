<template>  
	<div class="container">  
	  <header class="header">  
		<!-- 头部内容 -->  
		<h1>网站标题</h1>  
		<!-- 这里可以放置Element Plus的导航条组件等 -->  
	  	<Header /> 
	  </header>  
	  <div class="content">  
		<aside class="aside">  
		  <!-- 侧边栏内容 -->  
		  <h2>侧边栏</h2>  
		  <!-- 这里可以放置Element Plus的菜单等组件 -->  
		</aside>  
		<main class="main">  
		  <!-- 主内容区 -->  
		  <h2>主内容区</h2>  
		  <p>这里是主内容...</p>  
		  <Main />
		</main>  
	  </div>  
	  <footer class="footer">  
		<!-- 底部内容 -->  
		<p>版权信息 &copy; 2023</p>  
	  </footer>  
	</div>  
  </template>  
	
  <script>  
  // 如果你需要在这个组件中使用Element Plus的组件，请确保已经安装并引入了Element Plus  
  // 这里的示例并没有直接使用Element Plus的组件，除了可能的注释说明  
  import Header from "./Header.vue"
  import Main from "./Main.vue"
  export default {  
	name: 'Index',
	components :{
		Header,
		Main
	}
  }  
  </script>  
	
  <style scoped>  
  .container {  
	display: flex;  
	flex-direction: column;  
	height: 100vh; /* 占据整个视窗的高度 */  
  }  
	
  .header, .footer {  
	padding: 20px;  
	text-align: center;  
	background-color: #f4f4f4; /* 示例背景色 */  
  }  
	
  .content {  
	display: flex;  
	flex: 1; /* 占据剩余空间 */  
  }  
	
  .aside {  
	width: 200px; /* 侧边栏宽度 */  
	background-color: #f0f2f5; /* 侧边栏背景色 */  
	padding: 20px;  
  }  
	
  .main {  
	flex-grow: 1; /* 主内容区占据剩余空间 */  
	padding: 20px;  
  }  
  </style>