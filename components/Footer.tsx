import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bottom-0 w-screen bg-[#dbd7fb] bg-opacity-50	 px-4 py-5 text-center text-gray-500 backdrop-blur-xl">
      <small className="mb-2 block text-sm">
        &copy; {currentYear} Darrach. All rights reserved.
      </small>
      <address className="mb-2 text-sm">
        <p>
          <strong>Email:</strong>{" "}
          <a
            className="hover:text-sky-500"
            href="mailto:darrachb1991@gmail.com"
          >
            darrachb1991@gmail.com
          </a>{" "}
          | <strong>Phone:</strong>{" "}
          <a className="hover:text-sky-500" href="tel:(+353) 87 174 8347">
            (+353) 87 174 8347
          </a>
        </p>
      </address>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
