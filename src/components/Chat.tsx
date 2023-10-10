'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useChat } from 'ai/react';
import { Check, SendHorizonal } from 'lucide-react';
import { Button } from './ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { Input } from './ui/input';
import BotAvatar from '../../public/bot-avatar.png';
import { ScrollArea } from './ui/scroll-area';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[30rem] h-[40rem] mx-8">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Use o chat para fazer perguntas ao nosso felipinho
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[28rem] flex flex-col">
          <div className="mr-2">
            <div className="flex gap-2 text-sm md:gap-4 mb-4">
              <Avatar>
                <AvatarFallback>BOT</AvatarFallback>
                <AvatarImage src={BotAvatar.src} />
              </Avatar>
              <p className="flex flex-col gap-1">
                <span className="font-semibold text-base">
                  <div className="flex items-center gap-4">
                    <p>Felipinho</p>
                    <span className="flex items-center gap-2 p-1 text-white bg-primary rounded-md text-xs px-3">
                      Bot
                      <Check size={15} />
                    </span>
                  </div>
                </span>
                Comece nossa conversa :)
              </p>
            </div>
            {messages.map(message => {
              return (
                <div
                  className="flex gap-2 text-sm md:gap-4 mb-4"
                  key={message.id}
                >
                  {message.role === 'user' && (
                    <Avatar>
                      <AvatarFallback>ME</AvatarFallback>
                      <AvatarImage src="https://github.com/devnoob547.png"></AvatarImage>
                    </Avatar>
                  )}

                  {message.role === 'assistant' && (
                    <Avatar>
                      <AvatarFallback>BOT</AvatarFallback>
                      <AvatarImage src={BotAvatar.src} />
                    </Avatar>
                  )}
                  <p className="flex flex-col gap-1">
                    <span className="font-semibold text-base">
                      {message.role === 'user' ? (
                        'me'
                      ) : (
                        <div className="flex items-center gap-4">
                          <p>Felipinho</p>
                          <span className="flex items-center gap-2 p-1 text-white bg-primary rounded-md text-xs px-3">
                            Bot
                            <Check size={15} />
                          </span>
                        </div>
                      )}
                    </span>
                    {message.content}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="w-full">
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Faça sua pergunta para o txio felipe..."
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">
            <SendHorizonal size={20} />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
