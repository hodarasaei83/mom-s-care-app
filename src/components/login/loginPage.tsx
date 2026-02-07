import { PhoneOutlined } from '@ant-design/icons'
import { Button, Card, Col, Flex, Form, Input, Row, Typography } from 'antd'
import {
  normalizePhoneNumber,
  isValidPhoneNumber,
} from '../../utils/validators'

const { Title } = Typography

export default function LoginPage() {
  return (
    <Row className="login-gradient" style={{ width: '100wh', height: '100vh' }}>
      <Col span={24}>
        <Flex justify="center" align="center">
          <Card
            style={{
              background: 'none',
              border: 'none',
              marginTop: '40px',
            }}
          >
            <img src="/loginLogo.svg" alt="logo" />
          </Card>
        </Flex>
      </Col>
      <Col span={24}>
        <Form
          variant="outlined"
          style={{
            backgroundColor: 'white',
            width: '100wh',
            height: '573px',
            borderRadius: '40px 40px 0px 0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none',
              padding: 0,
              margin: 0,
              background: 'none',
            }}
          >
            <Title level={4} style={{ textAlign: 'right' }}>
              ورود
            </Title>

            <Title
              type="secondary"
              style={{
                textAlign: 'right',
                fontSize: '14px',
                marginBottom: '30px',
              }}
            >
              برای ادامه، شماره تلفن همراه خود را وارد کنید
            </Title>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'این فیلد الزامی است',
                },
                {
                  validator: (_, value) => {
                    if (!value) {
                      return Promise.resolve()
                    }

                    return isValidPhoneNumber(value)
                      ? Promise.resolve()
                      : Promise.reject(new Error('شماره وارد شده نامعتبر است'))
                  },
                },
              ]}
              name="Input"
              normalize={normalizePhoneNumber}
              validateTrigger="onSubmit"
            >
              <Input
                dir="rtl"
                style={{
                  display: 'flex',
                  height: '56px',
                  gap: '10px',
                  fontSize: '15px',
                }}
                size="large"
                placeholder="شماره تلفن همراه"
                inputMode="numeric"
                maxLength={13}
                suffix={
                  <PhoneOutlined
                    style={{
                      transform: 'rotate(90deg)',
                      color: '#9CA3AF',
                      fontSize: '20px',
                    }}
                  />
                }
              />
            </Form.Item>
          </Card>

          <Card
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              style={{
                backgroundColor: '#4A6FA5',
                color: 'white',
                width: '400px',
                height: '56px',
                borderRadius: '8px',
                marginBottom: '30px',
              }}
              type="primary"
              htmlType="submit"
            >
              دریافت کد
            </Button>
          </Card>
        </Form>
      </Col>
    </Row>
  )
}
