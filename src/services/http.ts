export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function http<T>(
  request: RequestInfo,
  config?: RequestInit,
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request, config);
  response.parsedBody = await response.json();
  return response;
}
