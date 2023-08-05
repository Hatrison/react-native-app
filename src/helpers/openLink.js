import { Linking } from "react-native";

const openLink = (url) => {
  return () => Linking.openURL(url);
};

export default openLink;
