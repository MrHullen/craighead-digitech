<!-- ########## -->
<!-- JAVASCRIPT -->
<!-- ########## -->

<script>
  // Components
  import Hero from '$lib/Hero.svelte'
  import Card   from '$lib/Card.svelte'
  import Footer from '$lib/Footer.svelte'

  // Objects
  import { data } from '$lib/data'

  // initialise page content to the defaults
  let uniqueTags = []
  let items = data
  let search = ''

  // check all the items' tags to collect a set of unique tags to display on the page near the search
  for (const item of data) {
    for (const tag of item.tags) {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag)
      }
    }
  }

  // filter() changes the items array so that it only displays items that have the tag that's in the search field
  function filter() {
    // reset the items array ready to be filled
    items = []

    // iterate through the data and if it has the search tag then add the item to the items array
    for (const item of data) {
      if (item.tags.includes(search)) {
        items.push(item)
      }
    }
  }

  // handleKeydown() checks if the user pressed enter, and if they did they it calls filter()
  function handleKeydown(event) {
    if (event.key == 'Enter') {
      filter()
    }
	}
</script>

<!-- ########## -->
<!-- HTML       -->
<!-- ########## -->

<!-- capture the keypresses so we know when 'enter' is pressed for the search -->
<svelte:window on:keydown={handleKeydown} />

<Hero title="Digital Technology" subtitle="A collection of guides and resources" />

<main class="section">
  <!-- return false stops the form from reloading the page -->
  <form onsubmit="return false">
    <!-- displays all of the unique tags and searches for them if they're clicked -->
    <section class="tags">
      {#each uniqueTags as tag}
        <span class="tag is-link is-light" on:click={ () => { search = tag; filter() }}> {tag} </span>
      {/each}
    </section>
    
    <!-- search that narrows the results if used (blank for 'all') -->
    <section id="search" class="field">
      <label class="label" for="search"> Search </label>
      <div class="control">
        <input class="input" id="search" aria-label="search" bind:value={search} placeholder="Search..." />
      </div>
      <p class="help is-success">
        {#if search.length}
          { items.length } items found.
        {/if}
      </p>
    </section>
    <button class="button is-success" on:click={filter}> Search </button>
  </form>
  
  <!-- iterates through the array of items and displays each one as a card if it contains the search tag (is there is no search tag it displays all of them) -->
  <section id="results" class="section">
    {#each items as item}
      <Card {item} />
    {:else}
      <p>No items found.</p>
    {/each}
  </section>
</main>

<Footer />


<!-- ########## -->
<!-- CSS        -->
<!-- ########## -->

<style>
  section.tags {
    /* puts the tags on their own line at the top of the form */
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  section#search {
    min-width: 20rem;
  }

  section.tags span {
    cursor: pointer;
  }

  form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  form section {
    margin: 0 0;
  }

  /* label isn't necessary for visual users (placeholder text is enough) */
  /* aria-label in the HTML will be read out for visually impaired users */
  section#search label {
    display: none;
  }

  /* show the cards in rows */
  section#results {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem 5%;
  }  
</style>
