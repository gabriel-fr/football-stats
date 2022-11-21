export const getHeadersRequest = () => {
  const { token } = JSON.parse(localStorage.getItem("user_token") || "");
  return {
    headers: {
      "x-rapidapi-key": token,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  };
};
