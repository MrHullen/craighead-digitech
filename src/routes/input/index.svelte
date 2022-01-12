<script>
  import Hero from '$lib/Hero.svelte'

  let copyText = `Is this the real life? Is this just fantasy? Caught in a landslide. No escape from reality. Open your eyes. Look up to the skies and see. I'm just a poor boy, I need no sympathy. Because I'm easy come, easy go. A little high, little low. Anyway the wind blows, doesn't really matter to me, to me.`
  let copyTextSpan = copyText
  let userText = ''

  function handleKeyup(event) {
    copyTextSpan = ''
    let i = 0
    while (i < userText.length) {
      if (userText[i] === copyText[i]) {
        copyTextSpan += `<span class="correctLetter">${copyText[i]}</span>`
      } else {
        copyTextSpan += `<span class="incorrectLetter">${copyText[i]}</span>`
      }
      i++
    }
    copyTextSpan += copyText.slice(i, copyText.length)
  }
</script>

<Hero title="Input" subtitle="If you can type easily then that's one less thing to think about" />

<svelte:window on:keyup={handleKeyup} />

<section class="content section">
  
  <span class="correctLetter">Correct</span>
  <span class="incorrectLetter">Incorrect</span>

  <p>
    {@html copyTextSpan}
  </p>

  <!-- svelte-ignore a11y-autofocus -->
  <textarea autofocus bind:value={userText} placeholder="Start typing the text above..."></textarea>
</section>

<style>
  /* Needs to be global to avoid Svelte changing the class names for scoping. */
  :global(.correctLetter) {
    background-color: hsl(141, 53%, 53%);
    color: white;
  }

  :global(.incorrectLetter) {
    background-color: hsl(48, 100%, 67%);
    color: rgba(0, 0, 0, 0.7);
  }

  textarea {
    resize: none;
    width: 100%;
    font-size: 1em;
    border: none;
  }
</style>