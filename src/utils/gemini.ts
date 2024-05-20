import { GoogleGenerativeAI } from "@google/generative-ai";
import { HfInference } from "@huggingface/inference";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
const hf = new HfInference(process.env.NEXT_PUBLIC_HF_API_KEY!);

export const textTotext = async (inp: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(inp);
  const response = result.response;
  const text: string = response.text();

  //   setresponse(text);
  return text;
};

export const textToImage = async (inp: string) => {
  let model = await hf.textToImage({
    inputs: inp,
    model: "stabilityai/stable-diffusion-2",
    parameters: { negative_prompt: "blurry" },
  });
  return URL.createObjectURL(model);
};
