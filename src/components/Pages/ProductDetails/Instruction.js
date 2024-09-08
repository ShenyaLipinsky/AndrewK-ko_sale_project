// import propTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInstruction } from 'components/services/API-Products_DB';
import {
  InstructionBox,
  InstructionImg,
  InstructionText,
} from './Instruction.styled';

const Instruction = () => {
  const { id } = useParams();
  const [instructionDetails, setInstructionDetails] = useState(null);

  useEffect(() => {
    async function instructionData() {
      await fetchInstruction(id).then(setInstructionDetails);
    }
    instructionData();
  }, [id]);

  if (!instructionDetails) {
    return null;
  }
  const { instruction_description } = instructionDetails;
  const image = instruction_description[0];
  const description = instruction_description[1];
  return (
    <InstructionBox>
      {image === 'No Image' ? (
        <InstructionText> {description}</InstructionText>
      ) : (
        <>
          <InstructionImg src={image} alt="Instruction image" />
          <InstructionText> {description}</InstructionText>
        </>
      )}
    </InstructionBox>
  );
};

export default Instruction;
