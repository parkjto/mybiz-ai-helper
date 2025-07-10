import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ThumbsUp, ThumbsDown, MessageCircle, TrendingUp } from "lucide-react";

export const ReviewAnalysis = () => {
  const sentimentData = {
    positive: 85,
    neutral: 10,
    negative: 5
  };

  const recentReviews = [
    {
      text: "음식도 맛있고 사장님이 정말 친절해요! 자주 올게요 ㅎㅎ",
      sentiment: "positive",
      keywords: ["친절", "맛있는", "서비스"]
    },
    {
      text: "김치찌개 진짜 맛있어요. 집밥 같은 느낌이라 좋았습니다.",
      sentiment: "positive", 
      keywords: ["김치찌개", "집밥", "맛있는"]
    },
    {
      text: "양이 조금 적은 것 같아요. 그래도 맛은 좋았습니다.",
      sentiment: "neutral",
      keywords: ["양", "맛있는"]
    },
    {
      text: "주차가 조금 불편했지만 음식은 만족스러웠어요!",
      sentiment: "neutral",
      keywords: ["주차", "만족"]
    }
  ];

  const insights = [
    {
      type: "positive",
      title: "고객들이 가장 좋아하는 점",
      items: ["친절한 서비스 (92%)", "집밥 같은 맛 (87%)", "신선한 재료 (81%)"]
    },
    {
      type: "improvement",
      title: "개선이 필요한 점",
      items: ["주차 공간 (23%)", "음식 양 (18%)", "대기 시간 (12%)"]
    }
  ];

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return <ThumbsUp className="h-4 w-4 text-success" />;
      case "negative": return <ThumbsDown className="h-4 w-4 text-destructive" />;
      default: return <MessageCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "bg-success/10 text-success border-success/20";
      case "negative": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* 감정 분석 요약 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            고객 만족도 분석
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="text-3xl font-bold text-success mb-1">{sentimentData.positive}%</div>
              <div className="text-sm text-success">긍정적</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-muted-foreground mb-1">{sentimentData.neutral}%</div>
              <div className="text-sm text-muted-foreground">보통</div>
            </div>
            <div className="text-center p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <div className="text-3xl font-bold text-destructive mb-1">{sentimentData.negative}%</div>
              <div className="text-sm text-destructive">부정적</div>
            </div>
          </div>

          <div className="w-full bg-muted rounded-full h-3 mb-4">
            <div className="flex h-3 rounded-full overflow-hidden">
              <div 
                className="bg-success transition-all duration-500" 
                style={{ width: `${sentimentData.positive}%` }}
              ></div>
              <div 
                className="bg-muted-foreground" 
                style={{ width: `${sentimentData.neutral}%` }}
              ></div>
              <div 
                className="bg-destructive" 
                style={{ width: `${sentimentData.negative}%` }}
              ></div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            전체 리뷰 중 85%가 긍정적인 평가를 남겨주셨습니다!
          </p>
        </CardContent>
      </Card>

      {/* 최근 리뷰 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 고객 리뷰</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReviews.map((review, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-start gap-3">
                  {getSentimentIcon(review.sentiment)}
                  <div className="flex-1">
                    <p className="text-sm text-foreground mb-2">{review.text}</p>
                    <div className="flex flex-wrap gap-1">
                      {review.keywords.map((keyword, kIndex) => (
                        <Badge 
                          key={kIndex} 
                          variant="outline" 
                          className={getSentimentColor(review.sentiment)}
                        >
                          #{keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 인사이트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
                {insight.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {insight.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      insight.type === "positive" ? "bg-success" : "bg-warning"
                    }`}></div>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};