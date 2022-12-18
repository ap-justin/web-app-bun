import { parseRawLog } from "./cosmos";

export function getWasmAttribute(attribute: string, rawLog?: string) {
  const logs = parseRawLog(rawLog);
  return logs[0].events
    .find((e) => e.type === "wasm")
    ?.attributes.find((a) => a.key === attribute)?.value;
}
