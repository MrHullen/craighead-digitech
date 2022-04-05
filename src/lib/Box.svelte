<script>
  export let title = 'Title' // default title
</script>

<section class="box">
  {#if title != 'Title'}
    <h2>{title}</h2>
  {/if}
  <slot>
    <!-- text to display is none provided. -->
    <p><em>TODO: body text</em></p>
  </slot>
</section>

<style>
	/* Large screens */
	@media only screen and (min-width: 600px) {
		.box {
      margin-left: 2rem;
      margin-right: 2rem;
    }
	}
</style>