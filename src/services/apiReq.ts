const API_BASE_URL = import.meta.env.VITE_API_URL;

const apiReq = async (method: string, endpoint: string, body?: unknown) => {
  const options: RequestInit = {
    method,
  };

  if (body) {
    if (body instanceof FormData) {
      // The browser will automatically set Content-Type to 'multipart/form-data'
      options.body = body;
    } else {
      options.headers = {
        "Content-Type": "application/json",
      };
      options.body = JSON.stringify(body);
    }
  }

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, options);

    // Attempt to parse JSON, gracefully handle non-JSON responses.
    const data = await res.json();

    return data;
  } catch (err) {
    console.error("API Request Error:", err);
    throw err;
  }
};

export default apiReq;
