import { useState } from "react";
import { Switch as SwitchTailwind } from "@headlessui/react";
import { classNames } from "helpers/string-helper";

export interface ISwitchProps {
  offElement: JSX.Element;
  onElement: JSX.Element;
  onToggle: (enabled: boolean) => void;
}

const Switch: React.FC<ISwitchProps> = ({
  offElement,
  onElement,
  onToggle,
}) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <SwitchTailwind
      checked={enabled}
      onChange={(checked) => {
        setEnabled(checked);
        onToggle(checked);
      }}
      className={classNames(
        enabled ? "bg-slate-900" : "bg-slate-200",
        "relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
      )}
    >
      <div
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-9" : "translate-x-0",
          "pointer-events-none h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out flex justify-center items-center"
        )}
      >
        {enabled ? offElement : onElement}
      </div>
    </SwitchTailwind>
  );
};

export default Switch;
