<template>
  <header>
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>
 
<style lang="scss" scoped>
header {
  background: #3d453e;
  padding: 1em;
  color: $theme_colour;
}

p {
  color: white;
  padding: 0em;
  margin-bottom: 0em;
  font-weight: bold;
}
</style>

