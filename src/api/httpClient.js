const baseConfig = {
  mode: "cors",
  headers: new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
  })
};

export async function get(url) {
  const result = await fetch(url, baseConfig);
  return await result.json();
}

export default {
  get
};
