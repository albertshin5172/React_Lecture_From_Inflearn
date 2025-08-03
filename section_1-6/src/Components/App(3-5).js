import CourseCard from './CourseCard';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: 30 }}>
          <CourseCard
            img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/210909_191531/23.png"
            tags={['Presentation1', 'Package1', 'Max Discount']}
            title="Business All-in-One, Home Language Study Package"
            startPrice={100}
            types={['Video Lecture1']}
          />
        </li>
        <li style={{ padding: 30 }}>
          <CourseCard
            img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/210909_191531/23.png"
            tags={['Presentation2', 'Package2', 'Max Discount2']}
            title="Business All-in-One, Home Language Study Package"
            startPrice={200}
            types={['Video Lecture2']}
          />
        </li>
        <li style={{ padding: 30 }}>
          <CourseCard
            img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/210909_191531/23.png"
            tags={['Presentation3', 'Package3', 'Max Discount3']}
            title="Business All-in-One, Home Language Study Package"
            startPrice={300}
            types={['Video Lecture3']}
          />
        </li>
      </ul>
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: 30 }}>
          <CourseCard
            img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/210909_191531/23.png"
            tags={['Presentation4', 'Package4', 'Max Discount4']}
            title="Business All-in-One, Home Language Study Package"
            startPrice={400}
            types={['Video Lecture4']}
          />
        </li>
        <li style={{ padding: 30 }}>
          <CourseCard
            img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/210909_191531/23.png"
            tags={['Presentation5', 'Package5', 'Max Discount5']}
            title="Business All-in-One, Home Language Study Package"
            startPrice={500}
            types={['Video Lecture5']}
          />
        </li>
        <li style={{ padding: 30 }}>
          <CourseCard
            img="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/210909_191531/23.png"
            tags={['Presentation6', 'Package6', 'Max Discount6']}
            title="Business All-in-One, Home Language Study Package"
            startPrice={600}
            types={['Video Lecture6']}
          />
        </li>
      </ul>
    </div>
  );
}

export default App;