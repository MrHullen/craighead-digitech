<script>
  export let icon
</script>

<div class="column is-narrow">
  <figure class="icon">
    <i class="{icon} fa-5x"></i>
  </figure>
</div>

<style>
  figure.icon {
    margin-top: 1.5rem;
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    div.is-narrow {
      display: none;
    }
  }
</style>