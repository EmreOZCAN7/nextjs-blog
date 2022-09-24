export default function SocialIcon(props) {
  return (
      <div className='w-14 h-14 mx-auto my-auto mt-5 align-items-center justify-content-center'>
        <img src={"https://raw.githubusercontent.com/EmreOZCAN7/nextjs-blog/main/images/"+props.platform+".png"} />
      </div>
      );
}
