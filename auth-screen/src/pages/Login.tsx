import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const backgroundStyle = {
  backgroundSize: "40px 40px, 40px 40px, 10px 10px, 10px 10px",
  backgroundImage:
    "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px), radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 0), radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.08) 1px, transparent 0)",
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen font-sans bg-[#F8F8FA]">
      <div
        className="w-full bg-[#2563EB] pt-12 pb-24 px-4 text-center"
        style={backgroundStyle}
      >
        <div className="flex flex-col gap-4 items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w.org/2000/svg"
          >
            <path
              d="M14 28C21.7322 28 28 21.7322 28 14V4.2C28 3.08609 27.5575 2.0178 26.7699 1.23015C25.9822 0.442499 24.9139 0 23.8 0H14.7V6.1418C14.7 7.5432 14.7854 8.995 15.5204 10.1878C16.0466 11.0426 16.7505 11.7743 17.5844 12.3332C18.4182 12.892 19.3625 13.265 20.3532 13.4267L20.6213 13.4701C20.7319 13.5079 20.8278 13.5793 20.8957 13.6743C20.9637 13.7693 21.0002 13.8832 21.0002 14C21.0002 14.1168 20.9637 14.2307 20.8957 14.3257C20.8278 14.4207 20.7319 14.4921 20.6213 14.5299L20.3532 14.5733C18.9058 14.8098 17.5691 15.4949 16.532 16.532C15.4949 17.5691 14.8098 18.9057 14.5733 20.3532L14.5299 20.6213C14.4922 20.7318 14.4208 20.8278 14.3257 20.8957C14.2307 20.9636 14.1168 21.0002 14 21.0002C13.8832 21.0002 13.7693 20.9636 13.6743 20.8957C13.5793 20.8278 13.5079 20.7318 13.4701 20.6213L13.4267 20.3532C13.2649 19.3625 12.892 18.4182 12.3331 17.5844C11.7743 16.7505 11.0427 16.0466 10.1878 15.5204C8.99503 14.7854 7.54323 14.7 6.14183 14.7H0.0168335C0.382934 22.1067 6.50303 28 14 28Z"
              fill="white"
            />
            <path
              d="M0 13.3001H6.1418C7.5432 13.3001 8.995 13.2147 10.1878 12.4797C11.1202 11.9052 11.9051 11.1203 12.4796 10.1879C13.2146 8.99508 13.3 7.54328 13.3 6.14188V8.46032e-05H4.2C3.08609 8.46032e-05 2.0178 0.442583 1.23015 1.23024C0.442499 2.01789 0 3.08618 0 4.20008V13.3001Z"
              fill="white"
            />
          </svg>
          <h1 className="text-white text-4xl font-bold">Sign in to your Account</h1>
          <p className="text-blue-200 font-medium text-base">
            Enter your email and password to log in
          </p>
        </div>
      </div>

      <div className="w-full px-4 flex justify-center -mt-20">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6">
          <button className="w-full flex text-gray-700 font-semibold border border-gray-200 justify-center items-center gap-3 py-3 rounded-lg cursor-pointer hover:bg-gray-50 duration-300">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.8758 9.17493C16.8758 8.52743 16.8222 8.05493 16.7061 7.56494H9.1615V10.4874H13.59C13.5008 11.2137 13.0186 12.3074 11.9472 13.0424L11.9322 13.1402L14.3176 14.9513L14.4829 14.9674C16.0007 13.5937 16.8758 11.5724 16.8758 9.17493Z" fill="#4285F4" />
              <path d="M9.16098 16.8751C11.3306 16.8751 13.152 16.175 14.4824 14.9675L11.9467 13.0425C11.2681 13.5062 10.3574 13.83 9.16098 13.83C7.03601 13.83 5.23246 12.4563 4.58954 10.5575L4.4953 10.5653L2.01486 12.4466L1.98242 12.535C3.30383 15.1075 6.01811 16.8751 9.16098 16.8751Z" fill="#34A853" />
              <path d="M4.59004 10.5575C4.4204 10.0675 4.32223 9.54245 4.32223 8.99997C4.32223 8.45744 4.4204 7.93246 4.58112 7.44247L4.57662 7.33811L2.06509 5.42664L1.98291 5.46494C1.4383 6.53245 1.12579 7.73123 1.12579 8.99997C1.12579 10.2687 1.4383 11.4674 1.98291 12.5349L4.59004 10.5575Z" fill="#FBBC05" />
              <path d="M9.16103 4.16998C10.6699 4.16998 11.6878 4.80873 12.2682 5.34251L14.536 3.1725C13.1432 1.90375 11.3306 1.125 9.16103 1.125C6.01814 1.125 3.30384 2.89249 1.98242 5.46497L4.58063 7.44249C5.23248 5.54375 7.03604 4.16998 9.16103 4.16998Z" fill="#EB4335" />
            </svg>
            <p className="text-sm">Continue with Google</p>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-xs whitespace-nowrap">
              Or login with
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <form action="" className="flex flex-col gap-5">
            <div className="border-b border-gray-200 focus-within:border-blue-500">
              <input
                type="text"
                placeholder="Loisbecket@gmail.com"
                className="w-full bg-transparent border-0 outline-none px-1 py-2 text-sm"
              />
            </div>

            <div className="flex items-center border-b border-gray-200 focus-within:border-blue-500">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*******"
                className="w-full bg-transparent border-0 outline-none px-1 py-2 text-sm"
              />
              <button
                className="cursor-pointer"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <Eye height={18} width={18} color="#ACB5BB" />
                ) : (
                  <EyeOff color="#ACB5BB" height={18} width={18} />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="remember" className="font-medium text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
            <button className="w-full bg-[#2563EB] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 duration-300">
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            {"Don't have an account? "}
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}