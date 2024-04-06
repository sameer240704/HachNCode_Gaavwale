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
    name: "Ashley Singh",
    designation: "Volunteer, Elder Care Services",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Caregiver",
  },
  {
    name: "Sarah Singh",
    designation: "Volunteer, Community Outreach Program",
    image: "https://picsum.photos/id/11/300/300",
    badge: "Companion",
  },
  {
    name: "John Doe",
    designation: "Volunteer, Senior Assistance Center",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Caregiver",
  },
  {
    name: "Jane Smith",
    designation: "Volunteer, Meals on Wheels",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Delivery",
  },
  {
    name: "Robert Johnson",
    designation: "Volunteer, Senior Tech Support",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Tutor",
  },
  {
    name: "Emily Davis",
    designation: "Volunteer, Elder Daycare Center",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Caregiver",
  },
  {
    name: "Michael Miller",
    designation: "Volunteer, Senior Advocacy Group",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Advocate",
  },
  {
    name: "Sarah Brown",
    designation: "Volunteer, Elder Enrichment Program",
    image: "https://picsum.photos/id/17/300/300",
    badge: "Instructor",
  },
  {
    name: "James Wilson",
    designation: "Volunteer, Senior Companionship Program",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Companion",
  },
  {
    name: "Patricia Moore",
    designation: "Volunteer, Elder Care Hotline",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Counselor",
  },
  {
    name: "Richard Taylor",
    designation: "Volunteer, Senior Community Center",
    image: "https://picsum.photos/id/20/300/300",
    badge: "Event Organizer",
  },
  {
    name: "Linda Anderson",
    designation: "Volunteer, Elder Transportation Services",
    image: "https://picsum.photos/id/21/300/300",
    badge: "Driver",
  },
  {
    name: "William Thomas",
    designation: "Volunteer, Senior Home Assistance",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Handyman",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Volunteer, Elder Care Coordination",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Care Manager",
  },
  {
    name: "David White",
    designation: "Volunteer, Senior Technology Literacy",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Tutor",
  },
  {
    name: "Jennifer Harris",
    designation: "Volunteer, Elder Friendly Calling",
    image: "https://picsum.photos/id/25/300/300",
    badge: "Companion",
  },
  {
    name: "Charles Clark",
    designation: "Volunteer, Senior Safety Awareness",
    image: "https://picsum.photos/id/26/300/300",
    badge: "Educator",
  },
  {
    name: "Susan Lewis",
    designation: "Volunteer, Elder Healthcare Advocacy",
    image: "https://picsum.photos/id/27/300/300",
    badge: "Advocate",
  },
  {
    name: "Joseph Young",
    designation: "Volunteer, Senior Technology Support",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Tutor",
  },
  {
    name: "Margaret Hall",
    designation: "Volunteer, Elder Care Quality Assurance",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Auditor",
  },
];
