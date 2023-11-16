<script>
  import IconColumn from '$lib/BoxHelpers/IconColumn.svelte'
  import TextColumn from '$lib/BoxHelpers/TextColumn.svelte'
  import { PortableText } from '@portabletext/svelte'

  export let tutorial
</script>

{#if tutorial.link && tutorial.icon}
  <a href={tutorial.link}>
    <section class="columns box">
      <IconColumn icon={tutorial.icon} />
      <TextColumn title={tutorial.title} text={tutorial.description} />
    </section>
  </a>
{:else if !tutorial.link && tutorial.icon}
  <section class="columns box">
    <IconColumn icon={tutorial.icon} />
    <TextColumn title={tutorial.title} text={tutorial.description} />
  </section>
{:else}
  <section class="box">
    <h2>{tutorial.title}</h2>
    <PortableText value={tutorial.description} />
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