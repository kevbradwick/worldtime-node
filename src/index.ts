import axios from "axios";

interface ClientOptions {
  useSsl: boolean;
}

const DEFAULT_OPTIONS: ClientOptions = {
  useSsl: false,
};

export class WorldTimeClient {
  constructor(private readonly options: ClientOptions = DEFAULT_OPTIONS) {}

  public async timezones(): Promise<string[]> {
    const resp = await axios.get<string[]>("http://worldtimeapi.org/api/timezone");

    return resp.data;
  }
}
