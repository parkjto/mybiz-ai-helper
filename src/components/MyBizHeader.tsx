import { Bot } from "lucide-react";

export const MyBizHeader = () => {
  return (
    <header className="bg-gradient-primary shadow-primary p-4 safe-area-pt">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-xl">
            <Bot className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">마이비</h1>
            <p className="text-primary-glow text-sm">MyBiz - AI 올인원 비서</p>
          </div>
        </div>
      </div>
    </header>
  );
};