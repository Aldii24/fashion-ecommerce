const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ brand: string }>;
}) => {
  const brand = (await searchParams).brand;

  console.log(brand);

  return (
    <div className="sm:pt-28 pt-20 sm:px-10 px-4">
      <h1>Brand</h1>
      {brand}
    </div>
  );
};

export default page;
