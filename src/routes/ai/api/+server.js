import { error } from '@sveltejs/kit'
import { createOpenAI } from '@ai-sdk/openai'
import OpenAI from 'openai'
import { StreamingTextResponse, streamText } from 'ai'

import { env } from '$env/dynamic/private'

// Create an OpenAI API client
const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY || '',
})

// IMPORTANT! Set the runtime to edge
// export const runtime = 'edge'

export const POST = async ({ request }) => {
  try {
    // Extract the `prompt` from the body of the request
    const { messages } = await request.json()

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await streamText({
      model: openai('gpt-4o'),
      stream: true,
      max_tokens: 2000,
      messages: messages.map((message) => ({
        content: message.content,
        role: message.role,
      })),
    })

    // Convert the response into a friendly text-stream and return it
    return new StreamingTextResponse(response.toAIStream())
  } catch (err) {
    // Check if the error is an APIError
    if (err instanceof OpenAI.APIError) {
      const { name, status, headers, message } = err
      throw error(420, 'Your AI had this to say: ' + 'Status: ' + status + ' | Message: ' + message)
    } else {
      console.error('An error occurred while processing the request: ', err)
      throw error
    }
  }
}
