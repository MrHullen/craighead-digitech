<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte'
</script>

<Hero title="Test" subtitle="Making sure you've built a quality outcome" />

<section class="content section">

## Validating

  <Box title="HTML">

    [Online HTML validator](https://validator.w3.org/#validate_by_input)

  </Box>

  <Box title="CSS">

    [Online CSS validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

  </Box>

  <Box title="JavaScript">

    Code formatting (`Alt`+`Shift`+`F`)

    Error messages in [VS Code Problems tab](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_errors-and-warnings)

  </Box>

  ---

  <Box title="Expected">

- What the programmer assumes the user will be inputting when using the program correctly.

- Input that the user puts in when they follow all of the rules and assumptions that the programmer has made.


  </Box>

  <Box title="Boundary">

- Inputs from the user that are on the extreme ends of valid input.

- Is usually acceptable input.

- Tested because it often highlights very subtle errors in code.


  </Box>

  <Box title="Invalid">

- Inputs from the user that are not acceptable for continuation of the program.

- User should be warned that they have input an invalid value and prompted to try or start again.


  </Box>

<!-- 
  <h2 id="console">console.log</h2>

  ---

  <h2 id="testing-types">Testing types</h2>

  

  <Box title="Expected" />

  <Box title="Boundary" />

  <Box title="Invalid" />

  ---

  <h2 id="usability-heurisitcs">Usability Heuristics</h2>

  ---
 -->

</section>