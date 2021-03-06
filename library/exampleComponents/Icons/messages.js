import React from 'react';
import PropTypes from 'prop-types';

const Messages = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="22px"
            height="20px"
            viewBox="0 0 22 20"
            version="1.1"
        >
            <title>messages</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="sidebar-component"
                    transform="translate(-156.000000, -737.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-31" transform="translate(124.000000, 458.000000)">
                        <g id="messages" transform="translate(32.000000, 279.000000)">
                            <path
                                d="M5.87378516,0.00566761364 C2.70058594,0.0730397727 0.103382812,2.6209517 0.00309375,5.76703125 C-0.04675,7.3300142 0.510984375,8.76315341 1.45960547,9.85193182 C1.88684375,10.3422443 2.00878906,11.0254688 1.78900391,11.635696 L1.39394922,12.7326989 C1.26547266,13.0895028 1.68214062,13.3944886 1.98807812,13.167571 L3.38924609,12.1283097 C3.80617187,11.8190625 4.33558984,11.7040483 4.84640234,11.8038494 C5.3783125,11.9077841 5.93527344,11.9421307 6.50808984,11.8951705 C9.52178906,11.6478409 11.8985195,9.17607955 12.0068008,6.17893466 C12.1309375,2.74619318 9.32430469,-0.0675852273 5.87378516,0.00566761364 Z"
                                id="Shape"
                                fill="#F8752D"
                            />
                            <path
                                d="M19.5427461,15.3314915 C19.0345117,15.9397159 18.8733359,16.7616903 19.1409023,17.5052983 L19.3308242,18.0329403 C20.1666667,20 20.1666667,20 18.5711367,18.8228267 L17.3912148,17.9487784 C16.893293,17.580554 16.2638437,17.434517 15.6532148,17.5471449 C15.2594492,17.6201847 14.8185469,17.6847443 14.4984297,17.6847443 C10.8819219,17.6847443 7.95055078,14.7775994 7.95055078,11.1909801 C7.95012109,7.60794034 10.8850586,4.69721591 14.4984297,4.69721591 C18.1145078,4.69721591 21.0463086,7.6043608 21.0463086,11.1909801 C21.0463945,12.7645312 20.4815703,14.207642 19.5427461,15.3314915 Z"
                                id="Shape"
                                fill="#FFCC00"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Messages.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Messages.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Messages;
