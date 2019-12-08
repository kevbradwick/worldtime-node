interface ClientOptions {
  useSsl: boolean;
}

export class WorldTimeClient {
  constructor(private readonly options: ClientOptions) {}

  public async timezones(): Promise<string[]> {
    return [];
  }
}
