<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'
</script>

<Hero title="Ideate" subtitle="Explore, suggest, risk, and innovate" />


<main class="content section" id="ideate">

  <h2>
    Ideate <em class="has-text-info">- Te Wehenga</em>
  </h2>
  
  <Box>
    <h2> Colours </h2>

    <p>
      Consider the colours that your client uses or wants to use and include them in your design if appropriate. When you're deciding on other colours to include there are two basic things to consider: what feeling the colours bring out in people, and whether they work with your existing colours.
    </p>

    <p>
      You can do some <a href="https://medium.com/swlh/what-is-your-soul-color-48cb568395fd">research online</a> to find out what <a href="https://99designs.com/blog/tips/how-color-impacts-emotions-and-behaviors/">feelings each colour evokes</a>, and to see whether the colours work together (or find new ones) you can use online tools such as <a href="https://coolors.co/">Coolors</a> or <a href="https://color.adobe.com/create/color-wheel">Adobe Color</a>.
    </p>
  </Box>
  
  <Box>
    <h2> Fonts </h2>

    <p>
      Headings can be fancy, body text must be readable, and subheadings can be somewhere in between. To begin, choose sets of three fonts that you feel work well together. A place to easily find free downloadable fonts and get combination recommendations is <a href="https://fonts.google.com">Google Fonts</a>.
    </p>
  </Box>
  
  <Box>
    <h2> Layout </h2>
  
    <p>
      Layout options can be presented with quick wireframe sketches of where the largest parts of the page will be positioned: <code>header</code>, <code>nav</code>, <code>main</code>, and <code>footer</code>.
    </p>
  </Box>
  
  <Box>
    <h2> Imagery </h2>
  
    <p>
      Consider the images you've been provided (if any) and decide which ones you'll use and where in your design they'll go. If you need more images, you can contact your client, or an excellent source of freely-usable images is <a href="https://unsplash.com/">Unsplash</a> where you can search by keyword, size, and even shape.
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