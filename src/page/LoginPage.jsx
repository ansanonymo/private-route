import { Link } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";

export default function LoginPage() {
  return (
    <section className="py-6 flex flex-col justify-center items-center container mx-auto">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full">
        <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-600 md:text-2xl">
             Log In
            </h1>
            <LoginForm />
            <p className="text-sm font-light text-gray-500">
              Don{"'"}t have an account yet?{" "}
              <Link
                to="/register"
                className="font-medium text-primary-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
