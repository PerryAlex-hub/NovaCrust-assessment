import Header from "@/components/Checkout";

const page = () => {
  return (
    <div className="w-full pt-10 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-4xl shadow-sm border border-gray-100 p-8">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default page;
