import styled from 'styled-components';
import { PADDING_X_SMALL } from '../../../styles/paddings';
import { FONT_SIZE_TEXT_SMALL, FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { COLOR_GRAY_4, COLOR_WHITE, COLOR_BRAND, COLOR_GRAY_3 } from '../../../styles/colors';

const StyledAnchor = styled.button`
    background: none;
    border: none;
    outline: inherit;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: transparent;
    padding: ${PADDING_X_SMALL} 1.75rem;
    border-radius: 14px 14px 0 0;
    line-height: 1rem;
    letter-spacing: 0.9px;
    font-size: ${FONT_SIZE_TEXT_SMALL};
    font-weight: 600;
    color: ${COLOR_GRAY_4};
    z-index: 0;

    &:hover,
    &:active,
    &:visited {
        text-decoration: none;
        outline: 0;
        cursor: pointer;
    }

    &:hover {
        background-color: #f9fafc;
        color: ${COLOR_GRAY_4};
        z-index: 1;
    }

    &:focus {
        text-decoration: none;
        outline: 0;
        border-radius: 14px 14px 0 0;
    }

    &::after {
        content: '';
        position: absolute;
        left: -2px;
        height: 20px;
        width: 1px;
        background-color: ${COLOR_GRAY_3};
    }

    :hover::after {
        background-color: transparent;
    }

    @media (max-width: 600px) {
        height: 100%;
        border-radius: 0;
        color: ${COLOR_BRAND};
        font-size: ${FONT_SIZE_TEXT_MEDIUM};
        width: 100%;
        padding: 0 1rem 0 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        &::after {
            content: unset;
            position: unset;
            left: unset;
            height: unset;
            width: unset;
            background-color: unset;
        }

        &:focus {
            border-radius: 0;
        }
    }

    ${props =>
        props.isActive &&
        `
            z-index: 2;
            background-color: ${COLOR_WHITE};
            color: ${COLOR_BRAND};
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            border-radius: 14px 14px 0 0;

            &:hover, &:active, &:visited, &:focus {
                background-color: ${COLOR_WHITE};
                color: ${COLOR_BRAND};
            }

            &::after {
                left: -40px;
                content: '';
                background: transparent;
                position: absolute;
                bottom: -16px;
                height: 56px;
                width: 56px;
                border-radius: 100%;
                border-width: 16px;
                border-style: solid;
                border-color: transparent white transparent transparent;
                -webkit-transform: rotate(45deg);
            }

            &::before {
                right: -40px;
                content: '';
                background: transparent;
                position: absolute;
                bottom: -16px;
                height: 56px;
                width: 56px;
                border-radius: 100%;
                border-width: 16px;
                border-style: solid;
                border-color: transparent white transparent transparent;
                -webkit-transform: rotate(145deg);
            }

            @media (max-width: 600px) {
                border-radius: 0;
                position: relative;
                width: 100%;

                &::after {
                    left: unset;
                    content: unset;
                    background: unset;
                    position: unset;
                    bottom: unset;
                    height: unset;
                    width: unset;
                    border-radius: unset;
                    border-width: unset;
                    border-style: unset;
                    border-color: unset;
                    -webkit-transform: unset;
                }
            
                &::before {
                    background: unset;
                    border-width: unset;
                    border-style: unset;
                    border-color: unset;
                    -webkit-transform: unset;
                    content: "";
                    height: 0.15rem;
                    width: 100%;
                    left: 0;
                    bottom: 0;
                    position: absolute;
                    background-color: #01b6f5;
                    border-radius: 100px;
                }
            }
        `};
    ${props =>
        props.disabled &&
        `
            color: ${COLOR_GRAY_3};
            cursor: pointer;
            pointer-events: none;
        
            &:hover {
                box-shadow: none;
                background-color: transparent;
            }
        `};
    ${props =>
        props.fullWidth &&
        `
            flex-grow: 1;
        `};
`;

export default StyledAnchor;