const Navbar = () => {
  return (
    <nav
      style={{
        // backgroundColor: "#333",
        color: "black",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        padding: "20px 20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "25px",
          margin: 0,
          padding: 0,
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <li style={{ cursor: "pointer", color: "#4A90E2",fontFamily:"cursive",fontSize:"20px" }}>TextUtils</li>
        <li style={{ cursor: "pointer",marginLeft:"20px" }}>Home</li>
        <li style={{ cursor: "pointer" }}>About Us</li>
        <li style={{ cursor: "pointer" }}>Contact</li>
        <li style={{ cursor: "pointer" }}>Features</li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
