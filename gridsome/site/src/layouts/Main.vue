<template>
  <div id="main-wrapper">
    <header />
      <transition name="fade" appear>
        <main> <!-- a wrapper for slot is needed -->
          <slot /> <!-- the content -->
        </main>
      </transition>
    <footer />
  </div>
</template>

<static-query>

</static-query>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>