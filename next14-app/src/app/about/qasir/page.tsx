import Image from "next/image";
import React from "react";
import me from "/public/me.jpeg"
import envelop from "/public/envelope.svg"
//https://www.flaticon.com/free-icon-font/envelope_3916631?page=1&position=4&term=envelope&origin=search&related_id=3916631

const AboutQasir = () => {
  return (
    <>
      <div>AboutQasir</div>
      <Image src="/me.jpeg" width={500} height={500} alt="about me picture"/>
      <Image quality={100} src={me}  alt="about me low quality"/>
      <Image quality={100} src={envelop}  alt="about me low quality"/>
      <Image quality={100} src="/envelope.svg" width={36} height={36}  alt="about me low quality"/>
    </>
  );
};

export default AboutQasir;
