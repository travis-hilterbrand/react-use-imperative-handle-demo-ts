import React from "react";

export type CountdownRef = HTMLDivElement;
export type CountdownActionRef = {
  triggerAlert: () => void | undefined;
};

export type CountdownProps = {
  action?: React.Ref<CountdownActionRef>;
  label: string;
};
const Countdown = React.forwardRef<CountdownRef, CountdownProps>(
  (props: CountdownProps, ref) => {
    const { action, label } = props;
    React.useImperativeHandle(
      action,
      () => ({
        triggerAlert: () => alert("called"),
      }),
      []
    );

    return (
      <div ref={ref}>
        <div>{label}</div>
        <input />
      </div>
    );
  }
);
export default Countdown;
