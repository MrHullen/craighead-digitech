<script>
  import { page } from '$app/stores'
</script>

<nav class="menu">
  <p class="menu-label">
    <a
    class="menu-link"
    class:has-text-primary={!$page.url.pathname.includes('/empathise')}
    class:has-text-dark={$page.url.pathname == '/empathise'}
    href="/empathise">
      <i class="icon fa-solid fa-comments fa-2x" />
      <span class="link-text"> Empathise </span>
    </a>
  </p>
  <p class="menu-label">
    <a
    class="menu-link"
    class:has-text-primary={!$page.url.pathname.includes('/ideate')}
    class:has-text-dark={$page.url.pathname.includes('/ideate')}
    href="/ideate">
      <i class="icon fa-solid fa-lightbulb fa-2x" />
      <span class="link-text"> Ideate </span>
    </a>
  </p>
  <p class="menu-label">
    <a
    class="menu-link"
    class:has-text-primary={!$page.url.pathname.includes('/prototype')}
    class:has-text-dark={$page.url.pathname.includes('/prototype')}
    href="/prototype">
      <i class="icon fa-solid fa-hammer fa-2x" />
      <span class="link-text"> Prototype </span>
    </a>
  </p>
  <p class="menu-label">
    <a
    class="menu-link"
    class:has-text-primary={!$page.url.pathname.includes('/iterate')}
    class:has-text-dark={$page.url.pathname.includes('/iterate')}
    href="/iterate">
      <i class="icon fa-solid fa-arrows-rotate fa-2x" />
      <span class="link-text"> Iterate </span>
    </a>
  </p>
  <p class="menu-label">
    <a
    class="menu-link"
    class:has-text-primary={!$page.url.pathname.includes('/reflect')}
    class:has-text-dark={$page.url.pathname.includes('/reflect')}
    href="/reflect">
      <i class="icon fa-solid fa-magnifying-glass fa-2x" />
      <span class="link-text"> Reflect </span>
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