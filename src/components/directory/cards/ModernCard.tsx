import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import { cn } from "@/lib/utils";

interface ModernCardProps {
  myItem: {
    id: string;
    title: string;
    description?: string;
    image?: string;
    tags?: string[];
    featured?: boolean;
    link?: string;
  };
  href: string;
}

export default function ModernCard({ myItem, href }: ModernCardProps) {
  return (
    <a href={href} className="block h-full group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 hover:border-[hsl(var(--primary))]">
        {myItem.featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
              ⭐ 精选
            </Badge>
          </div>
        )}
        
        {myItem.image ? (
          <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900">
            <img
              src={myItem.image}
              alt={myItem.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-950">
            <span className="text-2xl font-bold text-primary-700 dark:text-primary-300 text-center px-4">
              {myItem.title}
            </span>
          </div>
        )}
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl line-clamp-1 group-hover:text-[hsl(var(--primary))] transition-colors">
            {myItem.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pb-4">
          <CardDescription className="line-clamp-3 text-[hsl(var(--muted-foreground))]">
            {myItem.description}
          </CardDescription>
        </CardContent>
        
        {myItem.tags && myItem.tags.length > 0 && (
          <CardFooter className="pt-0">
            <div className="flex flex-wrap gap-2">
              {myItem.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>
    </a>
  );
}

