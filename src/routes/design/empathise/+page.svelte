<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'
</script>

<Hero title="Empathise & Define" subtitle="Observe, ask, listen, define, and focus" />

<main class="content section" id="empathise-define">
  <h2>
    Empathise & Define <em class="has-text-info">- Te Pō</em>
  </h2>

  <h3>Purpose</h3>
  <p>Most often in school you'll be given a brief the will guide you in defining the purpose of the outcome. Your purpose should be clear and specific, so that it will help you decide whether what you've created is appropriate or not. To define the purpose, you'll need to do some research to understand what you're working on. If what you've made fulfils the purpose - great! If not, it's time for another ideation session or iteration of improvement.</p>

  <blockquote>Example: you might be given the brief &quot;create a web app for a kindergarten to help the kids learn.&quot; You then research what they need by looking online, visiting one, talking to teachers, and asking some parents. Once you know a bit about it, you define the purpose as &quot;the web app will improve kids' visual recognition of animals, shapes, numbers, colours, patterns, and letters.&quot; With this as your web app's purpose, you can easy test and say whether your web app fulfils this or not.</blockquote>

  <h3>Audience</h3>
  <p>It can be tempting to say that your outcome is for &quot;everybody.&quot; While it's true that &quot;everybody&quot; should be able to use it, the audience that you're *targeting* should be more specific. Defining for a very specific audience makes design decisions easier because you can choose the option that most appeals to that group. It also makes it much easier to justify later in the process because you can link your decisions strongly to your purpose and audience.</p>

  <blockquote>Example: say you're designing a web app and you've defined the audience as &quot;kindergarteners&quot;. You need to choose a set of colours and are deciding between some shades of blue, or very bright primary colours. The shades of blue might appeal more to &quot;everybody,&quot; but you're designing for little kids so the bright primary colours are more appropriate.</blockquote>
</main>

<style>
  @media only screen and (max-width: 600px) {
    h2 em {
      display: block;
    }
  }
</style>
