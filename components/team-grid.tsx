import { team, type TeamMember } from "@/content/team";
import { cn } from "@/components/ui";

export function TeamGrid({
  members = team,
  className,
}: {
  members?: TeamMember[];
  className?: string;
}) {
  // Hard rule: Renders nothing when empty. No invented team members or placeholders.
  if (!members || members.length === 0) {
    return null;
  }

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", className)}>
      {members.map((member) => (
        <div
          key={member.name}
          className="rounded-3xl border border-line bg-surface p-7 sm:p-8 flex flex-col justify-between transition-[border-color,box-shadow] hover:border-fg/20"
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-fg/5 text-fg font-semibold text-lg">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-fg">
                  {member.name}
                </h3>
                <p className="text-xs text-muted font-medium">{member.role}</p>
              </div>
            </div>

            {member.bio && (
              <p className="text-sm text-muted leading-relaxed">
                {member.bio}
              </p>
            )}
          </div>

          {member.linkedin && (
            <div className="pt-4 mt-6 border-t border-line">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:underline inline-flex items-center gap-1"
              >
                LinkedIn profile &rarr;
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
