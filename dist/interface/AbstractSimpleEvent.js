"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractSimpleEvent {
    constructor() {
        this.listeners = [];
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    removeListener(listener) {
        const index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }
    clearListeners() {
        this.listeners = [];
    }
    dispatch(data) {
        if (this.parent) {
            this.parent.dispatch(data);
        }
        for (const listener of this.listeners) {
            listener(data);
        }
    }
    setParent(parent) {
        this.parent = parent;
    }
}
exports.default = AbstractSimpleEvent;
