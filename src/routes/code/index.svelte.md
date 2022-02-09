<script>
  import Hero from '$lib/Hero.svelte'
  import Tiles from '$lib/Tiles.svelte'

  const tiles = [
    { title: 'Setup', icon: 'fas fa-laptop-code', iconColor: 'limegreen', target: '/code/setup' },
    { title: 'Vocabulary', icon: 'fas fa-comment-dots', iconColor: 'dodgerblue', target: '/code/vocabulary' },
    // { title: 'Flow', icon: 'fas fa-route', iconColor: '', target: 'code/flow' },
    { title: 'Projects', icon: 'fas fa-hard-hat', iconColor: 'orange', target: '/code/projects' },
    // { title: 'Common tasks', icon: 'fas fa-redo-alt', iconColor: 'hotpink', target: 'code/common-tasks' },
  ]
</script>

<Hero title="Code" subtitle="Building your outcome the way you want" />

<section class="content section">

  <Tiles tiles={tiles} />

</section>
