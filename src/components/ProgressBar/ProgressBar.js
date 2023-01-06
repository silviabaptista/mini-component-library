/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
    small: {
        height: "8px",
        borderRadius: "4px"
    },
    medium: {
        height: "12px",
        borderRadius: "8px"
    },
    large: {
        height: "16px",
        padding: "4px",
        borderRadius: "8px"
    }
};

const ProgressBar = ({ value, size }) => {
    const styles = SIZES[size];
    return (
        <Container
            role="progressbar"
            aria-valuenow={value}
            style={{
                "--padding": styles.padding,
                "--radius": styles.borderRadius
            }}
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <BarWrapper>
                <Bar
                    style={{
                        "--width": value + "%",
                        "--height": styles.height
                    }}
                ></Bar>
            </BarWrapper>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    padding: var(--padding);
`;

const BarWrapper = styled.div`
    border-radius: 4px;
    /* so that corners look rounded when near 100% */
    overflow: hidden;
`;

const Bar = styled.div`
    background-color: ${COLORS.primary};
    width: var(--width);
    height: var(--height);
    border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
