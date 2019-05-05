export class ChatResponse implements IChatResponse {
  constructor(
    public readonly data: any,
    public readonly intent: string,
    public readonly success: boolean
  ) {}
}

export interface IChatResponse {
  data: any;
  intent: string;
  success: boolean;
}
