const baseConfig = {
  mode: "cors",
  headers: new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
  })
};

function requestWithBody({ method }) {
  return async (url, body) => {
    const result = await fetch(url, {
      ...baseConfig,
      method,
      body: JSON.stringify(body)
    });
    return await result.json();
  };
}

export const get = async url => {
  const result = await fetch(url, baseConfig);
  return await result.json();
};
export const remove = async url => {
  return await fetch(url, {
    ...baseConfig,
    method: "DELETE"
  });
};
export const post = requestWithBody({ method: "POST" });
export const put = requestWithBody({ method: "PUT" });
export const patch = requestWithBody({ method: "PATCH" });

export default {
  get,
  post,
  put,
  patch,
  remove
};
