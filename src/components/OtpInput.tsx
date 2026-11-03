import { Box } from '@mui/material';
import { OtpInput } from 'reactjs-otp-input';

interface OtpProps {
  length: number;
  value: string;
  onChange: any;
}

export const OTPInput: React.FC<OtpProps> = ({ length, value, onChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      onInput={(event: React.FormEvent<HTMLDivElement>) => {
        const target = event.target as HTMLInputElement;
        const digits = target.value?.replace(/\D/g, '') ?? '';
        // Le remplissage automatique du code SMS par le téléphone peut
        // insérer le code entier dans une case autre que la première : la
        // librairie reactjs-otp-input ne le répartit alors pas sur les
        // autres cases. On rattrape ce cas ici en propageant nous-mêmes le
        // code complet dès qu'une case reçoit une valeur de la bonne longueur.
        if (digits.length === length) {
          onChange(digits);
        }
      }}
    >
      <OtpInput
        separator={<span>-</span>}
        value={value}
        isInputNum={true}
        onChange={onChange}
        numInputs={length}
        shouldAutoFocus={false}
        focusStyle={{
          backgroundColor: 'var(--accent-color)',
          transitionDuration: '.3s',
          color: 'var(--black-color)',
        }}
        inputStyle={{
          backgroundColor: 'var(--accent-color-light)',
          width: 40,
          height: 50,
          textAlign: 'center',
          border: 'none',
          borderRadius: 7,
          caretColor: 'var(--black-color)',
          color: 'var(--black-color)',
          outline: 'none',
          fontWeight: 600,
          fontSize: 16,
        }}
      />
    </Box>
  );
};
