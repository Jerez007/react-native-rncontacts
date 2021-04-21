import React from 'react';
import {Text} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/input';

const Index = () => {
  return (
    <Container>
      <Input
        label="Username"
        iconPosition="right"
        placeholder="Enter username"
        // error={'This field is required'}
      />
      <Input
        label="Password"
        placeholder="Enter password"
        secureTextEntry={true}
        icon={<Text>Show</Text>}
        iconPosition="right"
      />
      <CustomButton primary title="Submit" />
    </Container>
  );
};

export default Index;
