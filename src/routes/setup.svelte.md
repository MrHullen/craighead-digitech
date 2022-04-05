<script>
  import Hero from '$lib/Hero.svelte'
  import Box from '$lib/Box.svelte.md'
</script>

<Hero title="Setup" subtitle="Get everything setup just the way you like" />

<section class="content section">

## Software

<Box title="Write">

To **write code** on your computer and run it to see what it does, you'll need to:

 1. Install [Node.js](https://nodejs.org/)
 1. Install [Visual Studio Code](https://code.visualstudio.com/)

</Box>

<Box title="Save">

To **save and backup code** to the cloud, you'll also need to:

 1. Install Git ([Mac](https://sourceforge.net/projects/git-osx-installer/) or [Windows](https://git-scm.com/download/win))
 1. Create a [GitHub account](https://github.com/)
 1. Install [GitHub Desktop](https://desktop.github.com/)

</Box>

When everything is installed, login to both VS Code and GitHub Desktop with your GitHub account.

## VS Code Extensions

Extensions are helpful extras that can customise your VS Code and make writing code a lot easier. You can add extensions by clicking on the ![Extensions icon](/images/vs-code-extensions.png) **Extensions** icon on the left of VS Code and then searching for the Extension you want, or you can follow the links below and click the `Install` button.

<Box title="Look and Feel">

- ![Material Theme icon](https://equinusocio.gallerycdn.vsassets.io/extensions/equinusocio/vsc-material-theme/33.2.2/1615830724784/Microsoft.VisualStudio.Services.Icons.Default) [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)
  - Gives you lots of colour and font options for the background and the text, including dark and light themes.

- ![Material Theme Icons icon](https://equinusocio.gallerycdn.vsassets.io/extensions/equinusocio/vsc-material-theme-icons/2.2.1/1633451317132/Microsoft.VisualStudio.Services.Icons.Default) [Material Theme Icons](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme-icons)
  - Adds new and interesting icons for every different file type.

</Box>

<Box title="Reading Code">

- ![Blockman icon](https://leodevbro.gallerycdn.vsassets.io/extensions/leodevbro/blockman/1.3.3/1637003744468/Microsoft.VisualStudio.Services.Icons.Default) [Blockman](https://marketplace.visualstudio.com/items?itemName=leodevbro.blockman)
  - Draws boxes around HTML elements and bracketed code to help you see where it starts and ends.

- ![Indent Rainbow icon](https://oderwat.gallerycdn.vsassets.io/extensions/oderwat/indent-rainbow/8.2.2/1635112982953/Microsoft.VisualStudio.Services.Icons.Default) [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
  - Highlights each level of indentation a different colour so you can see where it starts and ends.

- ![Rainbow Brackets icon](https://2gua.gallerycdn.vsassets.io/extensions/2gua/rainbow-brackets/0.0.6/1474455607820/Microsoft.VisualStudio.Services.Icons.Default) [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
  - Colours bracket pairs different colours so you can easily match up the starting bracket with the closing bracket.

- ![CSS Formatter icon](https://cdn.vsassets.io/v/M195_20211109.3/_content/Header/default_icon_128.png) [CSS Formatter](https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter)
  - `Alt` + `Shift` + `F` is an amazing tool for formatting code - this let's you do it with CSS as well.

- ![GitHub Classroom icon](https://github.gallerycdn.vsassets.io/extensions/github/classroom/0.0.3/1629390767662/Microsoft.VisualStudio.Services.Icons.Default)[GitHub Classroom](https://marketplace.visualstudio.com/items?itemName=GitHub.classroom)
  - Allows you to browse, do, and save your GitHub Classroom coding assignments.

- ![Svelte for VS Code icon](https://svelte.gallerycdn.vsassets.io/extensions/svelte/svelte-vscode/105.5.3/1637157536523/Microsoft.VisualStudio.Services.Icons.Default) [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
  - Allows VS Code to understand and highlight Svelte files to make reading them easier, and lets you do `Alt` + `Shift` + `F` in them.

</Box>

<Box title="Running Code">

- ![Live Preview icon](https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/live-server/0.2.11/1638450464864/Microsoft.VisualStudio.Services.Icons.Default) [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
  - You can view the website you're building as you go - every time you save it'll get updated in the browser. You can either use the VS Code browser or your computer's normal browser.

</Box>

<!--

- Profile Switcher
  - Create different profiles for everyday coding and teaching.

### Testing

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [Wallaby](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode)
 
-->

## All Done

With your GitHub account setup, VS Code and GitHub Desktop logged in, and your VS Code customised just the way you want it, you're ready to go!

Check out some of the [Projects](/code/projects) that you can start coding right away, and remember to regularly practice your [Vocabulary](/code/vocabulary) and [Flow](/code/flow) skills so you can talk the talk as well as walk the walk.

</section>

<style>
  img {
    position: relative;
    height: 1.25rem;
    top: 0.25rem;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
  }

  ul img {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  ul li {
    margin-bottom: 1rem;
  }

  ul p {
    margin-bottom: 0;
  }

  ul ul {
    margin-top: 0;
    margin-left: 2.5rem;
    list-style-type: none;
  }
</style>
