<script>
  import { page } from '$app/stores'
</script>

<nav class="menu">
  <p class="menu-label">
    <a class="menu-link" class:is-active={$page.path == '/'} href="/">
      <i class="fas fa-home fa-2x" />
      <span class="link-text">Home</span>
    </a>
  </p>
  <p class="menu-label">
    <a class="menu-link" class:is-active={$page.path.includes('/input')} href="/input">
      <i class="fas fa-keyboard fa-2x" />
      <span class="link-text">Input</span>
    </a>
  </p>
  <p class="menu-label">
    <a class="menu-link" class:is-active={$page.path.includes('/design')} href="/design">
      <i class="fas fa-drafting-compass fa-2x" />
      <span class="link-text">Design</span>
    </a>
  </p>
  <p class="menu-label">
    <a class="menu-link" class:is-active={$page.path.includes('/code')} href="/code">
      <i class="fas fa-code fa-2x" />
      <span class="link-text">Code</span>
    </a>
  </p>
  <p class="menu-label">
    <a class="menu-link" class:is-active={$page.path.includes('/test')} href="/test">
      <i class="fas fa-tasks fa-2x" />
      <span class="link-text">Test</span>
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

  .is-active {
    color: black;
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