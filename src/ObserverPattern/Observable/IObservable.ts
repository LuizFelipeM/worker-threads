export default interface IObservable<T> {
  [x: string]: T | any extends T
}