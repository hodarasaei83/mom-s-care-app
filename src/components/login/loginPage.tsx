import { Card, Layout } from 'antd'

export default function LoginPage() {
  return (
    <Layout
      className="login-gradient"
      style={{
        minHeight: '852px',
        minWidth: '393px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
      }}
    >
      <Card
        style={{
          background: 'none',
          border: 'none',
        }}
      >
        <img src="/loginLogo.svg" alt="logo" />
      </Card>
    </Layout>
  )
}
