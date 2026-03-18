

export default function Header() {
  return (
    <header
      className="text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "#495E57",
        height: "300px",
      }}
    >
      <h1 className="display-4">Welcome to Little Lemon 🍋</h1>
      <p className="lead mt-3">
        Fresh Mediterranean flavors served with love. Reserve your table today!
      </p>
    </header>
  );
}