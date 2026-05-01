interface NotebookIconProps {
  size?: number;
  color?: string;
}

const NotebookIcon = ({ size = 24, color = 'currentColor' }: NotebookIconProps) => (
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
    <path d="M2 6a2 2 0 0 1 2-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a2 2 0 0 1-2-2V6z" />
    <path d="M8 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8" />
  </svg>
);

export default NotebookIcon;
