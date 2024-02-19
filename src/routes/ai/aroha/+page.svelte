<script>
  import SvelteMarkdown from 'svelte-markdown'
  import { useChat } from 'ai/svelte'

  // IMPORTANT DOCS: https://sdk.vercel.ai/docs/api-reference/use-chat

  // change for each AI personality/endpoint
  const assistantName = 'Aroha'
  const assistantImage = '/aroha.webp'
  const systemRole = "You are Aroha. You speak only in Te Reo Māori using short, simple sentences. You are approachable and friendly, and you are a good listener. You are a student at a New Zealand high school. You enjoy helping other students learn and understand Te Reo Māori. You are patient and understanding, and you are always willing to help. You are a good role model for other students. You are a positive and encouraging person. You are a good communicator."

  const apiEndpoint = '/ai/api'
  

  // initialise the AI with it's personality (system role) and endpoint, and connect to the input variable
  const { input, handleSubmit, append, messages } = useChat({
    api: apiEndpoint,
    initialMessages: [
      {
        role: 'system',
        content: systemRole,
      },
    ],
  })

  function onSubmit(e) {
    // if user input is an image URL, create a custome message with the image URL included
    if (imageURL) {
      // this will trigger an API call, in the same way that handleSubmit() does
      append({
        role: 'user',
        content: [
          { type: 'text', text: $input },
          {
            type: 'image_url',
            image_url: imageURL,
          },
        ],
      })

      // reset the chat
      $input = ''
      imageURL = ''
      toggleInputURL()
      return
    }

    // otherwise, submit the user input as normal (automatically resets the chat)
    handleSubmit(e)
  }

  // bindings to HTML elements
  let inputURL
  let imageURL

  function toggleInputURL() {
    inputURL.classList.toggle('is-hidden')
  }
</script>

<section class="section">
  <h1 class="title">
    <figure class="image is-48x48">
      <img class="is-rounded" src={assistantImage} alt="" />
    </figure>
    {assistantName}
  </h1>
  <ul class="section">
    {#each $messages as message}
      {#if message.role != 'system'}
        <li class:is-user={message.role == 'user'} class:is-ai={message.role == 'assistant'}>
          <div class="chat-header">
            <strong>
              {message.role == 'user' ? 'YOU' : assistantName}
            </strong>
          </div>
          <p>
            {#if message.role == 'assistant'}
              <SvelteMarkdown source={message.content} />
            {:else if typeof message.content == 'string'}
              {message.content}
            {:else}
              {message.content[0].text}
              <br />
              <img src={message.content[1].image_url} alt="Preview." />
            {/if}
          </p>
        </li>
      {/if}
    {/each}
  </ul>
  <form on:submit={onSubmit}>
    <div class="field has-addons">
      <div class="control">
        <button class="button is-primary is-rounded" type="button" on:click={toggleInputURL}>
          <span class="icon is-small is-left">
            <i class="fa-regular fa-image"></i>
          </span>
        </button>
      </div>
      <div class="control is-expanded">
        <input class="input" bind:value={$input} />
      </div>
      <div class="control">
        <button class="button is-primary is-rounded" type="submit">Send</button>
      </div>
    </div>
    <div class="field is-hidden" bind:this={inputURL}>
      <div class="control">
        <input class="input" type="url" bind:value={imageURL} placeholder="Image URL" />
      </div>
    </div>
  </form>
</section>

<style>
  .title {
    display: flex;
    align-items: center;
  }

  figure {
    display: inline-block;
    margin-right: 1rem;
  }

  ul li:not(:last-child) {
    margin-bottom: 0.3rem;
  }

  li div {
    margin-bottom: 0.3rem;
  }

  p {
    padding-left: 0.75rem;
  }

  .is-user strong {
    color: #abe4ff;
  }

  .is-user p {
    border-left: #abe4ff 4px solid;
  }

  .is-ai strong {
    color: #ffc181;
  }

  .is-ai p {
    border-left: #ffc181 4px solid;
  }

  img {
    max-width: 300px;
    max-height: 200px;
  }

  @media screen and (min-width: 768px) {
    ul,
    form {
      max-width: 600px;
      margin: 0 auto;
    }
  }
</style>
