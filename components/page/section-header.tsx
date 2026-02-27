import { LucideIcon } from "lucide-react";

export default function SectionHeader(
    {
        title,
        icon: Icon,
        description
    }: {
        title: String;
        icon: LucideIcon;
        description: String
    }
) {
    return (
        <div className="mb-10">
            <div className="px-10 items-center gap-2 mb-3">
                <div className="flex items-center">
                    <Icon className="size-6 text-primary" />
                    <h2 className="text-3xl font-bold">{title}</h2>
                </div>
                <p className="text-muted-foreground text-lg">{description}</p>
            </div>
        </div>
    )
}
