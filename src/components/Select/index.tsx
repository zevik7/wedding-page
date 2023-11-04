import React, { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  isThemeSelector?: boolean;
  options: OptionHTMLAttributes<HTMLOptionElement>[];

  // Props for theme selector
  'data-choose-theme'?: boolean;
  'data-key'?: 'theme';
};

const Select = (props: SelectProps) => {
  const { options, isThemeSelector, ...otherProps } = props;

  return (
    <select {...otherProps} className={`select ${props.className}`}>
      {options.map((op, idx: number) => {
        const { label, ...otherProps } = op;
        return (
          <option key={idx} {...otherProps}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
