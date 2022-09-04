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
        id:"2",
        title:'Echarts',
        path: '/home/echarts',
        icon: VideoCameraOutlined,
      }
    ]
  },
  {
    path: '/test',
    icon: UserOutlined,
    title:'测试',
    id: "3",
    children: [
      { 
        id:"4",
        title:'List',
        path: '/test/List',
        icon: VideoCameraOutlined,
      },
      {
        path: '/home',
        icon: UserOutlined,
        title:'测试',
        id: "5",
        children: [
          { 
            id:"6",
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
