<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'
</script>

<Hero title="Reflect" subtitle="Identify, consider, link, and critique" />

<main class="content section" id="reflect">

  <h2>
    Reflect <em class="has-text-info">- Te Whakaata</em>
  </h2>

  <h3> Implications </h3>

  <Box>
    <h2> Legal </h2>

    <p>
      Consider whether your design abides by the <a href="https://www.justice.govt.nz/justice-sector-policy/key-initiatives/harmful-digital-communications/">Harmful Digital Communications Act</a> (explained on <a href="https://www.netsafe.org.nz/advice/harmfuldigitalcommunications/">NetSafe</a> and <a href="https://www.consumerprotection.govt.nz/general-help/consumer-laws/online-safety-laws-and-rules/#harmful-digital-communications">Consumer Protection</a>). If there is any personal information included, or images of people, consider if you have ensured their permission has been provided and their personal data is kept private.
    </p>
  </Box>

  <Box>
    <h2> Copyright </h2>

    <p>
      Generally, if the client has provided images then they likely own them, but it pays to check. Any additional images you use you need to check you have permission to use them, either from the owner directly or under their License. If you need to give credit to the sources, you can do that in the image caption or in the footer.
    </p>
  </Box>

  <Box>
    <h2> Ethical </h2>

    <p>
      Ethical considerations are things that aren't technically illegal but you shouldn't do them anyway. Check that your outcome doesn't exploit anyone, and encourages responsible behaviour.
    </p>
  </Box>

  <Box>
    <h2>Cultural</h2>

    <p>
    Any cultures depicted in your outcome need to be shown fairly and accurately. Enure that you've included any alternative names for organisations, any mottos, etc. and that the spelling and macrons are correct. 
    </p>



  </Box>

  <hr />

  <h3> User considerations </h3>

  <Box>
    <h2> Accessibility </h2>

    <p>
      Can it be access on different devices and browsers (<em>Chrome, Safari, Firefox, Edge, and Internet Explorer; and mobile and desktop</em>)?
    </p>

    <p>
      Can it be used by differently abled people (<em>colour-blind safe colours, appropriate-sized and well-contrasting text, labels for inputs, aria labels where appropriate, etc.</em>)?
    </p>
  </Box>

  <Box title="">
    <h2> Usability </h2>

    <p>
      Does the app work the way a user would expect (<em>do links look like links, headings in logical hierarchy, etc.</em>)?
    </p>
  </Box>

  <Box>
    <h2> Functionality </h2>

    <p>
      Do the parts of the app do what they're supposed to (<em>do the links go to the right pages, do the images show up, etc.</em>)?
    </p>
  </Box>

  <Box>
    <h2> Aesthetics </h2>

    <p>
      Does the app appeal to the right audience?
    </p>

    <p>
      Does it use design principles (<em>complimentary colours, white space, alignments, etc.</em>)?
    </p>
  </Box>

  <hr />
  
  <h3> Justification </h3>

  <Box>
    <h2> Appropriateness </h2>

    <p>
      Describe how your design is appropriate for your purpose and audience. You <b>must</b> link the design choices your made (which colours, fonts, layout, and imagery) to the purpose and audience that you defined at the beginning.
    </p>

    <blockquote>
      Example: The blue colour I chose as the primary colour is appropriate for my business audience because blue is associated with professionalism.
    </blockquote>
  </Box>
  
  <Box>
    <h2> Aesthetics </h2>

    <p>
      Why are the colours, fonts, layouts, and imagery appropriate for your purpose and audience?
    </p>
  
  </Box>
  
  <Box>
    <h2> Process </h2>

    <p>
      Which methods helped the most, which didn't.
    </p>

    <p>
      What you would do next time and where you can take it from here.
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