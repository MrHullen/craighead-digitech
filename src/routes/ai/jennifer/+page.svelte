<script>
  import { useChat } from 'ai/svelte'
  import { afterUpdate } from 'svelte'

  const { input, handleSubmit, messages } = useChat()

  let messagesEnd
  afterUpdate(() => {
    messagesEnd.scrollIntoView({ behavior: 'smooth' });
  })
</script>

<section class="section">
  <h1 class="title">
    <figure class="image is-48x48">
      <img class="is-rounded" src="/mary.png" alt="" />
    </figure>
    Jennifer
  </h1>
  <ul class="section">
    {#each $messages as message}
      <li class:is-user={message.role == 'user'} class:is-ai={message.role == 'assistant'}>
        <div class="chat-header">
          {#if message.role == 'assistant'}
            <!-- <figure class="image is-24x24">
              <img class="is-rounded" src="/mary.png" alt="" />
            </figure> -->
            <strong>JENNIFER</strong>
          {:else}
            <!-- <figure class="image is-24x24">
              <img class="is-rounded" src="/user.png" alt="" />
            </figure> -->
            <strong>YOU</strong>
          {/if}
        </div>
        <p>
          {message.content}
        </p>
      </li>
    {/each}
  </ul>
  <form on:submit={handleSubmit} class="field has-addons" bind:this={messagesEnd}>
    <div class="control is-expanded">
      <input class="input is-rounded" bind:value={$input} />
    </div>
    <div class="control">
      <button class="button is-primary is-rounded" type="submit">Send</button>
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
    color: #ae6378;
  }

  .is-ai p {
    border-left: #ae6378 4px solid;
  }

  @media screen and (min-width: 768px) {
    ul, form {
      max-width: 600px;
      margin: 0 auto;
    }
  }
</style>
