import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
	apiKey: process.env.GOOGLE_API_KEY,
});

export default async function getHint(question, userQuery, error) {
	try {
    const response = await ai.models.generateContent({
    		model: "gemini-2.5-flash",
    		contents: `
          You are a SQL tutor helping a student learn.
          The assignment is: ${question}
          The student's current query is: ${userQuery}
          The error they got (if any): ${error}
      
          Give a helpful hint that guides them in the right direction.
          DO NOT give the complete solution or write SQL for them.
          Point out what concept they might be missing.
          Keep it under 3 sentences.
        `,
    	});
    	const hint = response.text;
    	return hint;
  } catch (error) {
    console.log(error.message);
    throw error.message;
  }
}
