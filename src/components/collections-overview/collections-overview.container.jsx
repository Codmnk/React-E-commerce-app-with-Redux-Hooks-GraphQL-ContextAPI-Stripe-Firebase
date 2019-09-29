import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component.jsx";

const mapStateToProps = createStructuredSelector({
  isloading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
