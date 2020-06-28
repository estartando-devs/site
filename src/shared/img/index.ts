import iconFacebook from "./icon-facebook.svg";
import iconInstagram from "./icon-instagram.svg";
import logoDevs from "./logo-devs.svg";
import nossaMetodologia from "./nossa-metodologia.svg";

interface IImage<TValue> {
  [id: string]: TValue;
}

const images: IImage<string> = {
  iconFacebook,
  iconInstagram,
  logoDevs,
  nossaMetodologia,
};

export default images;
