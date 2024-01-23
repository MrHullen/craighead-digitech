<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'

  let active = false

  function toggle() {
    active = !active
  }
</script>

<Hero title="Tech Stack" subtitle="The technologies we use in class and how they're related" />

<main class="content section">
  <h1>Tech Stack</h1>

  <figure class="image preview" on:click={toggle}>
    <img src="/images/tech-stack.jpg" alt="Tech stack" />
  </figure>

  <h2>Seniors</h2>

  <p>
    <a href="https://classroom.google.com/">Google Classroom</a> is our school's classroom management system. The teacher creates a Classroom and Assignments as per normal. Similarly, the school is setup as an Organisation on <a href="https://github.com">GitHub</a> and the teacher creates a Classroom and Assignments there in essentially the same way. Google Assignments include template documents for students to complete, and GitHub Assignments include template <a href="&quot;https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories&quot;">code repositories</a> for students to complete.
  </p>

  <p>The Google Assignment is the entry point for the students. Each Google Assignment includes a link to the corresponding GitHub Assignment.</p>

  <p>
    For design and planning work, students write into their own copies of the template documents using Google Docs. To create their outcomes, they write into their own copies of the template repositories using either <a href="https://github.com/features/codespaces">GitHub's Codespaces</a> for remote development in their browser, or <a href="https://desktop.github.com/">GitHub Desktop</a> and <a href="https://code.visualstudio.com/">Visual Studio Code</a> if they want to develop locally on their device.
  </p>

  <div class="modal" on:click={toggle} class:is-active={active}>
    <div class="modal-background" />
    <div class="modal-content">
      <figure class="image">
        <img src="/images/tech-stack.jpg" alt="Tech stack" />
        <figcaption class="has-text-light">The technologies we use in class and how they're related.</figcaption>
      </figure>
    </div>
    <button class="modal-close is-large" aria-label="close" on:click={toggle} />
  </div>
</main>

<style>
  main h1 {
    display: none;
  }

  .preview {
    width: 20%;
    margin: 2rem auto;
    cursor: pointer;
  }
</style>
