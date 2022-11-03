<script>
  import {PortableText} from '@portabletext/svelte'

  export let title
  export let text
</script>


<div class="column">
  <h2>{title}</h2>
  <PortableText value={text} />
</div>
