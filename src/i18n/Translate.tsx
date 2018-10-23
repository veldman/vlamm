import * as React from "react";

import { LanguageContext } from "../contexts/languageContext";
import { Languages, translations } from "./translations";

const trans = (l: Languages, msgid: string) =>
  translations[l][msgid] ? translations[l][msgid] : msgid;

interface ITranslateProps {
  msgid: string;
}

export const Translate: React.SFC<ITranslateProps> = ({ msgid }) => {
  return (
    <LanguageContext.Consumer>
      {l => <>{trans(l, msgid)}</>}
    </LanguageContext.Consumer>
  );
};
