const ContactUs = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <h1 className="font-bold p-3 text-2xl">Contact Us Page</h1>
      <form className="flex flex-col gap-4 items-center p-2 h-full ">
        <input
          type="text"
          placeholder="name"
          className="border-2 border-black rounded-md p-1"
        />
        <input
          type="text"
          placeholder="email"
          className="border-2 border-black rounded-md p-1"
        />
        <button type="submit" className="rounded-lg bg-indigo-500 p-1 w-2/4">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
