import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="font-regular bg-gradient-to-t from-gray-500 via-teal-900 to-slate-700 h-fit min-h-screen w-full">
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}
