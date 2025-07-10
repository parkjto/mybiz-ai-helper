import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image, Sparkles } from "lucide-react";

export const ImageUploader = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAd, setGeneratedAd] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setGeneratedAd(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAd = () => {
    setIsGenerating(true);
    
    // AI 광고 생성 시뮬레이션
    setTimeout(() => {
      const adTexts = [
        "🔥 오늘의 특별 메뉴! 신선한 재료로 만든 정성스러운 한 끼\n💫 #맛집 #정성가득 #오늘의메뉴\n📞 지금 주문하세요!",
        "✨ 엄마 손맛 그대로! 집에서 느끼는 따뜻한 정성\n🏠 #집밥 #정성요리 #맛있는하루\n❤️ 오늘도 맛있게 드세요!",
        "🌟 신선하고 맛있는 재료만 엄선! 건강한 한 끼\n🥬 #신선재료 #건강식 #정성스런요리\n🍽️ 지금 바로 만나보세요!"
      ];
      
      const randomAd = adTexts[Math.floor(Math.random() * adTexts.length)];
      setGeneratedAd(randomAd);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image className="h-6 w-6 text-primary" />
          AI 광고 자동 생성
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          {!uploadedImage ? (
            <div 
              className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">상품 사진을 업로드하세요</p>
              <p className="text-sm text-muted-foreground">클릭하여 사진을 선택하거나 드래그해서 놓으세요</p>
            </div>
          ) : (
            <div className="space-y-4">
              <img 
                src={uploadedImage} 
                alt="업로드된 상품" 
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
              <Button 
                variant="outline" 
                onClick={() => fileInputRef.current?.click()}
                className="w-full"
              >
                다른 사진 선택
              </Button>
            </div>
          )}
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {uploadedImage && (
          <div className="text-center">
            <Button 
              variant="hero"
              onClick={generateAd}
              disabled={isGenerating}
              className="w-full max-w-xs"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  AI가 광고 생성 중...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  AI 광고 문구 생성하기
                </>
              )}
            </Button>
          </div>
        )}

        {generatedAd && (
          <div className="p-6 bg-gradient-warm rounded-lg border border-accent-warm/30">
            <h4 className="font-semibold text-lg mb-3 text-white">🎯 생성된 광고 문구</h4>
            <div className="bg-white/90 p-4 rounded-lg">
              <p className="whitespace-pre-line text-foreground font-medium">{generatedAd}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30">
                수정하기
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-white/20 border-white/30 text-white hover:bg-white/30">
                SNS에 공유
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};