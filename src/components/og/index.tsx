/**
 * This component dynamically generates an OpenGraph image for each blog post.
 * @param title - The article title
 */
export default function OgImage(title: string = "Blog") {
  const basePath = "http://localhost:3001/";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "3rem",
        position: "relative",
        background: "linear-gradient(135deg, #1f2028 0%, #2d2e3a 100%)",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #646cff33 0%, #646cff11 100%)",
          filter: "blur(40px)",
          zIndex: 1,
          display: "flex",
        }}
      />

      <div
        style={{
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#646cff",
            margin: "0 0 1rem 0",
            fontFamily: "Inter",
            display: "flex",
          }}
        >
          Simon Haïoun-Viet
        </h2>

        <h1
          style={{
            fontSize: "4.5rem",
            lineHeight: 1.2,
            fontWeight: "bold",
            color: "white",
            fontFamily: "Inter",
            margin: 0,
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            display: "flex",
          }}
        >
          {title}
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          zIndex: 2,
        }}
      >
        <img
          src={`${basePath}og/avatar.jpeg`}
          style={{
            borderRadius: "50%",
            border: "3px solid #646cff",
            display: "flex",
          }}
          width="80"
          height="80"
          alt="Simon Haïoun-Viet"
        />
        <p
          style={{
            fontSize: "1.5rem",
            color: "#8b8c98",
            margin: 0,
            fontFamily: "Inter",
            display: "flex",
          }}
        >
          Software Engineer
        </p>
      </div>
    </div>
  );
}
