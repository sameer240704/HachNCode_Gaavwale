"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div
      id="courses"
      className="flex flex-col overflow-hidden mt-[250px] text-gray-800"
    >
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-3xl md:text-[4rem] font-bold mt-10 leading-none text-white">
              Our Top Courses <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white">
                by Top Mentors
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Music Theory Fundamentals",
    designation: "Beginner Music Course",
    image: "https://picsum.photos/id/30/300/300",
    badge: "Music Theory",
  },
  {
    name: "Guitar Lessons for Beginners",
    designation: "Instrumental Course",
    image: "https://picsum.photos/id/39/300/300",
    badge: "Guitar",
  },
  {
    name: "Mastering Piano Techniques",
    designation: "Instrumental Course",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Piano",
  },
  {
    name: "Vocal Training and Performance",
    designation: "Singing Course",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Vocals",
  },
  {
    name: "Introduction to Digital Art",
    designation: "Visual Arts Course",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Digital Art",
  },
  {
    name: "Acrylic Painting for Beginners",
    designation: "Painting Course",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Acrylic Painting",
  },
  {
    name: "Sculpture and 3D Art",
    designation: "3D Art Course",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Sculpture",
  },
  {
    name: "Storytelling and Creative Writing",
    designation: "Writing Course",
    image: "https://picsum.photos/id/17/300/300",
    badge: "Creative Writing",
  },
  {
    name: "Introduction to Web Design",
    designation: "Design Course",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Web Design",
  },
  {
    name: "Photography Essentials",
    designation: "Photography Course",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Photography",
  },
  {
    name: "Dance Styles and Techniques",
    designation: "Dance Course",
    image: "https://picsum.photos/id/20/300/300",
    badge: "Dance",
  },
  {
    name: "Introduction to Film Making",
    designation: "Filmmaking Course",
    image: "https://picsum.photos/id/21/300/300",
    badge: "Filmmaking",
  },
  {
    name: "Graphic Design Fundamentals",
    designation: "Design Course",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Graphic Design",
  },
  {
    name: "Drawing and Illustration",
    designation: "Visual Arts Course",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Drawing",
  },
  {
    name: "Animation Principles",
    designation: "Animation Course",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Animation",
  },
  {
    name: "Introduction to Interior Design",
    designation: "Design Course",
    image: "https://picsum.photos/id/25/300/300",
    badge: "Interior Design",
  },
  {
    name: "Fashion Design Basics",
    designation: "Design Course",
    image: "https://picsum.photos/id/26/300/300",
    badge: "Fashion Design",
  },
  {
    name: "Pottery and Ceramics",
    designation: "Craft Course",
    image: "https://picsum.photos/id/27/300/300",
    badge: "Pottery",
  },
  {
    name: "Jewelry Making Techniques",
    designation: "Craft Course",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Jewelry Making",
  },
  {
    name: "Introduction to Acting",
    designation: "Performing Arts Course",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Acting",
  },
];
