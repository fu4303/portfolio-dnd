import React from "react";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="mt-5">
      <a href="https://github.com/ferin79" target="_blank" rel="noreferrer">
        <AiFillGithub size={40} color="#333" className="ml-3" />
      </a>

      <a
        href="https://www.instagram.com/ferin_patel_79/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram size={40} color="#fb3958" className="ml-3" />
      </a>

      <a
        href="https://www.facebook.com/people/Ferin-Patel/100004905079172"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook size={40} color="#3b5998" className="ml-3" />
      </a>

      <a
        href="https://www.linkedin.com/in/ferin-patel-ba031b165/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={40} color="#0e76a8" className="ml-3" />
      </a>

      <a
        href="https://twitter.com/FerinPatel79"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineTwitter size={40} color="#1da1f2" className="ml-3" />
      </a>

      <a href="mailto:ferinpatel79@gmail.com" target="_blank" rel="noreferrer">
        <AiOutlineMail size={40} color="#BB001B" className="ml-3" />
      </a>
    </div>
  );
};

export default SocialMedia;
