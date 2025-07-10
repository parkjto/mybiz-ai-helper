import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  onClick: () => void;
  gradient?: "primary" | "warm";
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  onClick,
  gradient = "primary" 
}: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-soft transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
      <CardContent className="p-6 text-center space-y-4">
        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-${gradient} flex items-center justify-center group-hover:shadow-${gradient}`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        
        <Button 
          variant="outline" 
          onClick={onClick}
          className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          {action}
        </Button>
      </CardContent>
    </Card>
  );
};