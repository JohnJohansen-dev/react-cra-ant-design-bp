import './App.less';
import { Button, Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <>
      <Layout>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Title>React CRA with Ant Design boilerplate</Title>
          <Button type="primary">Button</Button>
        </Content>
      </Layout>
    </>
  );
}

export default App;
