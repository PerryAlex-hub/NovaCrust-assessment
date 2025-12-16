import { TabsContent } from "./ui/tabs";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import CryptoToCash from "./tabs/CryptoToCash";
import CashToCrypto from "./tabs/CashToCrypto";

const Header = () => {
  return (
    <div>
      <Tabs defaultValue="crypto-to-cash">
        <div className=" mx-0 md:mx-auto overflow-x-auto">
        <TabsList className="mx-auto  rounded-full p-0">
          <TabsTrigger
            className="data-[state=active]:bg-[#013941] shrink-0 text-gray-500 rounded-full data-[state=active]:text-white px-3"
            value="crypto-to-cash"
          >
            Crypto to cash
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#013941] shrink-0 text-gray-500 rounded-full data-[state=active]:text-white px-3"
            value="cash-to-crypto"
          >
            Cash to crypto
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#013941] shrink-0 text-gray-500 rounded-full data-[state=active]:text-white px-3"
            value="crypto-to-flat-loan"
          >
            Crypto to flat loan
          </TabsTrigger>
        </TabsList>
        </div>
        <TabsContent value="crypto-to-cash">
          <CryptoToCash />
        </TabsContent>
        <TabsContent value="cash-to-crypto">
          <CashToCrypto />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Header;
