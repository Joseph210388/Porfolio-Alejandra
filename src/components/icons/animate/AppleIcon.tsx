interface AppleIconProps {
  size?: number;
  color?: string;
}

const AppleIcon = ({ size = 24, color = 'currentColor' }: AppleIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2c3.314 0 6 2.686 6 6 0 1.657-.335 3.236-.978 4.656C18.29 15.09 19.5 17.5 19.5 20c0 2.485-2.015 4.5-4.5 4.5h-6C6.515 24.5 4.5 22.485 4.5 20c0-2.5 1.21-4.91 2.478-7.344C6.335 11.236 6 9.657 6 8c0-3.314 2.686-6 6-6zm-1 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
  </svg>
);

export default AppleIcon;
