import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
  import Image from "next/image";
  import questionmark from "../app/assets/question.png"
  import checkmark from "../app/assets/checkmark.png"


  export default function AccordionDemo() {
    return (

        <div className="mt-32 mb-20">
            <div className="flex relative m-auto border-blue-500 border-[2px] rounded-full w-[5.5rem] place-content-center m-auto ">
                    <Image
                    src={questionmark}
                        alt="star_image"
                        width="100"
                        height="100"
                        sizes="fit-content"
                        className="h-4 w-5 mt-1 fit-content"    
                    />
                   <h1 className="text-white sticky font-semibold text-center lawn_color ">
                      FAQ
                    </h1>
            </div>
          <div>
              <h1 className="text-white text-center  text-wrap font-bold md:text-6xl text-4xl ">
                  Got Questions?<br /> We&apos;ve Got <span className="lawn_color">Answers </span> 
              </h1>
          </div>
      {/* FAQ for edutrack */}
      <Accordion type="single" collapsible className="mt-10  w-[23 rem] md:w-[45rem] lg:w-[45rem] m-auto place-content-center">
      <AccordionItem value="item-1" className="text-white text-left border-[1px] border-white/5 px-4  glass2 rounded-[12px] ">
          <AccordionTrigger>What is a Student Management System?</AccordionTrigger>
          <AccordionContent>
          A Student Management System is a software application that helps educational institutions manage student data, academic records, and other related information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="text-white text-left border-[1px] border-white/5 px-4  glass2 rounded-[12px] ">
          <AccordionTrigger>What are the benefits of using a Student Management System?</AccordionTrigger>
          <AccordionContent>
          The benefits of using a Student Management System include improved data management, enhanced student engagement, better communication between teachers and parents, and increased efficiency in administrative tasks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="text-white text-left border-[1px] border-white/5 px-4  glass2 rounded-[12px] ">
          <AccordionTrigger>How do I access my child&apos;s information?</AccordionTrigger>
          <AccordionContent>
          Parents can access their child&apos;ss information on the Student Management System by logging in with their username and password, which are typically provided by the institution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="text-white text-left border-[1px] border-white/5 px-4  glass2 rounded-[12px] ">
          <AccordionTrigger>How do I access the Student Management System?</AccordionTrigger>
          <AccordionContent>
          Teachers and staff can access the Student Management System by logging in with their username and password, which are typically provided by the institution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="text-white text-left border-[1px] border-white/5 px-4  glass2 rounded-[12px] ">
          <AccordionTrigger>What functions can I perform on the Student Management System?</AccordionTrigger>
          <AccordionContent>
          Teachers and staff can use the Student Management System to manage student data, including grades, attendance, and course schedules, as well as to communicate with students and parents.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="text-white text-left border-[1px] border-white/5 px-4  glass2 rounded-[12px] ">
          <AccordionTrigger>Can I use the Student Management System to generate reports?</AccordionTrigger>
          <AccordionContent>
          Yes, teachers and staff can use the Student Management System to generate reports, including grade reports and attendance reports.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

{/* marquee for edutrack */}
    <div className='flex place-content-center mt-20 gap-20 logo m-a marquee'>

        <div className='logo-container gap-10 flex animate' >
          
            <Image
                      src={checkmark}
                          alt="star_image"
                          width="100"
                          height="100"
                          sizes="fit-content"
                          className="h-10 w-10 mt-1 fit-content"    
                      />
                    <h1 className="text-white text-5xl ">
                      Try Edutrack
                    </h1> 

        </div>
    
        <div className='logo-container  gap-10 flex animate' >
            <Image
                      src={checkmark}
                          alt="star_image"
                          width="100"
                          height="100"
                          sizes="fit-content"
                          className="h-10 w-10 mt-1 fit-content"    
                      />
                    <h1 className="text-white text-5xl ">
                      Try Edutrack
                    </h1> 

        </div>

        <div className='logo-container  gap-10 flex animate' >
            <Image
                      src={checkmark}
                          alt="star_image"
                          width="100"
                          height="100"
                          sizes="fit-content"
                          className="h-10 w-10 mt-1 fit-content"    
                      />
                    <h1 className="text-white text-5xl ">
                      Try Edutrack
                    </h1> 

        </div>

    </div>


      </div>
    )
  }
  
