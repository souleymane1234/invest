import React from 'react';

import { svg } from '../svg';

type Props = {
  type?: string;
  value?: string;
  inputType?: string;
  placeholder: string;
  autoCapitalize?: string;
  autoFocus?: boolean;
  containerStyle?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<Props> = ({
  inputType,
  placeholder,
  type = 'text',
  autoFocus = false,
  containerStyle,
  onChange,
  value,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        borderRadius: 25,
        height: 50,
        paddingLeft: 20,
        border: '1px solid #C8CDD9',
        backgroundColor: 'var(--white-color)',
        ...containerStyle,
      }}
    >
      <input
        placeholder={placeholder}
        maxLength={50}
        type={type}
        autoFocus={autoFocus}
        style={{
          width: '100%',
          height: '100%',
          padding: 0,
          margin: 0,
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          fontSize: 18,
          color: 'var(--main-color)',
        }}
        value={value}
        onChange={onChange}
      />
      <div className="clickable" style={{ padding: '10px 19px' }}>
        {inputType === 'tel' && (
          <svg.PhoneSvg verified={!!value && value.trim().length === 10} />
        )}
        {inputType === 'email' && <svg.CheckSvg />}
        {inputType === 'password' && <svg.EyeOffSvg />}
      </div>
    </div>
  );
};
