<template>
  <Layout>
    <h1>About us</h1>
    <p>{{ $t('key1') }} kostas Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a
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
 <span>
    Current locale: {{ $context.locale }}
  </span>
   <transition name="fade">
    <div key='en' v-if="$context.locale=='en-gb'">
   <g-image  alt="Example image" src="../assets/images/flag_en.png" width="135" />
    </div><div key='de' v-else-if="$context.locale=='de-de'"> 
   <g-image  alt="Example image" src="../assets/images/flag_de.png" width="135" />
   </div>
   </transition>
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
    },
 data: function () {
    return {
      imageUrl: "flag_en.png"
    }
  }
  }
</script>

<style>

</style>