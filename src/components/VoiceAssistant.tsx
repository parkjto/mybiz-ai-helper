import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mic, MicOff, Volume2, Send } from "lucide-react";

interface VoiceAssistantProps {
  isListening: boolean;
  onVoiceToggle: (isListening: boolean) => void;
}

export const VoiceAssistant = ({ isListening, onVoiceToggle }: VoiceAssistantProps) => {
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [textInput, setTextInput] = useState("");

  // Web Speech API 시뮬레이션
  useEffect(() => {
    if (isListening) {
      const timeout = setTimeout(() => {
        setTranscript("이번 달 매출이 어때?");
        setIsProcessing(true);
        
        setTimeout(() => {
          setResponse("이번 달 매출은 지난달 대비 15% 증가했습니다. 특히 런치 메뉴가 인기가 많았어요!");
          setIsProcessing(false);
          onVoiceToggle(false);
        }, 2000);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isListening, onVoiceToggle]);

  const simulateVoiceInput = () => {
    const sampleQuestions = [
      "오늘 인기 메뉴가 뭐야?",
      "고객 리뷰 어때?",
      "광고 문구 만들어줘",
      "이번 주 매출 분석해줘"
    ];
    const randomQuestion = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
    setTranscript(randomQuestion);
    setIsProcessing(true);

    setTimeout(() => {
      const responses = {
        "오늘 인기 메뉴가 뭐야?": "오늘은 김치찌개와 제육볶음이 가장 인기가 많았습니다!",
        "고객 리뷰 어때?": "최근 리뷰 분석 결과, 긍정적인 리뷰가 85%입니다. 특히 친절한 서비스에 대한 칭찬이 많아요!",
        "광고 문구 만들어줘": "\"집밥 같은 정성, 엄마 손맛 그대로! 오늘도 따뜻한 한 끼 어떠세요?\" 이런 문구는 어떠신가요?",
        "이번 주 매출 분석해줘": "이번 주 매출은 지난주 대비 12% 상승했습니다. 평일보다 주말 매출이 특히 좋았어요!"
      };
      setResponse(responses[randomQuestion as keyof typeof responses] || "죄송합니다. 다시 말씀해 주세요.");
      setIsProcessing(false);
    }, 2000);
  };

  const handleTextSubmit = () => {
    if (!textInput.trim()) return;
    
    setTranscript(textInput);
    setIsProcessing(true);
    setTextInput("");

    setTimeout(() => {
      const responses = {
        "오늘 인기 메뉴가 뭐야?": "오늘은 김치찌개와 제육볶음이 가장 인기가 많았습니다!",
        "고객 리뷰 어때?": "최근 리뷰 분석 결과, 긍정적인 리뷰가 85%입니다. 특히 친절한 서비스에 대한 칭찬이 많아요!",
        "광고 문구 만들어줘": '"집밥 같은 정성, 엄마 손맛 그대로! 오늘도 따뜻한 한 끼 어떠세요?" 이런 문구는 어떠신가요?',
        "이번 주 매출 분석해줘": "이번 주 매출은 지난주 대비 12% 상승했습니다. 평일보다 주말 매출이 특히 좋았어요!",
        "이번 달 매출이 어때?": "이번 달 매출은 지난달 대비 15% 증가했습니다. 특히 런치 메뉴가 인기가 많았어요!"
      };
      
      // 기본 응답 로직
      let matchedResponse = null;
      for (const [key, value] of Object.entries(responses)) {
        if (textInput.includes(key.replace("?", "").replace("!", ""))) {
          matchedResponse = value;
          break;
        }
      }
      
      if (!matchedResponse) {
        if (textInput.includes("매출")) {
          matchedResponse = "매출 분석 결과를 확인해보겠습니다. 전체적으로 안정적인 성장세를 보이고 있어요!";
        } else if (textInput.includes("메뉴")) {
          matchedResponse = "메뉴별 판매량을 분석한 결과, 한식 메뉴가 가장 인기가 많습니다!";
        } else if (textInput.includes("리뷰")) {
          matchedResponse = "고객 리뷰를 분석해드릴게요. 전반적으로 긍정적인 피드백이 많네요!";
        } else if (textInput.includes("광고")) {
          matchedResponse = "효과적인 광고 문구를 제안해드릴게요. 고객의 마음을 사로잡을 메시지를 만들어보겠습니다!";
        } else {
          matchedResponse = "네, 알겠습니다. 해당 내용에 대해 분석해서 답변드릴게요!";
        }
      }
      
      setResponse(matchedResponse);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-foreground">음성 비서</h3>
          
          <div className="space-y-4">
            {transcript && (
              <div className="p-4 bg-accent rounded-lg">
                <p className="text-sm text-muted-foreground">사장님이 말씀하신 내용:</p>
                <p className="text-lg font-medium">{transcript}</p>
              </div>
            )}

            {isProcessing && (
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
                  <p className="text-sm">AI가 분석 중입니다...</p>
                </div>
              </div>
            )}

            {response && !isProcessing && (
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-start gap-2">
                  <Volume2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">마이비 AI가 답변드립니다:</p>
                    <p className="text-lg font-medium">{response}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 텍스트 입력 섹션 */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <Input
                placeholder="메시지를 입력하세요..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleTextSubmit()}
                disabled={isListening || isProcessing}
                className="flex-1"
              />
              <Button
                onClick={handleTextSubmit}
                disabled={!textInput.trim() || isListening || isProcessing}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <Button
              variant={isListening ? "destructive" : "default"}
              size="lg"
              onClick={() => onVoiceToggle(!isListening)}
              className="min-w-[120px]"
            >
              {isListening ? (
                <>
                  <MicOff className="h-5 w-5" />
                  음성 중지
                </>
              ) : (
                <>
                  <Mic className="h-5 w-5" />
                  음성 시작
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={simulateVoiceInput}
              disabled={isListening || isProcessing}
            >
              예시 질문하기
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            🎤 음성으로 말하거나 💬 텍스트로 입력해보세요!<br />
            "이번 달 매출 어때?", "인기 메뉴 뭐야?", "광고 문구 만들어줘" 등
          </p>
        </div>
      </CardContent>
    </Card>
  );
};