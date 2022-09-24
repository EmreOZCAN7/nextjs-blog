import Image from "next/image";

export default function SocialIcon(props) {
  return (
    <a className='disabled mb-5 w-14 h-14 mx-auto my-auto mt-5 align-items-center justify-content-center' href={props.link} rel="noreferrer" target="_blank"><div className='w-14 h-14 mx-auto my-auto mt-5 align-items-center justify-content-center'>
      <img alt={props.platform} src={"https://raw.githubusercontent.com/EmreOZCAN7/nextjs-blog/main/images/" + props.platform + ".png"} />
    </div></a>
  );
}
