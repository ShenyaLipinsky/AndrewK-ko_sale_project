import propTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'theme-ui';
import { CastItem } from './ProductDetails.styled';
import { fetchInstruction } from 'components/services/API-Products_DB';

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
  console.log(instruction_description);
  return (
    <div>
      {image === 'No Image' ? (
        <p> {description}</p>
      ) : (
        <>
          <img src={image} alt="Instruction image" />
          <p> {description}</p>
        </>
      )}
    </div>
  );
};
Instruction.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  job: propTypes.string,
  profile_path: propTypes.string,
};

export default Instruction;
