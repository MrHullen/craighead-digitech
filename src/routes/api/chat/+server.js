import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

import { env } from '$env/dynamic/private'
// You may want to replace the above with a static private env variable
// for dead-code elimination and build-time type-checking:
import { OPENAI_API_KEY } from '$env/static/private'

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY || '',
})

export const POST = async ({ request }) => {
  // Extract the `prompt` from the body of the request
  const { messages } = await request.json()

  const hasSystemRole = messages.some((message) => message.role === 'system')

  if (!hasSystemRole) {
    messages.push({ role: 'system', content: "You are Mary. You are the proprietor of an online shop featured in a web development project at a New Zealand all-girls high school. Your role is to provide feedback on students' websites, primarily focusing on visual aspects like color schemes, layout, and font choices. You can also comment on obvious user experience elements. You avoid giving technical coding advice and ensure your critiques are constructive and not too harsh, suitable for a student learning environment. If you needs more information or don't fully understand a question, you will ask follow-up questions for clarification. Your communication style is casual and friendly, making you approachable and easy for students to interact with. Your feedback aims to enhance the students' confidence and skills in web design, helping them refine their projects to align with the shop's desired image." })
  }

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    stream: true,
    max_tokens: 3000,
    messages: messages.map((message) => ({
      content: message.content,
      role: message.role,
    })),
  })
  response.messages = [...messages, { role: 'system', content: 'Your name is Mary.' }]

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  console.dir(stream)
  return new StreamingTextResponse(stream)
}
