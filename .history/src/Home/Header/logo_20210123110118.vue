<template>
    <div>
          <div class="header_l" :style="{ width: opened ? '64px' : '200px' }">
      <img v-if="opened" src="@a/ImgSrc/Home-logo/dazoo-logo.png" alt="logo" />
      <img v-else src="@a/ImgSrc/Home-logo/logo.jpg" alt="logo" />
    </div>
    </div>
</template>