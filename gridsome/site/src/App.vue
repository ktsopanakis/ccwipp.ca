<template>
<MainLayout><router-view /></MainLayout>
  
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import MainLayout from '~/layouts/Main.vue'

export default {
  components: {
    MainLayout
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        },
        {
          key: 'mykey',
          name: 'mykey',
          content: 'mykey'
        }
      ]
    }
  }
}
</script>
