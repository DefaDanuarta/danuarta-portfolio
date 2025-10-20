export default function NextIcon({ className, color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      fill="currentColor"
      stroke="currentColor" // <- warna bisa dikontrol dari props
    >
      <path d="M..." />
    </svg>
  );
}