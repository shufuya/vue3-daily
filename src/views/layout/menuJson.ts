import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

const menuJson = [
  {
    path: '/home',
    icon: UserOutlined,
    title:'主页',
    id: "1",
    children: [
      { 
        id:"1-1",
        title:'Echarts',
        path: '/home/echarts',
        icon: VideoCameraOutlined,
      }
    ]
  },
  {
    path: '/home',
    icon: UserOutlined,
    title:'测试',
    id: "2",
    children: [
      { 
        id:"2-1",
        title:'Echarts',
        path: '/home/echarts',
        icon: VideoCameraOutlined,
      },
      {
        path: '/home',
        icon: UserOutlined,
        title:'测试',
        id: "2-2",
        children: [
          { 
            id:"2-2-1",
            title:'Echarts',
            path: '/home/echarts',
            icon: VideoCameraOutlined,
          }
        ]
      }
    ]
  }
]

export default menuJson
