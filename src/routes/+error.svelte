<script>
  import { page } from '$app/stores'
  import Hero from '$lib/Hero.svelte'
</script>

<Hero title="Oops!" subtitle="We couldn't find that page" />

<main class="content section">

  <p>I think back or <a href="/">home</a> is your best bet.

  <p> What's the error message? Well, it's a <code>{$page.status}</code> type error, which means <code>{$page.error.message}</code>.
  </p>

  <figure class="image">
    <img src="/images/drawings/error.svg" alt="Error" />
  </figure>

  <p class="notification box is-warning">
    <code>
      {$page.error.stack}
    </code>
  </p>

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

