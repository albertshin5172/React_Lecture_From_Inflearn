//function MemoItem({ children, index, setSelectedMemoIndex }) {
function MemoItem({ children, onClick, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClick}
      /*
      onClick={() => {
        console.log('clicked');
        setSelectedMemoIndex(index);
      }}
      */
    >
      {children}
    </div>
  );
}
export default MemoItem;
