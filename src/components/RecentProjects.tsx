import { projects } from '../data/index';
export default function RecentProjects() {
    return <div className="py-20">
        <h1 className="heading text-white">A great portfolio of <span className="text-purple">recent projects</span></h1>
        <div className="flex flex-wrap items-center justify-center gap-16 p-4 mt-10">
            {projects.map((item) => {
                return <div className='text-white lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] '>{item.title}</div>; 
            })}
        </div>
    </div>
}