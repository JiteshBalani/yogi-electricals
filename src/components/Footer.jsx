import { Typography } from "@material-tailwind/react";
 
const currentYear = new Date().getFullYear();
 
export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-6xl px-8">
        
        <div className="mt-5 flex w-full flex-col items-center justify-center border-t-2 border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Yogi Electricals</a>. All
            Rights Reserved.
          </Typography>
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            Made with <span className="text-red-500">❤ </span> by 
            <a className="text-lg text-blue-400" href="https://github.com/JiteshBalani" target="blank"> Jitesh </a>
          </Typography>
        </div>
        
      </div>
    </footer>
  );
}