import { SplitScreenBase } from "./patterns/split-screen/SplitScreenBase";
import { ListsBase } from "./patterns/lists/ListsBase";
import { Modal } from "./patterns/modal/Modal";
import { products } from "./patterns/lists/ListsBase";
import { LargeProductListItem } from "./patterns/lists/products/LargeProductListItem";

function App() {
  return ( 
    <>
      {/* <SplitScreenBase /> */}
      {/* <ListsBase /> */}
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
