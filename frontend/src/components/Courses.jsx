import { ThreeDCardDemo } from "./ui/3d-Comp.tsx";

const Courses = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn bg-gray-900 rounded-3xl text-center py-12 px-10 md:px-20 lg:px-32 -mt-40 mx-4">
              <h2 className="text-3xl font-bold mb-6">Courses</h2>
              <p className="text-gray-400 text-lg mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="card-main flex overflow-x-auto">
                <div className="card flex-none w-1/3 md:w-1/4 lg:w-1/5 mr-4">
                  <ThreeDCardDemo />
                </div>
                <div className="card flex-none w-1/3 md:w-1/4 lg:w-1/5 mr-4">
                  <ThreeDCardDemo />
                </div>
                <div className="card flex-none w-1/3 md:w-1/4 lg:w-1/5 mr-4">
                  <ThreeDCardDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
