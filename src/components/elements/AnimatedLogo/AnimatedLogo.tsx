import React from "react";
import { Link } from "react-router-dom";
import * as S from "./AnimatedLogoStyled";

interface AnimatedLogoProps {
  width: string;
  height: string;
  padding: string;
  margin: string;
}

const AnimatedLogoDefaultProps: AnimatedLogoProps = {
  width: "150px",
  height: "auto",
  padding: "0",
  margin: "0",
};

const AnimatedLogo = ({
  width,
  height,
  padding,
  margin,
}: AnimatedLogoProps) => (
  <Link to="/">
    <S.AnimatedLogoSvg width="566" height="256" viewBox="0 0 566 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M67 96.5L2 133.5V170.5H21V145L66.5 118.5L113 145L112.812 170.5H132V59L113 70V122.5L67 96.5Z" stroke="white" stroke-width="3"/>
        <path d="M21 179H2V216.5L67 254L131.5 216.5V179H112.5V205L67 232L21 205V179Z" stroke="white" stroke-width="3"/>
        <path d="M147 131.5V170.5H166V142.5L212 116L238 131L193.5 157L211.5 168.5L276 131L211.5 94L147 131.5Z" stroke="white" stroke-width="3"/>
        <path d="M166 179H147V214L211.5 251.5L276 214.5L257 203.5L211.5 229.5L166 203V179Z" stroke="white" stroke-width="3"/>
        <path d="M297 171L279.5 97L303.5 106L318 171H297Z" stroke="white" stroke-width="3"/>
        <path d="M319 179H298L322 251H371.5L395.5 179H375L357 232H336.5L319 179Z" stroke="white" stroke-width="3"/>
        <path d="M391 106L376.5 171H397.5L415 97L391 106Z" stroke="white" stroke-width="3"/>
        <path d="M486 96L549.5 133.5L531.5 144.5L486 118.5L440 144.5L484.5 170.5H446L421 155.5V133.5L486 96Z" stroke="white" stroke-width="3"/>
        <path d="M498 179H460L524 216.5L498 231.5L453 205.5L434 216.5L498 253.5L562.5 216.5L498 179Z" stroke="white" stroke-width="3"/>
        <path d="M17 3H2.5V17.5M17 34.5H2.5V17.5M2.5 17.5H15" stroke="white" stroke-width="3"/>
        <path d="M46.5 9.00005C46.0504 7.06661 45.5 4.50005 43 3.00005C41.3333 2 39 1.50001 35.9998 3.49991C32.9996 5.4998 32.4998 10.9998 34.4998 13.9999C36.4998 17 43.9996 18.4999 45.9998 23C48 26.5001 45.9998 31.5 45.9998 31.5C43.4996 36.4999 32.5 37 32.5 27" stroke="white" stroke-width="3"/>
        <path d="M62 3H70.75M79.5 3H70.75M70.75 3V36" stroke="white" stroke-width="3"/>
        <path d="M92.5 36.5L95.4851 24M111 36.5L108.015 24M95.4851 24L100.5 3H103L108.015 24M95.4851 24H108.015" stroke="white" stroke-width="3"/>
        <path d="M127.5 35.5V19M127.5 19V3.00003C127.5 3.00003 128 2.99997 135.5 3.00003C143 3.00009 142.463 19.1661 135.5 19C134.969 18.9874 134 19 134 19M127.5 19C127.5 19 128 19.0324 134 19M134 19L142.5 35.5" stroke="white" stroke-width="3"/>
        <path d="M155.5 3H164.25M173 3H164.25M164.25 3V36" stroke="white" stroke-width="3"/>
        <path d="M186 36.5L188.985 24M204.5 36.5L201.515 24M188.985 24L194 3H196.5L201.515 24M188.985 24H201.515" stroke="white" stroke-width="3"/>
        <path d="M219.5 36V3H221L232 35.5H234V1.5" stroke="white" stroke-width="3"/>
        <path d="M249 3C249 3 248.719 3 253 3M249 34.5C249 34.5 248.421 34.5 253 34.5M253 3C254.43 3 255.5 3 259 3C262.5 3.00001 266.731 6 267 18C267.269 30 263 34.5 259 34.5C255 34.5 254.435 34.5 253 34.5M253 3V34.5" stroke="white" stroke-width="3"/>
        <path d="M294.001 4.5C294.001 4.5 292.001 2.5 289.001 2.5C286.001 2.5 284.001 4.5 284.001 4.5C279.235 8.41331 281.003 31 284.001 33.5C287 36 289 35.5 289 35.5C289 35.5 291.631 35.6898 294.001 33.5C296.372 31.3102 298.502 8.35644 294.001 4.5Z" stroke="white" stroke-width="3"/>
    </S.AnimatedLogoSvg>
  </Link>
);

AnimatedLogo.defaultProps = AnimatedLogoDefaultProps;

export default AnimatedLogo;