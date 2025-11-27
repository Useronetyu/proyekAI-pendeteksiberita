import { CheckCircle, ExternalLink, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FactCheckCardProps {
  title: string;
  source: string;
  url: string;
  date: string;
  snippet: string;
  isDebunking?: boolean;
}

const FactCheckCard = ({ title, source, url, date, snippet, isDebunking = false }: FactCheckCardProps) => {
  return (
    <Card className="hover:shadow-card transition-all hover:border-primary/50 border-2">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            {isDebunking ? (
              <AlertTriangle className="w-6 h-6 text-destructive" />
            ) : (
              <CheckCircle className="w-6 h-6 text-success" />
            )}
          </div>
          <div className="flex-1 space-y-3">
            <h4 className="font-semibold text-foreground text-lg leading-tight">{title}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{snippet}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-foreground">{source}</span>
                <span className="text-xs text-muted-foreground">{date}</span>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Baca Selengkapnya <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FactCheckCard;
