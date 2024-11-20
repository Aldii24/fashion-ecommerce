const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  console.log(query);

  return (
    <div className="sm:pt-24 sm:px-10 px-4 pt-20">
      <h1>{query}</h1>
    </div>
  );
};

export default page;
