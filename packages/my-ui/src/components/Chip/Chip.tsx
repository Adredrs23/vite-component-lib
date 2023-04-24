/** @jsxImportSource @emotion/react */
import { FC } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ChipProps {
	label: string;
	backgroundColor: string;
}

export const Chip: FC<ChipProps> = ({ label, backgroundColor }) => {
	return (
		<StyledChip
			color={backgroundColor}
			css={css`
				color: cyan;
			`}
		>
			<StyledDiv>{label}</StyledDiv>
		</StyledChip>
	);
};

const StyledDiv = styled.div`
	width: 20px;
	height: 20px;
	background-color: blue;
	transform: rotate(45deg);

	position: relative;
	top: 0;
	right: 0;
`;

const StyledChip = styled.div<{ color: string }>`
	position: relative;

	${({ color }) =>
		css`
			background-color: ${color};
		`};

	&:hover ${StyledDiv} {
		right: -50%;
	}
`;
