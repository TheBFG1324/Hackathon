const prompt = args[0]

if (!secrets.openaiKey) {
  throw Error("Need to set open Ai variable")
}

const OpenAIRequest = Functions.makeHttpRequest({
  url: "https://api.openai.com/v1/completions",
  method: "POST",
  headers: {
    Authorization: `Bearer ${secrets.openaiKey}`,
  },
  data: { model: "text-davinci-033", prompt: prompt, temperature: 0, max_tokens: 7 },
})

const openAiResponse = await OpenAIRequest
console.log("raw response", openAiResponse)
console.log("raw response data", openAiResponse.data.choices[0])

let result = openAiResponse.data.choices[0].text.trim()
console.log("name", result)

return Functions.encodeString(result)
