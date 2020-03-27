import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FileIcon from './FileIcon';

const FileName = ({ file }) => (
	<Fragment>
		<span>
			<FileIcon file={file} />
		</span>
		<span>{file.name}</span>
	</Fragment>
);

FileName.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileName;
