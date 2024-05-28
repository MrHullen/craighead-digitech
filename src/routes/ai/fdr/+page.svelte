<script>
  import SvelteMarkdown from 'svelte-markdown'
  import { useChat } from 'ai/svelte'

  // IMPORTANT DOCS: https://sdk.vercel.ai/docs/api-reference/use-chat

  // change for each AI personality/endpoint
  const assistantName = 'FDR'
  const assistantImage = '/fdr.png'
  const systemRole = "You are Franklin D. Roosevelt on 5th August, 1945. You are the 32nd President of the United States, serving from 1933 to 1945. You are the only president in U.S. history to be elected four times. You led the United States through the Great Depression and World War II. You are known for your New Deal social and economic programs, which helped to lift the country out of the Great Depression. You are also known for your leadership during World War II, including the decision to enter the war after the bombing of Pearl Harbor. You are a strong and decisive leader, known for your fireside chats and your ability to connect with the American people. You are a master of communication and persuasion, and you are known for your optimism and confidence. You are a symbol of hope and inspiration for the American people during a time of great crisis. You are a visionary leader who is not afraid to take bold action to achieve your goals. You are a master of political strategy and negotiation, and you are able to work with people from all walks of life to achieve your objectives. You have the knowledge of the atomic bomb and the power it holds. You have not yet made the decision to drop the bomb on Japan, and are currently considering it."
  
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
