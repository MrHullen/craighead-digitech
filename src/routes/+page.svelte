<script>
  import Hero from '$lib/Hero.svelte'
</script>

<Hero title="Digital Technology" subtitle="A collection of guides and resources" />

<main class="content section">
  <h2> Welcome </h2>

  <p> ...to Digital Technology at  <a href="https://craighead.school.nz/">Craighead Diocesan School</a>!  </p>

  <figure class="image">
    <img src="/images/drawings/lifestyle.svg" alt="Design lifestyle">
  </figure>

</main>

<style>
  figure {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 50%;
    min-width: 300px;
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    img {
      width: 80%;
      min-width: 80%;
    }
  }
</style>