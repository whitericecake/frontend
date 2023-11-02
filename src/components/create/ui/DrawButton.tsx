interface DrawButton {
  toggle: boolean;
  onClick: () => void;
}

const DrawButton = ({ onClick, toggle }: DrawButton) => {
  return (
    <button className="w-5 h-10 px-0 bg-default-50" onClick={onClick}>
      {toggle ? "<" : ">"}
    </button>
  );
};
export default DrawButton;
