<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'
</script>

<Hero title="Test" subtitle="Making sure you've built a quality outcome" />

<section class="content section">
  <h2> Validating </h2>

  <Box>
    <h2> HTML </h2>

    <ul>
      <li> <a href="https://validator.w3.org/#validate_by_input">Online HTML validator</a> </li>
    </ul>
  </Box>

  <Box>
    <h2> CSS </h2>

    <ul>
      <li> <a href="https://jigsaw.w3.org/css-validator/#validate_by_input">Online CSS validator</a> </li>
    </ul>
  </Box>

  <Box>
    <h2> JavaScript </h2>

    <ul>
      <li> Code formatting (<code>Alt</code>+<code>Shift</code>+<code>F</code>) </li>
      <li> <code>console.debug('<em>Error message</em>')</code> </li>
      <li> Error messages in <a href="https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_errors-and-warnings">VS Code Problems tab</a> </li>
    </ul>
  </Box>

</section>
<section class="content section">
  <h2> Testing </h2>

  <Box>
    <h2> Expected </h2>

    <ul>
      <li> What the programmer assumes the user will be inputting when using the program correctly. </li>
      <li> Input that the user puts in when they follow all of the rules and assumptions that the programmer has made. </li>
    </ul>
  </Box>

  <Box>
    <h2> Boundary </h2>

    <ul>
      <li> Inputs from the user that are on the extreme ends of valid input. </li>
      <li> Is usually acceptable input. </li>
      <li> Tested because it often highlights very subtle errors in code. </li>
    </ul>
  </Box>

  <Box>
    <h2> Invalid </h2>

    <ul>
      <li> Inputs from the user that are not acceptable for continuation of the program. </li>
      <li> User should be warned that they have input an invalid value and prompted to try or start again. </li>
    </ul>
  </Box>

<!-- 

  <h2 id="usability-heurisitcs">Usability Heuristics</h2>

  ---
 -->

</section>