<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte.md'
</script>

<Hero title="Vocabulary" subtitle="Talk the talk and sound like a professional" />

<section class="content section">

  <h2 id="html-terms">HTML Terms</h2>

    <figure>
      <img style="max-width: 500px; margin: 0 auto;" src="/images/element.jpg" alt="Annotated diagram of an HTML element.">
      <figcaption>
        A paragraph is the content here, with &lt;p&gt; as the opening tag and &lt;/p&gt; as the closing tag.
      </figcaption>
    </figure>

    <figure>
      <img style="max-width: 500px; margin: 0 auto;" src="/images/attributes.jpg" alt="Annotated diagram of an HTML element.">
      <figcaption>
        The <code>src</code> attribute says what image file to display, and the <code>alt</code> attribute says what text to show if the image doesn't load.
      </figcaption>
    </figure>

  <Box title="Tags">

    HTML is a tag-based language, which means that everything is wrapped in tags that describe what it is. A piece of content has an opening tag at the beginning to show where it starts, and a closing tag at the end to show where it ends.

  </Box>

  <Box title="Elements">

    An element is a block of HTML, or a component of the page. It gives a label and meaning to the content inside of it. For example, a `p` element contains **paragraph** content, an `img` element contains **image** content, etc.

  </Box>

  <Box title="Attributes">

    Tags can have attributes that give extra information about the tag. They go inside the pointy brackets and have a name and a value.

  </Box>

</section>
<section class="content section">

  <h2 id="css-terms">CSS Terms</h2>

    <figure>
      <img style="max-width: 500px; margin: 0 auto;" src="/images/css-terms.jpg" alt="Annotated diagram of an CSS chunk.">
      <figcaption>
        This CSS rule will make the text inside the <code>p</code> element centered.
      </figcaption>
    </figure>

  <Box title="Selector">
    
    The selector is the start of a section of CSS, and says which HTML element the CSS rules are going to be for.

  </Box>

  <Box title="Property">
    
    The property is the first part of a CSS rule, and says what thing about the HTML element you want to change.

  </Box>

  <Box title="Value">
    
    The value is the last part of a CSS rule, and says what you want to change the property to.

  </Box>

</section>
<section class="content section">

  <h2 id="javascript-terms">JavaScript Terms</h2>

  <Box title="One-line comments">

    These are short explanations of what a chunk of code does. They only take up one line of code, or they can be added to the end of a line of code. Comments can be put anywhere in your code and don't affect how it works. They're useful for explaining what chunks of code do.

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
 * multi-line comment.
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

  <Box title="Writing comments">

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