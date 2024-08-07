import { useForm } from "react-hook-form";
import InputField from "../Common/InputField";
import { addUser } from "../../database/database";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleFormSubmit = async (formData) => {
    const user = {};
    user.username = formData.username;
    user.password = formData.password;
    user.email = formData.email;

    try {
      const result = await addUser(user);
      if (result === true) {
        navigate("/login");
      } else {
        setError("root.random", {
          type: "random",
          message: "Something is wrong",
        });
      }
    } catch (err) {
      setError("root.random", {
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
      <InputField label="Username" htmlFor="username" error={errors.username}>
        <input
          type="text"
          name="username"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="anonymo"
          {...register("username", {
            required: "Please enter your user name.",
            minLength: {
              value: 5,
              message: "User name should be at least 5 character.",
            },
            maxLength: {
              value: 30,
              message: "User name should be under 30 character",
            },
            validate: (value) => {
              return value.includes(" ") ? "Space is not allowed" : true;
            },
          })}
        />
      </InputField>

      <InputField label="Your Email" htmlFor="email" error={errors.email}>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="name@company.com"
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

      <InputField
        label="Retype Password"
        htmlFor="repassword"
        error={errors.repassword}
      >
        <input
          type="password"
          name="repassword"
          id="repassword"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="type again password"
          {...register("repassword", {
            required: "Please retype your password",
            validate: (password, formData) => {
              return password === formData.password
                ? true
                : "Password does not match.";
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

      {errors?.root?.random && (
        <p className="text-sm text-center text-rose-800">
          {errors?.root?.random?.message}
        </p>
      )}
      <button
        type="submit"
        className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Log in
      </button>
    </form>
  );
}
