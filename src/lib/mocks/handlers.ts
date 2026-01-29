import { http, HttpResponse } from "msw";

export const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
export const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

export const handlers = [
  http.get(`${APPWRITE_ENDPOINT}/account`, () => {
    return new HttpResponse(null, { status: 401 });
  }),

  http.post(
    `${APPWRITE_ENDPOINT}/account/sessions/email`,
    async ({ request }) => {
      const body = (await request.json()) as {
        email?: string;
        password?: string;
      };

      if (body.email === "teste@exemplo.com" && body.password === "123456") {
        return HttpResponse.json({
          $id: "session_id_123",
          userId: "user_id_123",
          expire: "2024-12-31T23:59:59.999Z",
          provider: "email",
        });
      }

      return new HttpResponse(null, { status: 401 });
    },
  ),
];
