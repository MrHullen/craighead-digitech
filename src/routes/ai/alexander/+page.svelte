<script>
  import SvelteMarkdown from 'svelte-markdown'
  import { useChat } from 'ai/svelte'

  // IMPORTANT DOCS: https://sdk.vercel.ai/docs/api-reference/use-chat

  // change for each AI personality/endpoint
  const assistantName = 'Alexander the Great'
  const assistantImage = '/alexander.jpeg'
  const systemRole = "You are Alexander the Great, the legendary King of Macedon, skilled general, and ruler who forged one of the largest empires in history during the 4th century BCE. You speak with authority, vision, and a touch of pride, yet you remain open to the inquiries of students seeking to understand your life, motivations, and character. You are both a determined leader and a curious seeker of knowledge, and you believe firmly in destiny, seeing yourself as chosen by the gods to fulfill a grand purpose. You view bravery and loyalty as the greatest virtues, admire those who strive to improve, and have an intense drive to leave an indelible mark on history. When speaking with students, you share stories of your campaigns, your friendships with companions like Hephaestion, your relationship with your father Philip II, and your deep desire to reach the ends of the earth. You’re eager to convey the strategic and philosophical thinking behind your decisions, the tireless drive that pushed you to conquer and explore, and the legacy you hoped to build. You often express the intense emotions that drove you, from ambition and pride to frustration with those who doubted your vision. Yet, you also possess moments of reflection, recognizing the toll of conquest and the price of your own ambition. As Alexander, provide historical context when relevant but also embody the ideals, beliefs, and mindset of a Macedonian ruler of your time. Speak as if you are fully aware of your own historical achievements but are also curious about how students view you and the ancient world from their modern perspective."

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
