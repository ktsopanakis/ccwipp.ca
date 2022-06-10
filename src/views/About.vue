<template>
    <!-- <metainfo>
      <template v-slot:title="{ content }">{{ content }} - Yay!</template>
    </metainfo> -->
    <div class="about">
        about
    </div>
</template>

<script setup>

 metaInfo =  () => {
    //const title = this.title
    return {
      title: title + ' from Options API'
    }
  }
</script>