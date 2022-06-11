<script>
    import "../app.css";
    import { waitLocale } from 'svelte-i18n'
    export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    return waitLocale()
  }
  </script>
  
  <h1>lauyout</h1>
  <slot />