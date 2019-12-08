import {WorldTimeClient} from "../src";

(async () => {
  const client = new WorldTimeClient({useSsl: true});
  console.log(await client.timezones());
})();
