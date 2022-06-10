<script setup>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import { useMeta } from 'vue-meta'

components: {
  MenuIcon;
}




useMeta({
      title: 'CCWIPP',
      //titleTemplate: "%s | skata",
      htmlAttrs: {
        lang: 'en-US',
        amp: true
      },
      meta: [
        {charset: 'utf-8'},
        { Name: 'description', content: 'An example Vue application with vue-meta.' },
   
      ]
    })

</script>

<template>
    <metainfo>
      <template v-slot:title="{ content }">{{ content }} - Yay!</template>
     
    </metainfo>

<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/the-pension-plan_logo.png" alt="Woman's Face">
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p class="text-slate-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button class="text-slate-500 font-medium px-4 py-1 text-sm block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>
<button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
  Save changes
</button>
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
<p>a</p>
<menu-icon title="this is an icon!" fillColor="#FFAA00" :size="48" class=""/>
<p>b</p>
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
<a href="/about"> A link to about</a>
<router-view></router-view>
</template>

<style>

</style>
