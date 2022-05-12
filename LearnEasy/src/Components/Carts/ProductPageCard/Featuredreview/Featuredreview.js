import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiDislike, BiLike } from "react-icons/bi";
import "./Featuredreview.css";

export default function Featuredreview() {
  return (
    <div className="card Featuredreview border">
      <h3 className="card-title">Featured review</h3>
      <div className="card-body d-flex">
        <img
          src="https://img-c.udemycdn.com/user/200_H/106349520_68e8.jpg"
          alt="..."
          class="rounded-circle"
          width="100"
        />
        <div className="FeaturedreviewImg">
          <h6>Vishal Ramane</h6>
          <p>18 courses</p>
          <p>1 review</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <AiFillStar size={25} color="#e59819" />
        <AiFillStar size={25} color="#e59819" />
        <AiFillStar size={25} color="#e59819" />
        <AiFillStar size={25} color="#e59819" />
        <AiFillStar size={25} color="#e59819" />
        <span className="text-muted p-2">8 months ago</span>
      </div>
      <div>
        I had some development experience before (backend) and I wanted to
        really learn JavaScript and I must tell you, this is the best JavaScript
        course on the internet period. It has everything you need to get you up
        to speed and more!!! Apart from innovative challenges and awesome
        projects, what I personally really admired was the fact that Jonas
        really took a lot of effort in explaining "How JS works under the hood"
        and that is the most precious thing in this course, and just what I
        wanted.
      </div>
      <p className="mt-4">Was this review helpful?</p>
      <div className="d-flex justify-content-start">
        <div className="border border-dark rounded-circle FeaturedreviewLike m-2">
          <BiLike size={30} />
        </div>
        <div className="border border-dark rounded-circle FeaturedreviewLike m-2">
          <BiDislike size={30} />
        </div>

        <a href="" className=" text-dark m-3">
          Report
        </a>
      </div>
    </div>
  );
}
