const ServiceCard = ({ data }) => {
  return (
    <div className="flex gap-4 items-center border border-white rounded-lg p-4 lg:max-w-xs">
      <img src={data?.imgURL} />
      <div className="flex flex-col">
        <h1 className="text-2xl text-white font-extrabold text-wrap">
          {data?.name}
        </h1>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
