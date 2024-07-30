import { useState } from "react";
import Header from "../components/company components/HeaderComp";
import FilterComps from "../components/company components/FilterComps";
import CompsList from "../components/company components/CompsList";
import RespoFilterBtn from "../components/company components/RespoFilterBtn";
import PopupFilter from "../components/company components/PopupFilter";
const Companies = () => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  function openFilterPopup() {
    setIsFilterPopupOpen((prev) => !prev);
  }
  return (
    <>
      <Header />
      <PopupFilter isOpened={isFilterPopupOpen} togglePopup={openFilterPopup} />
      <main className="companies container">
        <FilterComps />
        <RespoFilterBtn clicked={openFilterPopup} />
        <CompsList />
      </main>
    </>
  );
};

export default Companies;
