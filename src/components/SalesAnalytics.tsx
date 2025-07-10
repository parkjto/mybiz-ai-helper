import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Users, Star, Clock } from "lucide-react";

export const SalesAnalytics = () => {
  const stats = [
    {
      title: "이번 달 매출",
      value: "3,250,000원",
      change: "+15%",
      trend: "up",
      icon: DollarSign,
      description: "지난달 대비"
    },
    {
      title: "오늘 방문 고객",
      value: "47명",
      change: "+8%",
      trend: "up",
      icon: Users,
      description: "어제 대비"
    },
    {
      title: "평균 리뷰 점수",
      value: "4.7점",
      change: "+0.2",
      trend: "up",
      icon: Star,
      description: "지난주 대비"
    },
    {
      title: "피크 시간대",
      value: "12:00-13:00",
      change: "런치타임",
      trend: "neutral",
      icon: Clock,
      description: "가장 바쁜 시간"
    }
  ];

  const popularMenus = [
    { name: "김치찌개", sales: 28, change: "+12%" },
    { name: "제육볶음", sales: 24, change: "+8%" },
    { name: "된장찌개", sales: 19, change: "+5%" },
    { name: "비빔밥", sales: 16, change: "-2%" },
    { name: "불고기정식", sales: 15, change: "+15%" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.trend === "up";
          const TrendIcon = stat.trend === "up" ? TrendingUp : stat.trend === "down" ? TrendingDown : null;
          
          return (
            <Card key={index} className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <div className="flex items-center gap-1">
                      {TrendIcon && (
                        <TrendIcon 
                          className={`h-4 w-4 ${isPositive ? 'text-success' : 'text-destructive'}`} 
                        />
                      )}
                      <span 
                        className={`text-sm font-medium ${
                          isPositive ? 'text-success' : stat.trend === "down" ? 'text-destructive' : 'text-muted-foreground'
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">
                        {stat.description}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            인기 메뉴 TOP 5
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularMenus.map((menu, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{menu.name}</p>
                    <p className="text-sm text-muted-foreground">오늘 {menu.sales}개 판매</p>
                  </div>
                </div>
                <div className="text-right">
                  <span 
                    className={`text-sm font-medium ${
                      menu.change.startsWith('+') ? 'text-success' : 'text-destructive'
                    }`}
                  >
                    {menu.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};