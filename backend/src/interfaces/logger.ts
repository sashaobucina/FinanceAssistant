export interface ILogger {
  log: (input: string) => void;
  logError: (err: string | Error) => void;
}
