/**
 * Use this method to make get requests.
 * @param url The http(s) url request to request
 * @returns the json data for the request
 */
export const getRequest = <F>(url: string) =>
  fetch(url)
    .then(async (data): Promise<F> => {
      return await data.json();
    })
    .catch((reason) => {
      console.log("error", reason);
      throw reason;
    });

/**
 * Use this method to make post requests.
 * @param url The http(s) url request to request
 * @param body A generic typed body to make the post request with
 * @returns The post answer
 */
export const postRequest = <T, F>(url: string, body: T) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (data): Promise<F> => {
      return await data.json();
    })
    .catch((reason) => {
      console.log("error", reason);
      throw reason;
    });
