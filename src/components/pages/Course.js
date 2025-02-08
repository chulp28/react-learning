import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import courses from '../../data/courses';

const CoursePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.id == +params.id);

  useEffect(() => {
    if (!course) navigate('/courses');
  }, [course]);

  return (
    <div>
      {!!course && (
        <>
          <h1>{course.name}</h1>
          <div>
            <h4>{course.slug}</h4>
            <h5>{course.id}</h5>
          </div>
        </>
      )}
    </div>
  );
};

export default CoursePage;
