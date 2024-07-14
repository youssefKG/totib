const ServiceCard = ({ data }) => {
  return (
    <div className="flex gap-4 items-center border border-white rounded-lg p-4 lg:max-w-sm">
      <img src={data?.imgURL} />
      <div className="flex flex-col">
        <h1 className="sm:text-2xl text-xl text-white font-extrabold text-wrap">
          {data?.name}
        </h1>
        <p className="text-gray-300 text-sm">{data?.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
