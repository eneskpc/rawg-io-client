import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./header";
import { RootState } from "store";
import { IOptionsState } from "store/options";

const Public = () => {
  const options = useSelector<RootState, IOptionsState>(
    (state) => state.options
  );
  return (
    <div className={options.darkMode ? "dark" : ""}>
      <div className="bg-slate-200 dark:bg-slate-900  min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto mt-8 px-2 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Public;
