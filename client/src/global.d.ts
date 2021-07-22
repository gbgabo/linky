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
  image: string;
};

type contents = Array<linkType | panelType | sectionType>;
