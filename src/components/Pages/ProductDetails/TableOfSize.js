import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTableOfSizes } from 'components/services/API-Products_DB';
import {
  InstructionBox,
  InstructionImg,
  InstructionText,
} from './Instruction.styled';

const TableOfSize = () => {
  const { id } = useParams();
  const [tableOfSize, setTableOfSize] = useState(null);

  useEffect(() => {
    async function instructionData() {
      await fetchTableOfSizes(id).then(setTableOfSize);
    }
    instructionData();
  }, [id]);

  if (!tableOfSize) {
    return null;
  }
  const { image_of_size } = tableOfSize;
  const image = image_of_size[0];
  const description = image_of_size[1];
  return (
    <InstructionBox>
      {image === 'No Image' ? (
        <InstructionText> {description}</InstructionText>
      ) : (
        <>
          <InstructionImg src={image} alt="Table of size image" />
          <InstructionText> {description}</InstructionText>
        </>
      )}
    </InstructionBox>
  );
};

export default TableOfSize;
