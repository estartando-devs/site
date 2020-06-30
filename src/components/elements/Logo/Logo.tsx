import React from "react";
import { Link } from "react-router-dom";
import * as S from "./LogoStyled";

interface LogoProps {
  width: string;
  height: string;
  padding: string;
  margin: string;
  position: string;
}

const LogoDefaultProps: LogoProps = {
  width: "150px",
  height: "auto",
  padding: "0",
  margin: "0",
  position: "relative",
};

const Logo = ({
  width,
  height,
  padding,
  margin,
  position,
}: LogoProps) => (
  <Link to="/">
    <S.LogoSvg width="500" height="300" viewBox="0 0 3065 1377" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
            d="M99.6943 782.193V912.872H15.7065V727.505L361.009 531.476L604.495 669.867L619.436 678.359V661.173V381.651L703.424 332.779V912.872H619.436V782.193V776.399L614.41 773.517L363.093 629.443L358.09 626.575L353.102 629.468L104.677 773.542L99.6943 776.432V782.193Z"
            stroke="white" stroke-width="20" />
        <path
            d="M15.7094 1166.66V977.314H99.6971V1111.91V1117.7L104.723 1120.58L356.041 1264.66L361.043 1267.53L366.031 1264.64L614.456 1120.56L619.439 1117.67V1111.91V977.314H703.427V1166.64L358.142 1365.45L15.7094 1166.66Z"
            stroke="white" stroke-width="20" />
        <path
            d="M1148.72 899.294L1067.16 850.476L1298.14 714.936L1313.06 706.186L1298.03 697.623L1156.49 616.944L1151.52 614.114L1146.56 616.957L895.249 761.031L890.223 763.913V769.707V912.871H806.229V714.969L1145.83 518.988L1480.87 706.472L1148.72 899.294Z"
            stroke="white" stroke-width="20" />
        <path
            d="M806.235 1154.13V977.314H890.228V1099.42V1105.18L895.211 1108.07L1143.63 1252.14L1148.65 1255.05L1153.66 1252.14L1397.06 1110.98L1481.06 1159.85L1148.64 1350.11L806.235 1154.13Z"
            stroke="white" stroke-width="20" />
        <path d="M1642.18 577.087L1716.45 914.764H1622.29L1533.49 536.446L1642.18 577.087Z" stroke="white"
            stroke-width="20" />
        <path d="M2244.62 536.438L2155.82 914.761H2061.65L2135.92 577.033L2244.62 536.438Z" stroke="white"
            stroke-width="20" />
        <path
            d="M1819.93 1260.47L1822.17 1267.39H1829.44H1944.58H1951.83L1954.08 1260.5L2046.71 977.923H2140L2013.82 1352.98H1759.3L1634.62 977.923H1728.27L1819.93 1260.47Z"
            stroke="white" stroke-width="20" />
        <path
            d="M2893.89 767.802L2650.42 629.423L2645.51 626.631L2640.58 629.399L2389.26 770.591L2374.04 779.146L2389.12 787.947L2603.27 912.871H2434.48L2300.17 834.097V727.463L2645.43 528.654L2975.01 721.566L2893.89 767.802Z"
            stroke="white" stroke-width="20" />
        <path
            d="M3045.01 1172.41L2715.45 1362.59L2383.06 1172.35L2467.06 1123.47L2710.45 1264.63L2715.51 1267.57L2720.55 1264.59L2862.1 1181.03L2876.85 1172.32L2862.02 1163.76L2539.07 977.314H2707.57L3045.01 1172.41Z"
            stroke="white" stroke-width="20" />
        <path
            d="M0 191.119H92.1119V174.155H18.9891V98.6689H79.357V81.7072H18.9891V19.5108H92.1119V2.54635H0V191.119ZM256.209 42.6912C251.393 18.9393 238.357 0 211.713 0C184.785 0 167.785 22.623 167.785 48.0641C167.785 75.7714 182.244 84.8194 204.061 97.5428C223.617 108.851 239.77 117.331 239.77 142.212C239.77 164.829 228.152 175.858 211.713 175.858C188.765 175.858 184.224 160.025 181.668 139.102L162.685 141.646C165.521 171.617 177.7 193.671 211.149 193.671C242.887 193.671 258.762 170.199 258.762 140.517C258.762 111.395 242.884 99.8062 219.649 85.9484C189.893 68.1407 186.771 63.331 186.771 48.0669C186.771 32.2341 193.859 17.816 211.71 17.816C227.869 17.816 234.67 31.6683 237.787 45.5177L256.206 42.694L256.209 42.6912ZM371.562 191.119H390.556V19.5136H430.52V2.54915H330.75V19.5136H371.562V191.119ZM576.474 132.881L591.214 194.794L609.922 189.704L562.02 2.54635H539.352L491.455 189.704L510.158 194.794L524.892 132.881H576.474ZM571.944 115.916H529.433L550.402 27.7073H550.969L571.944 115.916ZM700.616 19.5136H723.856C743.126 19.5136 755.03 27.9874 755.03 52.5881C755.03 78.0348 744.831 90.1895 728.392 90.1895H700.616V19.5136ZM681.627 191.119H700.616V107.148H721.871L764.387 194.794L781.391 186.595L742.278 105.739C765.519 97.8201 774.876 75.7686 774.876 52.5853C774.876 18.6592 751.351 2.54635 732.64 2.54635H681.627V191.119ZM881.722 191.119H900.717V19.5136H940.681V2.54915H840.911V19.5136H881.722V191.119ZM1086.63 132.881L1101.37 194.794L1120.08 189.704L1072.18 2.54635H1049.51L1001.61 189.704L1020.32 194.794L1035.05 132.881H1086.63ZM1082.1 115.916H1039.59L1060.56 27.7073H1061.13L1082.1 115.916ZM1181.58 191.122H1200.57V75.4856L1199.72 32.8L1200.28 32.2341L1256.4 191.122H1280.21V2.54915H1261.22V118.465L1262.07 160.585L1261.51 161.151L1205.39 2.54915H1181.58V191.122ZM1364.95 19.5164V174.157H1349.65V191.122H1400.1C1457.64 191.122 1459.9 138.539 1459.9 96.9769C1459.9 19.2307 1437.51 2.55195 1399.53 2.55195H1349.65V19.5164H1364.95ZM1383.95 19.5164H1404.06C1420.79 19.5164 1440.06 25.1638 1440.06 96.9769C1440.06 168.219 1422.48 174.157 1399.53 174.157H1383.94V19.5164H1383.95ZM1571.01 0.00280126C1520.56 0.00280126 1518.57 65.5944 1518.57 96.6912C1518.57 121.003 1517.15 193.671 1571.01 193.671C1624.29 193.671 1623.44 120.443 1623.44 96.6912C1623.44 71.8188 1624.29 0.00280126 1571.01 0.00280126ZM1571.01 17.816C1604.45 17.816 1603.59 61.0703 1603.59 96.6912C1603.59 129.488 1603.88 175.858 1571.01 175.858C1544.36 175.858 1538.41 147.585 1538.41 96.6912C1538.41 68.9895 1537.56 17.816 1571.01 17.816Z"
            fill="white" />
    </S.LogoSvg>
  </Link>
);

Logo.defaultProps = LogoDefaultProps;

export default Logo;
