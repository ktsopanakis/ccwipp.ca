<template>
  <Layout>
    <h1>About us</h1>
    <p>kostas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a
      voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto.</p>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="../favicon.png" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
  </Layout>
</template>

<script>
  export default {
    name: 'About',
    metaInfo: {
      title: 'About us',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'custom-body-class-about'
      }
    }
  }
</script>