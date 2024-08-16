import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("API Response:", res.data); // Check the response data
        setBook(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We’re delighted to have you{" "}
          <span className="text-pink-500">here! :</span>
        </h1>
        <p className="mt-12">
        We are dedicated to empowering learners by offering a wide range of high-quality courses across various domains. Whether you're looking to enhance your skills in technology, business, or creative arts, our platform provides courses tailored to meet your needs. Each course is designed by industry experts to ensure you gain practical, hands-on experience that you can immediately apply in the real world.

Explore our offerings and start your learning journey today with courses that are both accessible and comprehensive!!
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.length > 0 ? (
          book.map((item) => (
            <Cards key={item.id} item={item} />
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
}

export default Course;
