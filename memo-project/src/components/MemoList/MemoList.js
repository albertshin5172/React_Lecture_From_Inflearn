import MemoItem from '../MemoItem/MemoItem';

function MemoList({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClickItem={(e) => {
            setSelectedMemoIndex(index);
            //console.log('test');
          }}
          onClickDelete={(e) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
        /*<div key={index}>{memo.title}</div>*/
        /*
        <MemoItem
          key={index}
          index={index}
          setSelectedMemoIndex={setSelectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
        */
      ))}
    </div>
  );
}
export default MemoList;
