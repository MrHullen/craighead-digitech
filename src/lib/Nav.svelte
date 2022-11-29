<script>
	import { page } from '$app/stores'
  import { login, logout } from '$lib/auth'
  import { user } from '$lib/stores'

	// Boolean value for burger menu on mobile
  // toggled off whenever $page changes
  let active = false
  function toggle() {
    active = !active
  }
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item"
    on:click={() => { active = false }}
    aria-current="{$page.url.pathname == '/' ? 'page' : undefined}"
    href="/">
      <img src="/logo.png" alt="Craighead logo">
      <span class="has-text-dark"> Craighead Digital Technology </span>
    </a>

    
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      on:click={toggle}
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div
  class="navbar-menu"
  class:is-active={active}>
    <div class="navbar-end">
			
      <div class="navbar-item has-dropdown is-hoverable">
        <a
        class="navbar-link"
        on:click={toggle}
        href="/">
          Students
        </a>

        <div class="navbar-dropdown">
          <!-- <a
          class="navbar-item"
          class:is-active={$page.url.pathname.includes('/setup')}
          on:click={toggle}
          aria-current="{$page.url.pathname.includes('/setup') ? 'page' : undefined}"
          href="/setup">
            <i class="fas fa-laptop-code"></i>
            <span> Setup </span>
          </a> -->
      
          <a
          class="navbar-item"
          class:is-active={$page.url.pathname.includes('/input')}
          on:click={toggle}
          aria-current="{$page.url.pathname.includes('/input') ? 'page' : undefined}"
          href="/input">
            <i class="fas fa-keyboard"></i>
            <span> Input </span>
          </a>

          <a
          class="navbar-item"
          class:is-active={$page.url.pathname.includes('/code')}
          on:click={toggle}
          aria-current="{$page.url.pathname.includes('/code') ? 'page' : undefined}"
          href="/vocabulary">
            <i class="fas fa-comment-dots"></i>
            <span> Vocabulary </span>
          </a>
          
          <a
          class="navbar-item"
          class:is-active={$page.url.pathname.includes('/code')}
          on:click={toggle}
          aria-current="{$page.url.pathname.includes('/code') ? 'page' : undefined}"
          href="/projects">
            <i class="fas fa-code" />
            <span> Projects </span>
          </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a
        class="navbar-link"
        on:click={toggle}
        href="/">
          Teachers
        </a>
      
        <div class="navbar-dropdown">
          <a
          class="navbar-item"
          class:is-active={$page.url.pathname.includes('/stack')}
          on:click={toggle}
          aria-current="{$page.url.pathname.includes('/stack') ? 'page' : undefined}"
          href="/stack">
            <i class="fa-solid fa-layer-group"></i>
            <span> Tech Stack </span>
          </a>
        
          <a
          class="navbar-item"
          class:is-active={$page.url.pathname.includes('/shop')}
          on:click={toggle}
          aria-current="{$page.url.pathname.includes('/shop') ? 'page' : undefined}"
          href="/shop">
            <i class="fa-solid fa-bag-shopping"></i>
            <span> Resource Shop </span>
          </a>
        </div>
      </div>

      {#if $user == undefined}
      <div class="navbar-item">
        <button
          class="button is-primary"
          on:click={toggle, login}>
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
          <span> Login </span>
        </button>
      </div>
      {:else}
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link"
        on:click={toggle}
        href="/">
          <img class="icon" src="{$user.photoURL}" alt="Profile" />
          <span>{$user.displayName}</span>
        </a>

        <div class="navbar-dropdown">
          <a
            class="navbar-item"
            on:click={toggle, logout}>
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
            <span> Logout </span>
          </a>
        </div>
      </div>
      {/if}
    </div>
  </div>
</nav>

<style>
  span {
    margin-left: 0.5em;
  }
</style>