<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'
</script>

<Hero title="Ideate" subtitle="Explore, suggest, risk, and innovate" />

<main class="content section" id="ideate">
  <h2>
    Ideate <em class="has-text-info">- Te Wehenga</em>
  </h2>

  <h3>Colours</h3>
  <p>Consider the colours that your client uses or wants to use and include them in your design if appropriate. When you're deciding on other colours to include there are two basic things to consider: what feeling the colours bring out in people, and whether they work with your existing colours.</p>

  <p>
    You can do some <a href="&quot;https://medium.com/swlh/what-is-your-soul-color-48cb568395fd&quot;">research online</a> to find out what <a href="&quot;https://99designs.com/blog/tips/how-color-impacts-emotions-and-behaviors/&quot;">feelings each colour evokes</a>, and to see whether the colours work together (or find new ones) you can use online tools such as <a href="&quot;https://coolors.co/&quot;">Coolors</a> or <a href="&quot;https://color.adobe.com/create/color-wheel&quot;">Adobe Color</a>.
  </p>

  <h3>Fonts</h3>
  <p>
    Headings can be fancy, body text must be readable, and subheadings can be somewhere in between. To begin, choose sets of three fonts that you feel work well together. A place to easily find free downloadable fonts and get combination recommendations is <a href="&quot;https://fonts.google.com&quot;">Google Fonts</a>.
  </p>

  <h3>Layout</h3>
  <p>
    Layout options can be presented with quick wireframe sketches of where the largest parts of the page will be positioned: <code>header</code>, <code>nav</code>, <code>main</code>, and <code>footer</code>.
  </p>

  <h3>Imagery</h3>
  <p>
    Consider the images you've been provided (if any) and decide which ones you'll use and where in your design they'll go. If you need more images, you can contact your client, or an excellent source of freely-usable images is <a href="&quot;https://unsplash.com/&quot;">Unsplash</a> where you can search by keyword, size, and even shape.
  </p>
</main>

<style>
  @media only screen and (max-width: 600px) {
    h2 em {
      display: block;
    }
  }
</style>
