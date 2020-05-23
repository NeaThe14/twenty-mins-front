import React, { useState, useContext } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Typography,
  Col,
} from 'antd';
import GlobalState from '../context/GlobalState';

const Profile = () => {
  const [componentSize, setComponentSize] = useState('middle');

  const { userData, setUserData } = useContext(GlobalState);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const { Title } = Typography;

  return (
    <div style={{ marginTop: '15px' }}>
      <Col offset={8} span={9}>
        <Title>
          Profile Settings for {userData.user ? userData.user.name : 'null'}
        </Title>
        <Form
          layout={'vertical'}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout='horizontal'
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label='Form Size' name='size'>
            <Radio.Group>
              <Radio.Button value='small'>Small</Radio.Button>
              <Radio.Button value='middle'>Middle</Radio.Button>
              <Radio.Button value='large'>Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label='Input'>
            <Input value={userData.user ? userData.user.name : null} />
          </Form.Item>
          <Form.Item label='Select'>
            <Select value={'kek'}>
              <Select.Option value='male'>Male</Select.Option>
              <Select.Option value='female'>Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='Save Changes'>
            <Button
              style={{ position: 'relative', left: '5px' }}
              htmlType='submit'
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </div>
  );
};

export default Profile;
