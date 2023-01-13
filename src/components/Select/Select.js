import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <NativeSelect value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            <PresentationalBit>
                {displayedValue}
                <Icon id="chevron-down" strokeWidth={1} size={24} />
            </PresentationalBit>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
`;

const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* fix for safari to override height */
    appearance: none;
`;

const PresentationalBit = styled.div`
    background: ${COLORS.transparentGray15};
    border-radius: 8px;
    padding: 12px 16px;
    padding-right: 10px;
    color: ${COLORS.gray700};
    font-size: ${16 / 16}rem; //1rem;

    /* position icon */
    display: flex;
    align-items: center;
    gap: 24px;

    /* the adjacent sibling combinator */
    ${NativeSelect}:focus + & {
        // TODO: add styles for other browsers
        outline: 5px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
        color: black;
    }
`;

export default Select;
