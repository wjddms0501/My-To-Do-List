function CustomButton(props) {
  const { width, height, border, backgroundColor, color, onClick, children } =
    props;
  console.dir(props);
  if (backgroundColor) {
    return (
      <button
        style={{
          width: width, //User 컴포넌트에서 width를 130px을 줬고 나는 그 값을 가져올(props)거야
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
