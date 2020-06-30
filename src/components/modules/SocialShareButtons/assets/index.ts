import FacebookIcon from "./icon-facebook.svg";
import InstagramIcon from "./icon-instagram.svg";

interface ISocialShare {
  icon: any;
  name: string;
  url: string;
}

const SocialShareIcons: ISocialShare[] = [
  {
    icon: InstagramIcon,
    name: "Instagram",
    url: "https://www.instagram.com/estartandodevs/",
  },
  {
    icon: FacebookIcon,
    name: "Facebook",
    url: "https://www.facebook.com/estartandoDevs/",
  },
];

export {
  FacebookIcon, InstagramIcon, SocialShareIcons,
};
