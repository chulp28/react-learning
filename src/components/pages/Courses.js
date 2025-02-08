import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import courses from '../../data/courses';
import queryString from 'query-string';

const Courses = () => {
  const { search } = useLocation();
  const query = queryString.parse(search);
  const coursesSorted = sortCourses(courses, query.sort);
  const navigate = useNavigate();

  useEffect(() => {
    if (query === undefined) return;
    if (query.sort === undefined) navigate('/courses');
    if (!Object.hasOwn(courses[0], query.sort)) navigate('/courses');
  }, []);

  return (
    <div>
      <br />
      <Link to="?sort=name">Sort by name</Link>
      <br />
      <Link to="?sort=id">Sort by id</Link>
      <br />
      <Link to="?sort=slug">Sort by slug</Link>
      <br />
      {coursesSorted.map((course) => (
        <div key={course.id}>
          <br />
          <Link to={`${course.slug}/${course.id}`}>{course.name}</Link>
        </div>
      ))}
    </div>
  );
};

function sortCourses(courses, key) {
  const sorted = [...courses];

  if (key === undefined) return sorted;

  sorted.sort((a, b) => {
    if (typeof a[key] === 'number' && typeof b[key] === 'number') {
      return a[key] < b[key] ? 1 : -1;
    } else {
      return a[key] > b[key] ? 1 : -1;
    }
  });
  return sorted;
}

export default Courses;
