import Button from "react-bootstrap/Button";

function DarkModeButton({ handleDarkMode }) {
  return (
    <Button variant="primary" className="rounded-pill" onClick={handleDarkMode}>
      Click me
    </Button>
  );
}

export default DarkModeButton;
