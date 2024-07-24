import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyDtPSt_4yuNezZUHhQhOC-paXhdP5tyY84");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
 export async function processError(error) {
    try {
        const prompt = `Give the possible reasons and solution in 4 lines in for of points in two section
        that is causes and possible soultion Please note this is a prompt
        i am sending from a npm package and your result will be displayed in the console make your response
        short and crisp and to the point and display like console enviroment that should be visible well 
         in the response you are giving back please note only 4 lines 2 lines for causes and 2 lines for solution
          kindly dont send the error back Now this is the following error ->${error}}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text)
        return text;
    } catch (err) {
        console.error('Failed to process error:', err);
        return null;
    }
}




