export default interface Options {
  apiKey?: string;
  sources?: string;
}

export type Key = keyof Options;
