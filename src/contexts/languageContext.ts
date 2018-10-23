import * as React from "react";
import { Languages } from "src/i18n/translations";

const value = navigator.language === 'nl-NL' ? 'nl-NL' : 'en-GB';

export const LanguageContext = React.createContext(value as Languages);