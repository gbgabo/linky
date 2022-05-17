import React, { ReactElement } from "react";
import Home from "../components/Home";

import ThemeProvider from "../context/Theme";

import * as data from "../samples/data.json";
interface PageProps {
  profile: profileType;
}

let profileData = data.profile as profileType;

export default function Page({
  profile = profileData,
}: PageProps): ReactElement {
  return (
    <div>
      <ThemeProvider>
        <Home profile={profile} />
      </ThemeProvider>
    </div>
  );
}
