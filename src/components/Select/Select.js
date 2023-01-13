import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);
    const width = displayedValue.length * 12 + 32; // plus left and right padding

    return (
        <Wrapper
            value={value}
            onChange={onChange}
            style={{ "--width": width + "px" }}
        >
            {children}
            <Icon id="chevron-down" />
        </Wrapper>
    );
};

const Wrapper = styled.select`
    background: ${COLORS.transparentGray15};
    border-radius: 8px;
    padding: 12px 16px;
    border: none;
    color: ${COLORS.gray700};
    font-size: 1rem;
    width: var(--width);

    &:hover {
        color: black;
    }
`;

export default Select;
