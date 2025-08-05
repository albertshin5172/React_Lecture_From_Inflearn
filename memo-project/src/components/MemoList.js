import MemoItem from '../MemoItem';

function MemoList({ memos, setSelectedMemoIndex, selectedMemoIndex }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClick={() => {
            setSelectedMemoIndex(index);
            //console.log('test');
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
