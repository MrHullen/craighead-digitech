<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte.md'
</script>

<Hero title="Prototype" subtitle="Visualise, hack, create, analyse, and choose" />


<main class="content section" id="prototype">

  <h2>
    Prototype <em class="has-text-info">- Te Ao Mārama</em>
  </h2>
  
  <Box>
    <h2> Lo-fi prototype </h2>

    <p>
      A paper and pens is often the quickest way to put together a prototype to help you visualise layout, colour, and usability. Do a rough(ish) drawing of each page on a separate landscape A4, including your header and navigation.
    </p>

    <p>
      You can present the home page to users, and swap out the "pages" as they tap on each navigation button. It's primitive, but extremely effective for getting quick feedback. You can learn if your layout doesn't suit, or if your navigation isn't intuitive. Ask questions like "what do you think this button will do?" and "which menu do you expect that to be under?"
    </p>
  </Box>
    
  <Box>
    <h2> Hi-fi prototype </h2>

    <p>
      In some cases you will have already written some HTML for the project, and adding some layout CSS using Grid isn't a huge extra workload. It can be very quick and easy to try a few Grid layouts, screenshot them in the browser, and use them in place of wireframe sketches.
    </p>
    
    <p>
      You can then do the same sorts of client and user questions to get useful feedback to help choose an option and improve your design.
    </p>
  </Box>
</main>

<style>
  @media only screen and (max-width: 600px) {
    h2 em {
      display: block;
    }
  }
</style>