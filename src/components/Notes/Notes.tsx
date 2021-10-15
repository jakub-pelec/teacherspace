import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	notes: any;
}

const Notes: React.FC<IProps> = ({ topLevelHistory, notes }) => {
	return (
		<Wrapper>
			<h1>Notes</h1>

			{notes.map((note: any) => (
				<Card>
					<Title>{note.title}</Title>
					<Subject>{note.subject}</Subject>
					<ClassesWrapper>
						{note.classes.map((el: any) => {
							return <Class>{el}</Class>;
						})}
					</ClassesWrapper>
					<Note>{note.content}</Note>
				</Card>
			))}
		</Wrapper>
	);
};

export const Wrapper = styled.div`
	height: 100%;
	padding-left: 2em;
	h1 {
		padding-bottom: 2em;
		font-size: 3em;
	}
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${({ theme }) => theme.background};
	border-radius: 1em;
	padding: 1.5em;
	width: 20em;
	max-width: 20em;
	height: 20em;
	max-height: 20em;
	div {
		margin-bottom: 0.5em;
	}
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const mapStateToProps = (state: any) => {
	console.log(state);
	return { notes: state.fetch.notes };
};

const Title = styled.div`
	font-size: 2.5rem;
	text-transform: capitalize;
	max-width: 15em;
`;

const Subject = styled.div`
	font-size: 1.5rem;
	text-transform: capitalize;
	max-width: 15em;
`;

const Class = styled.div`
	font-size: 1em;
	font-weight: bold;
	border: 2px solid ${({ theme }) => theme.infoBorder};
	background-color: ${({ theme }) => theme.infoBg};
	width: fit-content;
	padding: 0.2em 0.5em;
	border-radius: 1em;
	max-width: 15em;
`;

const ClassesWrapper = styled.div`
	display: flex;
	max-width: 15em;
`;

const Note = styled.div`
	max-width: 15em;
	word-break: break-word;
	font-size: 1.5em;
`;

export default connect(mapStateToProps)(Notes);
