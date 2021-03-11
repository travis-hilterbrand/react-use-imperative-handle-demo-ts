import React from "react";

export type CountdownRef = HTMLDivElement;
export type CountdownActionsRef = {
  triggerAlert: () => void | undefined;
};

export type CountdownProps = {
  actions?: React.Ref<CountdownActionsRef>;
  label: string;
};
const Countdown = React.forwardRef<CountdownRef, CountdownProps>(
  (props: CountdownProps, ref) => {
    const { actions, label } = props;
    React.useImperativeHandle(
      actions,
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
