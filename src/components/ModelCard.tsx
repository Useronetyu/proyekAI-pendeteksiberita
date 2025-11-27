import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ModelCardProps {
  name: string;
  accuracy: string;
  rank?: number;
}

const ModelCard = ({ name, accuracy, rank }: ModelCardProps) => {
  const isTopRank = rank === 1;
  
  return (
    <Card className="relative p-6 bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      {isTopRank && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success text-success-foreground">
          Terbaik
        </Badge>
      )}
      <div className="text-center space-y-3">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {accuracy}
          </span>
          <span className="text-lg text-muted-foreground">%</span>
        </div>
        <p className="text-sm text-muted-foreground">Akurasi</p>
      </div>
    </Card>
  );
};

export default ModelCard;
