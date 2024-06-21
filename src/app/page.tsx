import { ChatList } from "@/components/chat-list";
import ChatScrollAnchor from "@/components/chat-scroll-anchor";
import { env } from "@/env";
import {} from "ai/rsc";

export default function Home() {
  return (
    <main>
      <div className="pb-[200px] pt-4 md:pt-10">
        <ChatList messages={[]} />
        <ChatScrollAnchor />
        <h1>This is the anchored content</h1>
      </div>
    </main>
  );
}
