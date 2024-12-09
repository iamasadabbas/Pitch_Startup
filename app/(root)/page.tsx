import StartupCards from "@/components/StartupCards";
import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const posts=[
    {
      _createdAt: new Date,
      views:55,
      author:{ _id:1, name:"Asad"},
      _id:1,
      description:"this is discription",
      image:"https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd33d49a346d9be0b075ea_65dd12fa299e167d189f00f7-fed9c2116dfcf56370cea3063f4e88fa.jpeg",
      category:"Robots",
      title:"We Robots"
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, vote on Pitches, and Get Noticed in Virtual competitions
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : 'ALL Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length >0 ? 
            posts.map((post:startupCardType,index:number)=>( <StartupCards key={post?._id} post={post}/>))
            :(<p className="no_results"> No Startups found</p>)  
        }
        </ul>

      </section>
    </>
  );
}
