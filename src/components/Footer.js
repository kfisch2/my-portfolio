import React from "react";

export default function Footer(props) {
  const urls = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/kayla-fischer-679200109/",
    },
    {
      name: "Github",
      link: "https://www.github.com/kfisch2",
    },
  ];
  return (
    <>
      {urls.map((url) => (
        <div key={url.name} className="row no-decoration" >
          <a className="col" href={url.link} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
            {url.name}
          </a>
        </div>
      ))}
    </>
  );
}
