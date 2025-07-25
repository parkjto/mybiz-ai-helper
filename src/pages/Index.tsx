import { useState } from "react";
import { MyBizHeader } from "@/components/MyBizHeader";
import { VoiceAssistant } from "@/components/VoiceAssistant";
import { FeatureCard } from "@/components/FeatureCard";
import { ImageUploader } from "@/components/ImageUploader";
import { SalesAnalytics } from "@/components/SalesAnalytics";
import { ReviewAnalysis } from "@/components/ReviewAnalysis";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Camera, BarChart, MessageSquare, TrendingUp, Mic, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isListening, setIsListening] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const features = [
    {
      icon: Camera,
      title: "📸 광고 자동 생성",
      description: "상품 사진만 올리면 AI가 SNS용 광고 문구와 해시태그를 자동으로 만들어드려요!",
      action: "사진 업로드하기",
      key: "image-upload",
      gradient: "warm" as const
    },
    {
      icon: BarChart,
      title: "📊 매출 분석",
      description: "매출 현황과 인기 메뉴를 한눈에 확인하고 비즈니스 인사이트를 얻으세요!",
      action: "매출 현황 보기",
      key: "sales",
      gradient: "primary" as const
    },
    {
      icon: MessageSquare,
      title: "💬 고객 리뷰 분석",
      description: "고객 리뷰를 AI가 분석해서 긍정/부정 감정과 개선점을 알려드려요!",
      action: "리뷰 분석 보기",
      key: "reviews",
      gradient: "primary" as const
    },
    {
      icon: TrendingUp,
      title: "🍜 트렌드 분석",
      description: "지역 상권 트렌드와 협업 기회를 AI가 추천해드려요!",
      action: "트렌드 보기",
      key: "trends",
      gradient: "warm" as const
    }
  ];

  const renderActiveContent = () => {
    if (isListening) {
      return (
        <section className="animate-fade-in">
          <VoiceAssistant 
            isListening={isListening} 
            onVoiceToggle={setIsListening}
          />
        </section>
      );
    }

    switch (activeTab) {
      case "image-upload":
        return <ImageUploader />;
      case "sales":
        return <SalesAnalytics />;
      case "reviews":
        return <ReviewAnalysis />;
      case "home":
      default:
        return (
          <>
            {/* 히어로 섹션 */}
            <section className="text-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-foreground leading-tight">
                  소상공인을 위한 <span className="text-primary">AI 비서</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  📸 사진 한 장, 🗣️ 한 마디 말만으로도 광고부터 매출 분석까지! 
                  <br />디지털이 어려운 사장님도 쉽게 사용하는 똑똑한 AI 도우미입니다.
                </p>
              </div>
              
              <Button 
                variant="hero" 
                onClick={() => setIsListening(true)}
                className="animate-fade-in"
              >
                <Bot className="h-6 w-6 mr-2" />
                AI 비서와 대화 시작하기
              </Button>
            </section>

            {/* 주요 기능들 */}
            <section className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">주요 기능</h2>
                <p className="text-muted-foreground">탭을 선택해서 각 기능을 체험해보세요!</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <FeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      action={feature.action}
                      onClick={() => setActiveTab(feature.key)}
                      gradient={feature.gradient}
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* 특징 소개 */}
            <section className="bg-white rounded-2xl p-6 shadow-soft animate-fade-in">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-foreground">왜 마이비를 선택해야 할까요?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <Mic className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">음성 중심 인터페이스</h3>
                    <p className="text-muted-foreground text-sm">
                      복잡한 버튼 대신 말로 쉽게! 디지털이 어려운 분들도 편안하게 사용하세요.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">AI 자동화</h3>
                    <p className="text-muted-foreground text-sm">
                      광고 제작부터 매출 분석까지 AI가 자동으로! 전문 지식 없이도 프로 수준의 결과를.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">실질적인 도움</h3>
                    <p className="text-muted-foreground text-sm">
                      매출 증대와 고객 만족도 향상! 진짜 도움이 되는 기능들로 사업 성장을 지원합니다.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft pb-20">
      <MyBizHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {renderActiveContent()}
      </main>

      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onVoiceToggle={() => setIsListening(!isListening)}
        isListening={isListening}
      />
    </div>
  );
};

export default Index;
