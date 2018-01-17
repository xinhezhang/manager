import React, { Component } from 'react';

import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autoCapitalize="words"
            label="Name"
            placeholder="Jane Doe"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="(999)999-9999"
          />
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
