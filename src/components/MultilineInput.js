import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'

export default function MultilineInput() {
  const [value, setValue] = React.useState('Controlled');
  return (
    <StyledMultilineInput
      id="filled-textarea"
      label="Enter program code"
      placeholder="Placeholder"
      multiline
      variant="filled"
    />
  )
}

const StyledMultilineInput = styled(TextField)`
  background-color: rgb(255, 255, 255, 0.3);
`
