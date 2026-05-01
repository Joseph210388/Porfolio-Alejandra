interface StarsIconProps {
  size?: number;
  color?: string;
}

const StarsIcon = ({ size = 24, color = 'currentColor' }: StarsIconProps) => (
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
    <path d="M13.73 4a1 1 0 0 1 .36 1.947l-.89.5.36 1.017c.2.563-.135 1.19-.72 1.39a1 1 0 0 1-1.37-.72L10 4.734 9.54 6.235a1 1 0 0 1-1.37.72c-.585-.2-.92-.827-.72-1.39l.36-1.017-.89-.5A1 1 0 0 1 8.27 4l1.73.997 1 .003 1 .003Z" />
    <path d="M19.73 14a1 1 0 0 1 .36 1.947l-.89.5.36 1.017c.2.563-.135 1.19-.72 1.39a1 1 0 0 1-1.37-.72L16 14.734l-.46 1.501a1 1 0 0 1-1.37.72c-.585-.2-.92-.827-.72-1.39l.36-1.017-.89-.5A1 1 0 0 1 14.27 14l1.73.997 1 .003 1 .003Z" />
    <path d="M7 20a1 1 0 0 1 .36 1.947L6.47 22.45l.36 1.017c.2.563-.135 1.19-.72 1.39a1 1 0 0 1-1.37-.72L4 20.734l-.46 1.501a1 1 0 0 1-1.37.72c-.585-.2-.92-.827-.72-1.39l.36-1.017-.89-.5A1 1 0 0 1 2.27 20l1.73.997 1 .003 1 .003Z" />
  </svg>
);

export default StarsIcon;
