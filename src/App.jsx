import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AuthProvider from "./providers/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
