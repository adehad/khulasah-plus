import fridayOpeningSupplications from "@/data/khulasah-friday-opening-supplications";
import { WirdModel } from "@/models/recitation";

// Same supplications as the Friday opening; only the page title differs
export default fridayOpeningSupplications.map(
  (wird) => new WirdModel({ ...wird, title: "Initial adhkar" }),
);
