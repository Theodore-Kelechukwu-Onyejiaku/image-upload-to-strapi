import TabsContainer from "@/components/TabsContainer";

export default function Home() {
  return (
    <div className="min-h-screen p-3 lg:p-20">
      <div className=" lg:px-14 py-5">
        <p className="text-2xl lg:text-4xl font-bold mb-4">
          Image Upload to Strapi
        </p>
        <span className="text-slate-400">
          Let's demonstrate image upload to Strapi Content types using the REST
          API
        </span>
        <TabsContainer />
      </div>
    </div>
  );
}
