import { IconType } from "components/Icon";

export type Link = {
  title: string;
  to: string;
  icon: {
    type: IconType;
    size: number;
  };
  end?: boolean;
};

export type LinkGroup = {
  title?: string;
  links: Link[];
};
