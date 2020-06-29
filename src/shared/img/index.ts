import iconFacebook from "./icon-facebook.svg";
import iconInstagram from "./icon-instagram.svg";
import logoDevs from "./logo-devs.svg";
import nossaMetodologia from "./nossa-metodologia.svg";
import backgroundHeader from "./background-header.png";
import iconScroll from "./scroll.svg";
import subscribe from "./subscribe.svg";
import checklist from "./checklist.svg";
import encounter from "./encounter.svg";
import support from "./support.svg";
import onlineCourse from "./online-course.svg";
import mockuops from "./mockuops.svg";

interface IImage<T> {
  [id: string]: T;
}

const IMAGES: IImage<string> = {
  iconFacebook,
  iconInstagram,
  logoDevs,
  nossaMetodologia,
  backgroundHeader,
  iconScroll,
  subscribe,
  checklist,
  encounter,
  onlineCourse,
  support,
  mockuops,
};

export const getImage = (key: string) => IMAGES[key];

export {
  iconFacebook,
  iconInstagram,
  logoDevs,
  nossaMetodologia,
  backgroundHeader,
  iconScroll,
};
