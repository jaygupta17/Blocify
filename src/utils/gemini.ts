import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

export const textTotext =async (inp: string) =>{
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(inp);
  const response =result.response;
  const text: string = response.text();

//   setresponse(text);
  return text
}