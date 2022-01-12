<script>
  // defaults for tile values if none are provided.
  export let tiles = [
    {
      title: 'No title provided',
      icon: null,
      iconColor: 'black',
      target: '.'
    }
  ] 
</script>

<div class="tile is-ancestor">
  {#each tiles as tile}
    <div class="tile is-parent">
      <a class="tile is-child box" href="{tile.target}">
        <i class="{tile.icon} fa-5x" style="color: {tile.iconColor};"></i>
        <span>{tile.title}</span>
      </a>
    </div>
  {/each}
</div>

<style>
  .tile {
    justify-content: center;
  }

  a {
    text-align: center;
  }

  span {
    display: block;
    margin-top: 1em;
  }

  .is-parent {
    max-width: 13em;
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    .is-parent {
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>