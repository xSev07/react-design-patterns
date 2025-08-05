import { SplitScreenBase } from "./patterns/layout/split-screen/SplitScreenBase";
import { ListsBase } from "./patterns/layout/lists/ListsBase";
import { Modal } from "./patterns/layout/modal/Modal";
import { products } from "./patterns/layout/lists/ListsBase";
import { LargeProductListItem } from "./patterns/layout/lists/products/LargeProductListItem";

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
