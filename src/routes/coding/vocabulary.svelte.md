<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte.md'
</script>

<Hero title="Vocabulary" subtitle="Talk the talk and sound like a professional" />

<section class="content section">

  <h2 id="comments">Comments</h2>

    Comments can be put anywhere in your code and don't affect how it works. They're useful for explaining what chunks of code do.

  <Box title="One-line comments">

    These are short explanations of what a chunk of code does. They only take up one line of code, or they can be added to the end of a line of code.

```javascript
// this is a comment
```

```javascript
// receives two numbers as arguments and returns the sum of them
function add(x, y) {
  return x + y
}
```

    > **Hotkey**: press `Ctrl` + `/` for a one-line comment

  </Box>

  <Box title="Multi-line comments">

    These are longer or more detailed explanations of what a chunk of code does. They take up multiple lines of code but you can fold them in your editor so they don't clutter it up.

```javascript
/* This is a
 * multiline comment.
 */
```

```javascript
/* The add functions takes two numbers as
 * arguments and returns their sum.
 */
function add(x, y) {
  return x + y
}
```

```javascript
/* function name: add
 * arguments: two numbers
 * returns: the sum of the two numbers
 */
function add(x, y) {
  return x + y
}
```

    > **Hotkey**: press `Ctrl`+`Shift`+`/` for a multi-line comment

  </Box>

  <Box title="What to write">

    When writing comments, try to focus on what the code does rather than how it does it. If people want to know how it does it, then they can read the code. Usually, they just want a simple explanation of what it does.

✅ Good:
```javascript
// returns the sum of two numbers
```

❌ Bad: 
```javascript
// takes two arguments and assigns them to x and y variables, then adds those together, then returns that
```

  </Box>

</section>
<section class="content section">

  <h2 id="html-terms">HTML Terms</h2>

  <Box title="Tags">

    HTML is a tag-based language, which means that everything is wrapped in tags that describe what it is. A piece of content (a paragraph for example) has a tag at the beginning to show where the paragraph starts, and a tag at the end to show where it ends.

    <figure>
      <img src="/images/simple-p-tag.png" alt="Annotated diagram of an HTML element.">
      <figcaption>

        Image courtesy of [ClearlyDecoded.com](https://clearlydecoded.com/anatomy-of-html-tag)

      </figcaption>

    </figure>


  </Box>

  <Box title="Elements">

  </Box>

  <Box title="Attributes">

  </Box>

</section>
<section class="content section">

  <h2 id="css-terms">CSS Terms</h2>

  <Box title="Selector">
    
  </Box>

  <Box title="Property">
    
  </Box>

  <Box title="Value">
    
  </Box>

</section>
<section class="content section">

  <h2 id="javascript-terms">JavaScript Terms</h2>

  <Box title="Variable">
    
  </Box>

  <Box title="Conditional">
    
  </Box>

  <Box title="Iteration">
    
  </Box>

  <Box title="Function">
    
  </Box>

  <Box title="Component">
    
  </Box>

</section>