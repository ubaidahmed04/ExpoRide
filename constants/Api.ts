const key = "b16b1d60-3c8c-4cd6-bae6-07493f23e589";
const api = `https://graphhopper.com/api/1/geocode&`;

const defaultParams = {
  key: "b16b1d60-3c8c-4cd6-bae6-07493f23e589",
  provider: "default",
  locale: "en",
  osm_tag: "!place:county",
  osm_tag: "!boundary",
  osm_tag: "!historic",
};

const API = {
  getCode: async (q: string) => {
    try {
      const params = { ...defaultParams, q }; // Merging default params with q
      const urlParams = new URLSearchParams(params);
      const apiUrlWithParams = `https://graphhopper.com/api/1/geocode?${urlParams.toString()}`;

      const response = await fetch(apiUrlWithParams);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
  getRoutes: async (obj: any) => {
    let { point_1, point_2 } = obj;

    try {
      const apiUrlWithParams = `https://graphhopper.com/api/1/route?point=${point_1}&point=${point_2}&profile=car&locale=de&calc_points=true&key=${key}`;

      const fetchOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(apiUrlWithParams, fetchOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};

export default API;
