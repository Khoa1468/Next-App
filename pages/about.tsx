import Template from "layouts/Template";
import Link from "next/link";

export default function About(): JSX.Element {
  return (
    <Template className="main" headingTitle="About">
      <h1>
        About{" "}
        <div className="link">
          <Link href="https://github.com/Khoa1468/" passHref>
            {/* <a href="https://github.com/Khoa1468/">Me</a> */}
            Me
          </Link>
        </div>
      </h1>
    </Template>
  );
}
