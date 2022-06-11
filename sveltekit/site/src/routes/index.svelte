<a href="/about">About my site</a>

<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/download.png" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">{$_('page_title')}</p>
  </div>
</div>
<LocaleSwitcher
        value={$locale}
        on:locale-changed={e => setupI18n({ withLocale: e.detail }) }
/>

<script>
  import { locale,_} from 'svelte-i18n'
  import {setupI18n} from '../i18b.js'
  //import '../i18b.js'
  import LocaleSwitcher from '../components/LocaleSwitcher.svelte'
</script>