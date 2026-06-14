import { redirect } from "next/navigation";

// Always send the bare domain to the public booking page.
// The admin dashboard is reached directly via /auth/login or /event-types.
const RedirectPage = async () => {
  redirect("/haimphysio");
};

export default RedirectPage;
