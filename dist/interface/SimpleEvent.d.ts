interface ISimpleEvent<T> {
    (data: T): void;
}
declare class SimpleEvent<T> {
    private parent?;
    private listeners;
    addListener(listener: ISimpleEvent<T>): void;
    removeListener(listener: ISimpleEvent<T>): void;
    clearListeners(): void;
    dispatch(data: T): void;
    setParent(parent: SimpleEvent<T>): void;
}
export default SimpleEvent;
export type { ISimpleEvent };
