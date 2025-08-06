import MemoList from '../MemoList/MemoList';
import SideBarFooter from '../SideBarFooter/SideBarFooter';
import SideBarHeader from '../SideBarHeader/SideBarHeader';
import './index.css';

function SideBar({
  memos,
  addMemo,
  selectedMemoIndex,
  setSelectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
