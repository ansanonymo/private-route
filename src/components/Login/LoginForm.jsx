import { useForm } from "react-hook-form";
import InputField from "../Common/InputField";
import { authenticate } from "../../database/database";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const {setAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = async(formData) => {
    try {
      const auth = await authenticate(formData);
      setAuth(auth);
      navigate("/");
    } catch (err) {
      setError("root", {
        type: "random",
        message: err.message,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4 md:space-y-6"
    >
      <InputField label="Your Email" htmlFor="email" error={errors.email}>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="anonymo@email.com"
          {...register("email", {
            required: "please enter your email",
          })}
        />
      </InputField>

      <InputField
        label="Your Password"
        htmlFor="password"
        error={errors.password}
      >
        <input
          type="password"
          name="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="anonymo@1234"
          {...register("password", {
            required: "Please enter your password",
            minLength: {
              value: 8,
              message: "Password should be at least 8 character",
            },
          })}
        />
      </InputField>

      <div className="flex items-center justify-center">
        <button
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {
        errors?.root && <p className="text-sm text-center text-rose-800">{errors?.root?.message}</p>
      }
      <button
        type="submit"
        className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Log in
      </button>
    </form>
  );
}
