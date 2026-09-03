declare module "circletype" {
  export default class CircleType {
    constructor(element: HTMLElement);
    radius(value: number): this;
    dir(direction: number): this;
  }
}
