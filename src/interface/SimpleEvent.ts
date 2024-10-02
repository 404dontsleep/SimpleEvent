interface ISimpleEvent<T> {
  (data: T): void;
}
class SimpleEvent<T> {
  private parent?: SimpleEvent<T>;
  private listeners: Array<(data: T) => void> = [];
  public addListener(listener: ISimpleEvent<T>): void {
    this.listeners.push(listener);
  }
  public removeListener(listener: ISimpleEvent<T>): void {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }
  public clearListeners(): void {
    this.listeners = [];
  }

  public dispatch(data: T): void {
    if (this.parent) {
      this.parent.dispatch(data);
    }
    for (const listener of this.listeners) {
      listener(data);
    }
  }

  public setParent(parent: SimpleEvent<T>): void {
    this.parent = parent;
  }
}

export default SimpleEvent;
