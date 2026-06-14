import { GoogleGenerativeAI } from "@google/generative-ai";
import { GOOGLE_API } from "@env";

const genAI = new GoogleGenerativeAI(GOOGLE_API);

export const postMessage = async (userMessage) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
PlantBot, you answer only questions related to plants and gardening.

If the topic is not related to plants, politely say that you can only help with plants and gardening.

Provide accurate, clear, user-friendly answers about:
- plant care
- plant types
- gardening tips
- plant problems
- growing conditions
- plant recommendations

User question:
${userMessage}

Your response should be text only.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.log("Gemini error:", error);
    return "Sorry, I couldn't get a response right now.";
  }
};