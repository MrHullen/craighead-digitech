<script>
	export let segment

	// Boolean value for burger menu on mobile
  // toggled off whenever $page changes
  let active = false
  function toggle() {
    active = !active
  }
</script>

<style>
  span {
    margin-left: 0.5em;
  }
</style>

<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item"
      class:is-active={segment === undefined}
      on:click={() => { active = false }}
      aria-current="{segment === undefined ? 'page' : undefined}"
      href="/">
      <i class="fas fa-home" />
      <span>Home</span>
    </a>

    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      on:click={toggle}
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="mainNavbar">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="mainNavbar"
       class="navbar-menu"
       class:is-active={active}>
    <div class="navbar-start">
			
      <a class="navbar-item"
         class:is-active={segment === 'input'}
         on:click={toggle}
				 aria-current="{segment === 'input' ? 'page' : undefined}"
         href="input">
         <i class="fas fa-keyboard"></i>
        <span>Input</span>
			</a>
			
      <a class="navbar-item"
         class:is-active={segment === 'design'}
         on:click={toggle}
				 aria-current="{segment === 'design' ? 'page' : undefined}"
         href="design">
         <i class="fas fa-drafting-compass" />
        <span>Design</span>
			</a>
			
      <a class="navbar-item"
         class:is-active={segment === 'code'}
         on:click={toggle}
				 aria-current="{segment === 'code' ? 'page' : undefined}"
         href="code">
         <i class="fas fa-code" />
        <span>code</span>
			</a>
			
      <a class="navbar-item"
         class:is-active={segment === 'test'}
         on:click={toggle}
				 aria-current="{segment === 'test' ? 'page' : undefined}"
         href="test">
         <i class="fas fa-tasks"></i>
        <span>Test</span>
			</a>
			
    </div>
  </div>
</nav>