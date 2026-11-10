export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  linkedin?: string;
  avatar?: string;
};

// TODO: Add confirmed team members before publishing on About page.
// Hard rule: No invented team members or placeholders. Renders nothing when empty.
export const team: TeamMember[] = [];
