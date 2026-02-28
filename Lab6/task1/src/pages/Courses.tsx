const Courses = () => {
  const courses = [
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'TypeScript Fundamentals' },
    { id: 3, title: 'Node.js Essentials' },
  ];

  return (
    <div>
      <h1>Our Courses</h1>
      <ul>
        {courses.map(c => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;