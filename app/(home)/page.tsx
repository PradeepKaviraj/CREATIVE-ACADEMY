import Aboutsection from "./Aboutsection";
import Coursesection from "./Coursesection";
import Enquiry from "./Enquiry";
import Herosection from "./Herosection";
import Stories from "./Stories";

export default function Home() {
  return (
      <main className="min-h-screen overflow-hidden">
        <Herosection/>
        <Aboutsection/>
        <Coursesection/>
        <Stories/>
        <Enquiry/>
      </main>
    
  );
}
