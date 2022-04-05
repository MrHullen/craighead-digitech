<!-- ########## -->
<!-- JAVASCRIPT -->
<!-- ########## -->

<script>
  export let item = {
    tags: [],
    name: '',
    link: '',
  }
</script>

<!-- ########## -->
<!-- HTML       -->
<!-- ########## -->

<div class="box">
  <iframe src="{item.link}/preview" title="{item.name}" />
  <p class="has-text-centered"><strong>{item.name}</strong></p>
  <div class="tags">
    {#each item.tags as tag}
      <span class="tag is-link is-light">{tag}</span>
    {/each}
  </div>
</div>

<!-- ########## -->
<!-- CSS        -->
<!-- ########## -->

<style>
  /* three cards (boxes) per row */
  .box {
    width: 30%;
    max-width: 30%;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
  }

  /* fix weird sizing with last box */
  .box:last-child {
    margin-bottom: 1.5rem;
  }
</style>