export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

export default class ServiceUtils {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  };

  fetchRequest(path, method = GET, payload) {
    const url = `${this.baseUrl}${path}`,
          reqObj = { method };

    [POST, PUT, PATCH].includes(method) && (
      reqObj.headers = {
        'Content-Type': 'application/json'
      },
      reqObj.body = JSON.stringify(payload)
    );

    return fetch(url, requestObj).then(res => res.json());
  }

  get(path) {
    return this.fetchRequest(path);
  }

  post(path, payload) {
    return this.fetchRequest(path, POST, payload);
  }

  put(path, payload) {
    return this.fetchRequest(path, PUT, payload);
  }

  patch(path, payload) {
    return this.fetchRequest(path, PATCH, payload);
  }

  delete(path) {
    return this.fetchRequest(path, DELETE);
  }
}
