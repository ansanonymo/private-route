import { Link } from "react-router-dom";
import RegisterForm from "../components/Register/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="py-6 flex flex-col justify-center items-center container mx-auto">
      <div className="flex flex-col items-center justify-center  w-full px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-600 md:text-2xl">
             Register
            </h1>
            <RegisterForm />
            <p className="text-sm font-light text-gray-500">
              If you have already account ?
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
