import React from 'react';
import PropTypes from 'prop-types';

function SvgSaoTomeAndPrince({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#FFDA44" cx={16.031} cy={15.969} r={15.969} />
                <g fill="#6DA544">
                    <path d="M9.783 10.414h21.224C28.75 4.334 22.897 0 16.03 0c-4.41 0-8.401 1.788-11.29 4.678l5.042 5.736zM9.783 21.523h21.224c-2.257 6.081-8.11 10.415-14.976 10.415-4.41 0-8.401-1.788-11.29-4.678l5.042-5.737z" />
                </g>
                <path
                    d="M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z"
                    fill="#D80027"
                />
                <path
                    fill="#000"
                    d="M20.34 13.192l.69 2.121h2.23l-1.805 1.311.69 2.122-1.805-1.311-1.805 1.311.69-2.122-1.805-1.31h2.23zM27.283 13.192l.69 2.121h2.23l-1.805 1.311.69 2.122-1.805-1.311-1.805 1.311.69-2.122-1.805-1.31h2.23z"
                />
            </g>
        </svg>
    );
}
SvgSaoTomeAndPrince.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSaoTomeAndPrince.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSaoTomeAndPrince;
