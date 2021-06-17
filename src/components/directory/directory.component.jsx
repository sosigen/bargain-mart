import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { DirectoryMenuContainer } from "./directory.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
	<DirectoryMenuContainer>
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</DirectoryMenuContainer>
);
const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
