import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:import.meta.env.VITE_GEMINI_API_KEY})

export async function getRecipeGemini(ingredients){
    var ingredientsStr = ingredients.join(' ');

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Write a recipe using the following ingredients: " + ingredientsStr + ". Return the output in a markdown.",
    });
    console.log(response.text);
    return response.text;
}