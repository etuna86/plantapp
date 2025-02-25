import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
    fill?: string;
    width?: number;
    height?: number;
}

export const HomeIcon: React.FC<IconProps> = ({ fill = "#BDBDBD", width = 21, height = 22 }) => (
    <Svg width={width} height={height} viewBox="0 0 21 22" fill="none" >
        <Path d="M4.50093 2.04205H16.5086C16.4422 1.22912 15.949 0.785706 15.0385 0.785706H5.96158C5.06053 0.785706 4.55784 1.22912 4.50093 2.04205ZM2.56605 4.71179H18.4435C18.3107 3.83419 17.8554 3.33535 16.85 3.33535H4.15949C3.1541 3.33535 2.69884 3.83419 2.56605 4.71179ZM3.68525 21.3214H17.3148C19.2876 21.3214 20.3214 20.3238 20.3214 18.4207V9.11821C20.3214 7.21524 19.2876 6.21756 17.3148 6.21756H3.68525C1.70294 6.21756 0.678589 7.206 0.678589 9.11821V18.4207C0.678589 20.3238 1.70294 21.3214 3.68525 21.3214Z" fill={fill} />
    </Svg>
);

export const DiagnoseIcon: React.FC<IconProps> = ({ fill = "#BDBDBD", width = 19, height = 21 }) => (
    <Svg width={width} height={height} viewBox="0 0 19 21" fill="none" >
        <Path d="M18.0125 2.19998C17.9583 2.20414 12.4208 2.67914 9.78748 0.199976C9.62914 0.0458089 9.37914 0.0458089 9.21664 0.199976C6.58331 2.67914 1.04998 2.20414 0.991642 2.19998C0.874976 2.18748 0.762476 2.22914 0.674976 2.30831C0.587476 2.38748 0.537476 2.49581 0.537476 2.61248V6.47498C0.537476 19.3791 9.34998 20.9 9.43748 20.9125C9.45831 20.9166 9.48331 20.9166 9.50414 20.9166C9.52498 20.9166 9.54581 20.9166 9.56664 20.9125C9.65414 20.9 18.4666 19.3791 18.4666 6.47498V2.61248C18.4666 2.49581 18.4166 2.38748 18.3333 2.30831C18.2458 2.22914 18.1291 2.18748 18.0125 2.19998ZM13.9541 11.5583C13.9541 11.7875 13.7666 11.975 13.5375 11.975H10.9708V14.5416C10.9708 14.7708 10.7833 14.9583 10.5541 14.9583H8.44581C8.21664 14.9583 8.02914 14.7708 8.02914 14.5416V11.975H5.46248C5.23331 11.975 5.04581 11.7875 5.04581 11.5583V9.44998C5.04581 9.22081 5.23331 9.03331 5.46248 9.03331H8.02914V6.46664C8.02914 6.23748 8.21664 6.04998 8.44581 6.04998H10.5541C10.7833 6.04998 10.9708 6.23748 10.9708 6.46664V9.03331H13.5375C13.7666 9.03331 13.9541 9.22081 13.9541 9.44998V11.5583Z" fill={fill} />
    </Svg>
);

export const MyGardenIcon: React.FC<IconProps> = ({ fill = "#BDBDBD", width = 22, height = 24 }) => (
    <Svg width={width} height={height} viewBox="0 0 22 24" fill="none" >
        <Path fillRule="evenodd" clipRule="evenodd" d="M11.8593 0.594413L11.7938 0.513694C11.4477 0.137006 10.8278 0.16389 10.5207 0.594367L4.79361 8.62218L4.65928 8.8164C2.17065 12.5308 3.29784 17.5946 7.17281 19.8975C8.16599 20.4873 9.25722 20.8404 10.3678 20.9568L10.3684 23.1802L10.3739 23.2758C10.4214 23.6835 10.7686 24 11.1899 24C11.6437 24 12.0115 23.6329 12.0115 23.1802L12.0114 20.9568C13.1219 20.8404 14.213 20.4873 15.206 19.8976L15.4072 19.7739L15.604 19.6444C19.2307 17.1819 20.1469 12.2118 17.5854 8.6221L11.8593 0.594413ZM21.6616 17.6569C21.7527 17.2133 21.4663 16.78 21.0218 16.6891C20.5774 16.5981 20.1431 16.8839 20.052 17.3275C19.9247 17.9465 19.6293 18.4851 19.2113 18.9477C19.0071 19.1736 18.7875 19.3659 18.5694 19.5231L18.437 19.6146L18.2337 19.7383C17.8948 19.9709 17.777 20.4252 17.9741 20.7968C18.1864 21.197 18.6836 21.3496 19.0846 21.1378C19.4432 20.9483 19.9388 20.591 20.4315 20.0457C21.0348 19.3781 21.4714 18.5824 21.6616 17.6569ZM11.19 7.39839C10.7687 7.39839 10.4214 7.71488 10.3739 8.12262L10.3684 8.21823L10.3681 11.3246L9.12085 10.0516L9.04421 9.98251C8.7247 9.72891 8.25846 9.74653 7.95906 10.0388C7.65966 10.3311 7.63175 10.7958 7.87879 11.1202L7.94627 11.1981L10.3082 13.6076L10.3681 13.6619L10.3684 17.4414L10.3739 17.537C10.4214 17.9447 10.7687 18.2612 11.19 18.2612C11.5789 18.2612 11.9047 17.9915 11.9898 17.6293L12.006 17.537L12.0104 17.4561L14.7834 14.4809L14.8489 14.4012C15.0876 14.0707 15.0479 13.6068 14.7412 13.3222C14.4344 13.0376 13.9679 13.0318 13.6549 13.2934L13.5801 13.3644L12.0112 15.0474L12.0115 8.21823L12.006 8.12262C11.9585 7.71488 11.6113 7.39839 11.19 7.39839ZM3.50764 7.20212C3.76509 6.88594 3.75231 6.42052 3.46257 6.11872C3.14869 5.79176 2.62863 5.78063 2.30098 6.09385C1.98552 6.39544 1.54537 6.94071 1.11293 7.72105C0.762138 8.35406 0.476043 9.0505 0.277044 9.80817C0.162008 10.2462 0.424558 10.6943 0.863466 10.8091C1.30237 10.9239 1.75143 10.6619 1.86647 10.2239C2.02964 9.60262 2.264 9.03211 2.55082 8.51454C2.75393 8.14803 2.97049 7.83074 3.18492 7.56511L3.31538 7.40931L3.50764 7.20212Z" fill={fill} />
    </Svg>
);

export const ProfileIcon: React.FC<IconProps> = ({ fill = "#BDBDBD", width = 20, height = 20 }) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill={fill} >
        <Path d="M9.9521 9.77203C12.3362 9.77203 14.4084 7.7698 14.4084 5.16274C14.4084 2.58696 12.3362 0.678589 9.9521 0.678589C7.56797 0.678589 5.49578 2.62867 5.49578 5.18359C5.49578 7.7698 7.55683 9.77203 9.9521 9.77203ZM2.47661 19.4286H17.4165C18.6085 19.4286 19.3215 18.9072 19.3215 18.0416C19.3215 15.3511 15.723 11.6387 9.94096 11.6387C4.17002 11.6387 0.571533 15.3511 0.571533 18.0416C0.571533 18.9072 1.28455 19.4286 2.47661 19.4286Z" fill={fill} />
    </Svg>
);

