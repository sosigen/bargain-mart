import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
	CollectionPreviewContainer,
	CollectionTitleContainer,
	CollectionPreviewItems,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
	<CollectionPreviewContainer>
		<CollectionTitleContainer>{title.toUpperCase()}</CollectionTitleContainer>
		<CollectionPreviewItems>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</CollectionPreviewItems>
	</CollectionPreviewContainer>
);

export default CollectionPreview;
