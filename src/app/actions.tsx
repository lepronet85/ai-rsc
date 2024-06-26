"use server";

import { createAI } from "ai/rsc";
import type { ToolInvocation } from "ai";

const content = `\
  You are a crypto bot and you can help users get the prices of cryptocurrencies, and beside that also chat with users.

  Messages inside [] means that it's a UI element or a user event. For example: 
  - "[Price of BTC = 696969]" means that the interface of cryptocurrency price of BTC is shown to the user.
  - "[Stats of BTC]" means that the interface of the cryptocurrency stats of BTC is shown to the user.

  If the user wants the price, call \`get_crypto_price\` to show the price.
  If the user wants the market cap or stats of a given cryptocurrency, call \`get_crypto_stats\` to show the stats.
  If the user wants a stock price, it is an impossible task, so you should respond that you are a demo and cannot do that.
  If the user wants anything else unrelated to the function calls \`get_crypto_price\` or \`get_crypto_stats\`, you should chat with the user and answer any questions they may have.
`;

export const sendMessage = async (
  message: string
): Promise<{
  id: number;
  role: "user" | "assistant";
  display: React.ReactNode;
}> => {
  return {
    id: Date.now(),
    role: "assistant",
    display: <p>Hello!</p>,
  };
};

export type AIState = Array<{
  id?: number;
  name: "get_crypto_price" | "get_crypto_stats";
  role: "user" | "assistant" | "system";
  content: string;
  toolInvocations?: ToolInvocation;
}>;
export type UIState = Array<{
  id: number;
  role: "user" | "assistant";
  display: React.ReactNode;
  tool_calls?: ToolInvocation;
}>;

export const AI = createAI({
  initialAIState: [] as AIState,
  initialUIState: [] as UIState,
  actions: {
    sendMessage,
  },
});
