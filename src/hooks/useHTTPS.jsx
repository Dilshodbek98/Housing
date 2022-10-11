import { useNavigate } from "react-router-dom";

export const UzeHttps = () => {
  const navigate = useNavigate();
  const request = async ({
    url,
    method = "GET",
    body = {},
    token,
    headers={},
  }) => {
    if (token) headers.Authorization = `Bearer ${token}`;
    headers["content-type"] = "application/json";

    return fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          navigate("/home");
        } else {
          return res;
        }
      });
  };
  return request
};

export default UzeHttps