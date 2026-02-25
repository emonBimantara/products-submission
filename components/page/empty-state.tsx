import { LucideIcon } from "lucide-react";

interface emptyState {
    message: string;
    icon?: LucideIcon
}

export default function EmptyState({message, icon: Icon} : emptyState) {
  return (
    <div className="empty-state">
        {Icon && (
            <Icon className="size-12 text-muted-foreground/50 mx-auto mb-4" />
        )}
        <p className="text-lg text-muted-foreground">
            {message}
        </p>
    </div>
  )
}
