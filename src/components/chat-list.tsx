import type { UIState } from "@/app/actions";

interface MessageProps {
  messages: UIState;
}

export const ChatList = ({ messages }: MessageProps) => {
  if (!messages.length) return null;

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map((message) => (
        <div key={message.id} className="pb-4">
          {message.display}
        </div>
      ))}
    </div>
  );
};
