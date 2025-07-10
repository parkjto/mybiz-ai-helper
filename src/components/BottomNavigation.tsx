import { Camera, BarChart, MessageSquare, Mic, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onVoiceToggle: () => void;
  isListening: boolean;
}

export const BottomNavigation = ({ 
  activeTab, 
  onTabChange, 
  onVoiceToggle, 
  isListening 
}: BottomNavigationProps) => {
  const navItems = [
    { key: "home", icon: Home, label: "홈" },
    { key: "image-upload", icon: Camera, label: "광고 생성" },
    { key: "sales", icon: BarChart, label: "매출 분석" },
    { key: "reviews", icon: MessageSquare, label: "리뷰 분석" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50">
      <div className="flex items-center justify-around px-2 py-2 safe-area-pb">
        {navItems.map((item, index) => (
          <Button
            key={item.key}
            variant={activeTab === item.key ? "default" : "ghost"}
            size="sm"
            onClick={() => onTabChange(item.key)}
            className="flex flex-col items-center gap-1 h-14 min-w-[60px] text-xs"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs leading-none">{item.label}</span>
          </Button>
        ))}
        
        {/* 중앙 음성 버튼 */}
        <Button
          variant={isListening ? "destructive" : "default"}
          size="lg"
          onClick={onVoiceToggle}
          className="h-14 w-14 rounded-full bg-gradient-primary text-white shadow-lg flex items-center justify-center"
        >
          <Mic className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};