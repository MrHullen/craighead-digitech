<script>
  import IconColumn from '$lib/BoxHelpers/IconColumn.svelte'
  import TextColumn from '$lib/BoxHelpers/TextColumn.svelte'
  import { PortableText } from '@portabletext/svelte'

  export let link
  export let icon
  export let title
  export let description
  export let text

  if (description) text = description
</script>

{#if link && icon}
  <a href={link}>
    <section class="columns box">
      <IconColumn {icon} />
      <TextColumn {title} {text} />
    </section>
  </a>
{:else if !link && icon}
  <section class="columns box">
    <IconColumn {icon} />
    <TextColumn {title} {text} />
  </section>
{:else}
  <section class="box">
    <h2>{title}</h2>
    <PortableText value={text} />
  </section>
{/if}

<style>
	/* Large screens */
	@media only screen and (min-width: 600px) {
		.box {
      margin-left: 2rem;
      margin-right: 2rem;
    }
	}

  a:not(:last-child) {
    display: block;
    margin-bottom: 2em;
  }
</style>