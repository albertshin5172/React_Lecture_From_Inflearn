import { useCallback, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar/SideBar';
import { setItem, getItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debounceSetItem = debounce(setItem, 5000);

function App() {
  //console.log('test');
  const [memos, setMemos] = useState(getItem('memo') || []);
  /*
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 1754302091978, // 시간 값
      updatedAt: 1754302091978, // 시간 값
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 1754302091980, // 시간 값
      updatedAt: 1754302091980, // 시간 값
    },
  ]);
  */
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      //const newMemos = [...memos];
      //newMemos[selectedMemoIndex] = newMemo;
      //setMemos(newMemos);
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos[selectedMemoIndex] = newMemo;
        debounceSetItem('memo', newMemos);

        return newMemos;
      });
      //debounceSetItem('memo', newMemos);
      //localStorage.setItem('memo', JSON.stringify(newMemos));
      //memos[selectedMemoIndex] = newMemo;
      // console.log('memos', memos);
      //setMemos([...memos]);
    },
    [selectedMemoIndex],
    //[memos, selectedMemoIndex],
  );

  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const now = new Date().getTime();

      const newMemos = [
        ...memos,
        {
          title: 'Untitled',
          content: '',
          createdAt: now,
          updatedAt: now,
        },
      ];
      debounceSetItem('memo', newMemos);
      return newMemos;
    });
    setSelectedMemoIndex(memos.length);
    /*
    const now = new Date().getTime();
    const newMemos = [
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ];
    */
    /*
    setMemos([
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ]);
    */
    //setSelectedMemoIndex(memos.length);

    //debounceSetItem('memo', newMemos);
    // localStorage.setItem('memo', JSON.stringify(newMemos));
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);
        debounceSetItem('memo', newMemos);

        return newMemos;
      });
      //setMemos(newMemos);
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
      //localStorage.setItem('memo', JSON.stringify(newMemos));
    },
    //[memos, selectedMemoIndex],
    [selectedMemoIndex],
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
