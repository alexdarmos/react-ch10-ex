import React from 'react';
import PropTypes from 'prop-types';

function FileIcon({ file }) {
	let fileType = 'fa-file-text-o';

	if (file.type === 'folder') {
		fileType = 'fa-folder';
	}

	return (
		<td className="file-icon">
			<i className={`fa ${fileType}`} />
		</td>
	);
}

FileIcon.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileIcon;
