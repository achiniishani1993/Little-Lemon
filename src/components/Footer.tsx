

export default function Footer() {
  return (
    <footer
      className="text-center text-white mt-5 p-3"
      style={{ backgroundColor: "#333" }}
    >
      <p className="mb-0">
        © {new Date().getFullYear()} Little Lemon 🍋 | All rights reserved
      </p>
    </footer>
  );
}