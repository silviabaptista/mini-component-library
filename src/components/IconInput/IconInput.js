import React, { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const [value, setValue] = useState();
    const color = value ? COLORS.gray700 : COLORS.gray500;
    const weight = value ? 700 : 400;

    return (
        <Wrapper style={{ "--width": width + "px" }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            <Icon id={icon} strokeWidth={1} size={14} />
            <NativeInput
                style={{ "--color": color, "--weight": weight }}
                placeholder={placeholder}
                value={value}
                onInput={e => setValue(e.target.value)}
            ></NativeInput>
        </Wrapper>
    );
};

const NativeInput = styled.input`
    position: absolute;
    border: none;
    top: 0;
    left: 20px; //icon size + some padding (14 + 6)
    font-size: ${14 / 16}rem;
    font-weight: var(--weight);
    outline: none;
    width: calc(100% - 20px);
    color: var(--color);
`;

const Wrapper = styled.div`
    position: relative;
    border-bottom: 1px solid black;
    padding-bottom: 6px;
    width: var(--width);
    color: ${COLORS.gray700};

    /* TODO focus and hover effect 
    ${NativeInput}:focus + & {
        outline: 5px auto -webkit-focus-ring-color;
    } */
`;

export default IconInput;
