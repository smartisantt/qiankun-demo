<template>
  <div id="app">
    <el-menu
      router
      :default-active="$route.path"
      mode="horizontal"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/app-vue">Vue</el-menu-item>
      <el-menu-item index="/app-react">react</el-menu-item>
    </el-menu>
    <router-view />
    <div id="appContainer"></div>
  </div>
</template>
