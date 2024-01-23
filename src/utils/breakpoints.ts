const config = "@media screen and (max-width:";

export const screenWidth = {
  large: 1170,
  desktop: 992,
  tablet: 768,
  mobile: 376
};

export const breakPoints = {
  large : `${config} ${screenWidth.large}px)`,
  desktop : `${config} ${screenWidth.desktop}px)`,
  tablet : `${config} ${screenWidth.tablet}px)`,
  mobile : `${config} ${screenWidth.mobile}px)`,
}
