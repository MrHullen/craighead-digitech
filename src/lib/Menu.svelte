<script>
  import { page } from '$app/stores'
</script>

<nav class="menu">

  <p class="menu-label">
    <a
    class="menu-link"
    class:has-text-primary={!$page.url.pathname.includes('/design')}
    class:has-text-dark={$page.url.pathname == '/design'}
    href="/design">
      <i class="icon fa-solid fa-compass-drafting fa-2x" />
      <span class="link-text"> Design </span>
    </a>
  </p>

  <p class="menu-label">
    <a
    class="menu-link"
    class:has-text-primary={!$page.url.pathname.includes('/html-css')}
    class:has-text-dark={$page.url.pathname == '/html-css'}
    href="/html-css">
      <i class="icon fa-solid fa-code fa-2x" />
      <span class="link-text"> HTML & CSS </span>
    </a>
  </p>

  <p class="menu-label">
    <a
    class="menu-link"
    class:has-text-primary={!$page.url.pathname.includes('/javascript')}
    class:has-text-dark={$page.url.pathname == '/javascript'}
    href="/javascript">
      <i class="icon fa-brands fa-js fa-2x" />
      <span class="link-text"> JavaScript </span>
    </a>
  </p>

  <p class="menu-label">
    <a
    class="menu-link"
    class:has-text-primary={!$page.url.pathname.includes('/svelte')}
    class:has-text-dark={$page.url.pathname == '/svelte'}
    href="/svelte">
      <img class="icon" src="/icons/svelte-icon.png" alt="Svelte icon" />
      <span class="link-text"> Svelte </span>
    </a>
  </p>

</nav>

<style>
  .menu {
    position: fixed;
    background-color: white;
    transition: width 200ms ease;
  }

  .menu-link {
    display: flex;
    align-items: center;
  }

  .menu-link i {
    min-width: 2rem;
  }

  .link-text {
    display: none;
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    .menu {
      bottom: 0;
      width: 100vw;

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .menu-label {
      margin: 1rem 1rem;
    }

    .menu-link {
      height: 3rem;
      justify-content: center;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    .menu {
      top: 0;
      width: 5rem;
      height: 100vh;
      padding: 3rem 1.5rem;
    }

    .menu-link {
      height: 5rem;
    }

    .menu:hover {
      width: 13rem;
    }

    .menu:hover .link-text {
      display: block;
      margin-left: 1rem;
    }
  }
</style>