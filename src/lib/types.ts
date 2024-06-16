import { PropsWithChildren } from "react"

type Picture = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export type ExternalLink = PropsWithChildren & {
  url: string;
  icon?: string;
};

export interface Role {
  title: string;
  date: {
    start: string;
    end: string | null;
  };
  description: string;
  picture: Picture;
}

export type Experience = {
  title: string;
  roles: Role[];
};

export type ContactLink = {
  url: string;
  text: string;
};
