const config ="@media screen and (max-width:"

export enum breakPoint {
  large = `${config} ${1170 / 16}rem)`,
  desktop = `${config} ${992 / 16}rem)`,
  tablet = `${config} ${768 / 16}rem)`,
  mobile = `${config} ${376 / 16}rem)`,
}
