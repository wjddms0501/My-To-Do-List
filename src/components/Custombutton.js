function CustomButton(props) {
  const { width, height, border, backgroundColor, color, onClick, children } =
    props;
  if (backgroundColor) {
    return (
      <button
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          color: color,
          border: border,
          borderRadius: "5px",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

export default CustomButton;
