export default function CustomerNavbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#6F4E37] text-white">

      <h1 className="text-3xl font-bold text-[#FAF3E0]-500">
        Salon Management System
      </h1>

      <ul className="flex gap-8 text-lg font-semibold">
        <li className="hover:text- [#FAF3E0]-500 cursor-pointer">
          Home
        </li>

        <li className="hover:text-[#FAF3E0]-500 cursor-pointer">
          Menu
        </li>

        <li className="hover:text- [#FAF3E0]-500 cursor-pointer">
          Offers
        </li>

        <li className="hover:text- [#FAF3E0]-500 cursor-pointer">
          Contact
        </li>
      </ul>

    </nav>
  );
}