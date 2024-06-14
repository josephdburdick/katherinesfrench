export type ContactLink = {
  url: string;
  label: string;
  icon?: string;
};

export interface Role {
  title: string;
  date: {
    start: string;
    end: string | null;
  };
  description: string;
}

export type Experience = {
  title: string;
  roles: Role[];
};
