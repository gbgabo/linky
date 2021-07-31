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

type profileType = {
  name: string;
  address: string | undefined;
  image: string;
};

type content = linkType | panelType | sectionType;
type contents = Array<content>;
