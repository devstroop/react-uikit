import {
  forwardRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
} from 'react';
import styles from './Switch.module.css';

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className, ...props },
  ref
) {
  // Uncontrolled uses track their own checked state — aria-checked must
  // follow it (role="switch" promises it), so maintain a local mirror and
  // give the attribute a definitive value in both modes.
  const [uncontrolled, setUncontrolled] = useState(
    Boolean(props.defaultChecked)
  );
  const isChecked = props.checked ?? uncontrolled;
  return (
    <input
      ref={ref}
      type="checkbox"
      role="switch"
      checked={props.checked}
      defaultChecked={props.defaultChecked}
      aria-checked={isChecked}
      className={[styles.switch, className].filter(Boolean).join(' ')}
      {...props}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        if (props.checked === undefined) setUncontrolled(e.target.checked);
        props.onChange?.(e);
      }}
    />
  );
});
