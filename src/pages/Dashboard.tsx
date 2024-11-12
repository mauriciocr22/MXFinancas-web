import Header from "../components/Header";
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

export function Dashboard() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="flex flex-col gap-12">
        <div className="pt-6 h-56 flex flex-col gap-6">
          <span className="text-xl text-[#5c5c5c]">Summary</span>
          <div className="grid grid-cols-3 grid-rows-1 w-full h-full gap-6">
            <div className="summaryCard">
              <h2 className="font-prompt text-xl mb-4 gap-2 flex items-center">Balance <AiOutlineDollar size={27} /></h2>
              <span className="text-3xl font-prompt">R$0.00,00</span>
            </div>
            <div className="summaryCard">
              <h2 className="font-prompt text-xl mb-4 gap-2 flex items-center">Monthly Income <IoArrowDownCircleOutline size={28} /></h2>
              <span className="text-3xl font-prompt">R$0.00,00</span>
            </div>
            <div className="summaryCard">
              <h2 className="font-prompt text-xl mb-4 gap-2 flex items-center">Monthly Expense <IoArrowUpCircleOutline size={28} /> </h2>
              <span className="text-3xl font-prompt">R$0.00,00</span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xl text-[#5c5c5c]">Recent Transactions</span>

        </div>
      </div>
    </div>
  );
}
