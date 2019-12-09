import {WorldTimeClient} from "../src";

(async () => {
  const client = new WorldTimeClient({useSsl: true});
  console.log(await client.timezones());
})();
(async () => {
  const client = new WorldTimeClient();
  console.log(await client.timezones());
})()
