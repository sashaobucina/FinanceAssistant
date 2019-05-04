export interface ITrainer {
  train: () => Promise<void>;
}

export interface IRasaConfig {
  language: string;
  pipeline: Array<{ name: string }>;
}

export interface ISentence {
  intent: string;
  sentences: string[];
}
