import React, { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
    small: {
        fontSize: "14px",
        border: "1px solid black",
        iconSize: 16,
        left: "22px" //iconsize + some padding
    },
    large: {
        fontSize: "18px",
        border: "2px solid black",
        iconSize: 24,
        left: "28px" //iconsize + some padding
    }
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const [value, setValue] = useState();
    const styles = SIZES[size];
    const color = value ? COLORS.gray700 : COLORS.gray500;
    const weight = value ? 700 : 400;

    return (
        <Wrapper style={{ "--width": width + "px" }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
            <NativeInput
                style={{
                    "--color": color,
                    "--weight": weight,
                    "--fontSize": styles.fontSize,
                    "--left": styles.left
                }}
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
    left: var(--left);
    font-size: var(--fontSize);
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
