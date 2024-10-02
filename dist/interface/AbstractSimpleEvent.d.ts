declare abstract class AbstractSimpleEvent<T> {
    private parent?;
    private listeners;
    addListener(listener: (data: T) => void): void;
    removeListener(listener: (data: T) => void): void;
    clearListeners(): void;
    dispatch(data: T): void;
    setParent(parent: AbstractSimpleEvent<T>): void;
}
export default AbstractSimpleEvent;
