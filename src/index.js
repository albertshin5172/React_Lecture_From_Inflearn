import ReactDOM from 'react-dom';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const element = (
  <div style={{ display: 'flex' }}>
    {
        num.map((n) => {
            if(n == 1 || n == 5) return null;
            return <div style={{padding:10, color : n%2 == 0 ? 'blue':'black' }}>
                {num.map((m) => (
                    <div>
                        {n}x{m} = {n*m}
                    </div>
                ))}
            </div>;
        })
    }
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
