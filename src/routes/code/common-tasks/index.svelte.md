<script>
  import Hero from '$lib/Hero.svelte'
  import Tiles from '$lib/Tiles.svelte'

  const tiles = [
    { title: 'Images', icon: 'fas fa-comment-dots', iconColor: 'dodgerblue', target: 'images' },
    { title: 'Flow', icon: 'fas fa-route', iconColor: '', target: 'coding/flow' },
    { title: 'Projects', icon: 'fas fa-hard-hat', iconColor: 'orange', target: 'coding/projects' },
    { title: 'Common tasks', icon: 'fas fa-redo-alt', iconColor: 'hotpink', target: 'coding/common-tasks' },
  ]
</script>

<Hero title="Common tasks" subtitle="Don't reinvent the wheel - use these tips!" />

<section class="content section">

<Box title="Images">

center, left, and right (single image)

center, left, and right (images group)

image captions

inline vs block images

</Box>

</section>