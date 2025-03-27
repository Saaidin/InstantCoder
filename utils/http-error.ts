export class HttpError extends Error {
  status: number;
  statusText: string;
  url?: string;
  error?: any;

  constructor({
    status,
    statusText,
    url,
    error,
  }: {
    status: number;
    statusText: string;
    url?: string;
    error?: any;
  }) {
    super(`${status} ${statusText}`);
    this.status = status;
    this.statusText = statusText;
    this.url = url;
    this.error = error;
  }

  toJSON() {
    return {
      status: this.status,
      statusText: this.statusText,
      url: this.url,
      error: this.error,
    };
  }
}
