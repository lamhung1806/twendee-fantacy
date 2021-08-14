import logo from "assets/images/logo.svg";

interface LoaderProps {
  hasText?: boolean;
}
export default function Loader({ hasText }: LoaderProps) {
  return (
    <div>
      <img src={logo} alt="logo-EPL" />
      {hasText && <p>Loading...</p>}
    </div>
  );
}
