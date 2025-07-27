import './index.css';

import ReactDOM from 'react-dom';

// 2. style recycling
const roundBoxStyle = {
  position: 'absolute',
  top: 50,
  left: 50,
  width: '50%',
  height: '200px',
  padding: 20,
  background: 'rgba(162,216,235,0.6)',
  // 3. Attributes are in camelCase
  borderRadius: 50
};

const element = (
  <div
    style={{
      // 1. Writing CSS with Objects
      position: 'relative',
      width: 400,
      height: 1000,
      background: '#f1f1f1'
    }}
  >
    <div style={roundBoxStyle}>Hello1</div>

    <div style={{ ...roundBoxStyle, top: 350 }}>
      {/* 4. styling by className (CSS-in-JS) */}
      <div className="highlight">Hello2</div>
    </div>

    <div style={{ ...roundBoxStyle, top: 650 }}>
      {/* 5. conditional style */}
      <div
        className={
          1 + 1 === 2 ? 'highlight' : 'highlight2'
        }
      >
        Hello3
      </div>
      <div
        className={
          1 + 1 === 3 ? 'highlight' : 'highlight2'
        }
      >
        Hello2
      </div>
    </div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);