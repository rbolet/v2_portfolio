export default function Message(props) {
  const { isResponse, text, link, download } = props;
  console.log(props);
  return (
    <>
      <style jsx>{`
        .message {
          width: fit-content;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
          margin-bottom: 0.5rem;
        }

        .response {
          font-family: "VT323", "Courier New", Courier, monospace;
          font-size: 1.25rem;
          background-color: blue;
          color: white;
          margin-right: 3rem;
        }

        .entered {
          align-self: flex-end;
          margin-left: 3rem;
          background-color: black;
        }
      `}</style>
      <div className={isResponse ? "message response" : "message entered"}>
        {typeof link === "string" ? (
          <a
            style={{
              verticalAlign: "middle",
              margin: 0,
              color: "white",
              textDecoration: "underline",
            }}
            href={link}
            target="_blank"
            // download={download}
          >
            {text}
          </a>
        ) : (
          <p style={{ verticalAlign: "middle", margin: 0 }}>{text}</p>
        )}
      </div>
    </>
  );
}
