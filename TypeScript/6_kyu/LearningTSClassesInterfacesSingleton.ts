export class SingletonCounter {
  private counter: number = 0;
  private static instance: SingletonCounter;

  private constructor() {}

  public static getInstance(): SingletonCounter {
    if (!SingletonCounter.instance) {
      SingletonCounter.instance = new SingletonCounter();
    }

    return SingletonCounter.instance;
  }

  public inc(): number {
    return ++this.counter;
  }
}
