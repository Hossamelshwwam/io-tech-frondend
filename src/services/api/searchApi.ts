import { api } from "@/lib/api";

export const searchApi = {
  getSearch: async (data: {
    field: "teams" | "services";
    q: string;
    page: number;
    pageSize: number;
    locale?: string;
  }) => {
    const { field, q, page, pageSize, locale } = data;
    const res = await api.get(
      `/api/${field}?filters[${
        field === "services" ? "title" : "name"
      }][$contains]=${q}&pagination[page]=${page}&pagination[pageSize]=${pageSize}${
        locale ? `&locale=${locale}` : ""
      }`
    );
    return res.data;
  },
};
