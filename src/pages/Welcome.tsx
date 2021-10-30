import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert } from 'antd';
// import styles from './Welcome.less';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'Welcome 星空'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
      </Card>
    </PageContainer>
  );
};
