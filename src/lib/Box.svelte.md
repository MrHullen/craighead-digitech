<script>
  export let title = 'Title' // default title
</script>

<div class="box">
  <strong>{title}</strong>
  <slot>
    <!-- text to display is none provided. -->
    <p><em>TODO: body text</em></p>
  </slot>
</div>

<style>
  strong {
    display: block;
  }

	/* Large screens */
	@media only screen and (min-width: 600px) {
		.box {
      margin-left: 2rem;
      margin-right: 2rem;
    }
	}
</style>