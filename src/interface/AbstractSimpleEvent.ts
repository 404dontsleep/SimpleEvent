abstract class AbstractSimpleEvent<T> {
  private parent?: AbstractSimpleEvent<T>;
  private listeners: Array<(data: T) => void> = [];
  public addListener(listener: (data: T) => void): void {
    this.listeners.push(listener);
  }
  public removeListener(listener: (data: T) => void): void {
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

  public setParent(parent: AbstractSimpleEvent<T>): void {
    this.parent = parent;
  }
}

export default AbstractSimpleEvent;
