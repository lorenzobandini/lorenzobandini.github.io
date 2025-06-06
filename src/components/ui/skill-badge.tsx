import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skills: string[];
  className?: string;
  badgeClassName?: string;
  title?: string;
}

export function SkillBadge({
  skills,
  className,
  badgeClassName,
  title,
}: SkillBadgeProps) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {title && (
        <h4 className="text-sm font-semibold mb-2 text-main">{title}</h4>
      )}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className={cn(
              "bg-third text-light text-xs hover:border-second hover:text-second transition-colors duration-200",
              badgeClassName
            )}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
