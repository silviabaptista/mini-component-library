import React, { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
    small: {
        fontSize: 14,
        border: "1px solid black",
        iconSize: 16,
        height: 24
    },
    large: {
        fontSize: 18,
        border: "2px solid black",
        iconSize: 24,
        height: 36
    }
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const styles = SIZES[size];

    return (
        <Wrapper>
            <VisuallyHidden>{label}</VisuallyHidden>
            <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
                <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
            </IconWrapper>

            <NativeInput
                style={{
                    "--width": width + "px",
                    "--height": styles.height / 16 + "rem",
                    "--fontSize": styles.fontSize / 16 + "rem",
                    "--left": styles.left
                }}
                placeholder={placeholder}
            ></NativeInput>
        </Wrapper>
    );
};

const NativeInput = styled.input`
    border: none;
    width: var(--width);
    height: var(--height);
    padding-left: var(--height);
    font-size: var(--fontSize);
    font-weight: 700;
    outline-offset: 2px;
    width: calc(100% - 20px);
    color: ${COLORS.gray700};
    border-bottom: 1px solid black;

    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: 400;
    }
`;

const Wrapper = styled.div`
    position: relative;
    color: ${COLORS.gray700};

    /* TODO focus and hover effect 
    ${NativeInput}:focus + & {
        outline: 5px auto -webkit-focus-ring-color;
    } */
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: var(--size);
`;

export default IconInput;
