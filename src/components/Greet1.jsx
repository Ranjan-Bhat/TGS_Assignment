export const Greet1 = ({ name }) => {
  const css1 = {
    border: "2px solid red"
  };
  const css2 = {
    border: "2px solid green"
  };

  return (
    <>
      {name.length <= 3 ? (
        <p style={css1}>Hello World</p>
      ) : (
        <div style={css2}>Hello {name}</div>
      )}
    </>
  );
};
