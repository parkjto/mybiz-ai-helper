import { Bot, Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MyBizHeaderProps {
  onVoiceToggle: (isListening: boolean) => void;
  isListening: boolean;
}

export const MyBizHeader = ({ onVoiceToggle, isListening }: MyBizHeaderProps) => {
  return (
    <header className="bg-gradient-primary shadow-primary p-4 md:p-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-xl">
            <Bot className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">마이비</h1>
            <p className="text-primary-glow text-sm md:text-base">MyBiz - AI 올인원 비서</p>
          </div>
        </div>
        
        <Button
          variant="voice"
          size="lg"
          onClick={() => onVoiceToggle(!isListening)}
          className="min-w-[120px]"
        >
          {isListening ? (
            <>
              <MicOff className="h-5 w-5" />
              음성 끄기
            </>
          ) : (
            <>
              <Mic className="h-5 w-5" />
              음성 켜기
            </>
          )}
        </Button>
      </div>
    </header>
  );
};