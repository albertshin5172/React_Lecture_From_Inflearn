import Hello from './Hello';
import World from './World';

// Heading 이라는 컴포넌트를 만들고 Hello, World 컴포넌트를 통합하기
export default function App() {
  return (
    <div>
      <Hello />
      <World />
    </div>
  );
}
