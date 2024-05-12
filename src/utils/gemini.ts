import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY! ;

const genAI = new GoogleGenerativeAI("AIzaSyC3MKINHqGKH6LRKptFyU6Z6KvSB-vph50");

export const textTotext =async (inp: string) =>{
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(inp);
  const response =result.response;
  const text: string = response.text();

//   setresponse(text);
  return text
}