type linkType = {
  icon: string;
  name: string;
  type: "link";
  address: string;
};

type panelType = {
  icon: string;
  name: string;
  type: "panel";
  details: string;
};

type sectionType = {
  icon: string;
  name: string;
  type: "section";
};

type iconType = {
  icon: string;
  name: string;
  address: string;
  type: "icon";
};

type icons = Array<iconType>;

type profileType = {
  name: string;
  address: string | undefined;
  image: string;
  display: boolean;
  displayName: boolean;
};

type content = linkType | panelType | sectionType | iconType;
type contents = Array<content>;
