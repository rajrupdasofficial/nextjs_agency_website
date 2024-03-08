import Link from "next/link";

const Notfound = () => {
  return (
    <div>
      <h2>Notfound</h2>
      <p>Sorry, the page you are looking for doesnot exits</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default Notfound;
