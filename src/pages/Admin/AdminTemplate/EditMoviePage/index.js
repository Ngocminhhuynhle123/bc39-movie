import React, { Fragment } from 'react'
import {Table} from 'antd'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

export default function EditMoviePage() {
    const { Search } = Input;

    const onSearch = (value) => console.log(value);
    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '',
          }}
        />
      );
    
      
    

    const columns = [
        {
          title: 'maPhim',
          dataIndex: 'maPhim',
          value:(text,object) => {return <span>{text}</span>},
          sorter:(a,b) => b.maPhim - a.maPhim,
          sortDirection:['descend','ascend'],
          sortOrder:'descend'
          
        },
        {
          title:'tenPhim',
          dataIndex:'tenPhim',

        },
        {
          title: 'pictures',
          dataIndex: 'hinhAnh',
          render : (film,index) => {
            console.log(film);
            return <Fragment>
            <img src={film}  width={80} height={100}  
            />
            
          </Fragment>

          }
          // sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Detail',
          dataIndex: 'moTa',
        
          
          filterSearch: true,
          width: '40%',
        },
        {
title:'edit',

        },    ]
        const data = [
            {
                "maPhim": 10427,
                "tenPhim": "Xa Ngoài Kia Nơi Loài Tôm Hát!",
                "biDanh": "xa-ngoai-kia-noi-loai-tom-hat-",
                "trailer": "https://www.youtube.com/embed/S2jTTbz_hVs",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/xa-ngoai-kia-noi-loai-tom-hat_gp03.jpg",
                "moTa": "Bộ phim kể về Kya Clark - một cô gái bị gia đình bỏ rơi, lớn lên ở vùng đầm lầy phía nam thị trấn Barkley Cove vào những năm 50. Khi cảnh sát của thị trấn bị phát hiện đã qua đời, người ta bắt đầu dồn mọi mối nghi ngờ vào Kya",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2023-03-24T00:00:00",
                "danhGia": 7,
                "hot": true,
                "dangChieu": true,
                "sapChieu": false
              },
              {
                "maPhim": 10431,
                "tenPhim": "PHÙ THỦY TỐI THƯỢNG ĐA VŨ TRỤ",
                "biDanh": "phu-thuy-toi-thuong-da-vu-tru",
                "trailer": "https://www.youtube.com/embed/0rEKdTK1igo",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp03.png",
                "moTa": "Sau khi dùng phép thuật khiến mọi người quên danh tính của Spider-Man, thế giới trở bỗng nhiên trở nên hoang tàn. Lo lắng sẽ có hiểm họa xảy ra Doctor Strange tìm đến Scarlet Witch (Wanda) để nhờ cô trợ giúp, có vẻ như điều gì đó đang tác động lớn đến sư ổn định của không thời gian, liệu đây có phải là cái giá phải trả của Strange khi dùng đến phép cấm mà Wong đã cảnh báo?",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2023-01-08T00:00:00",
                "danhGia": 9,
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
              },
              {
                "maPhim": 11323,
                "tenPhim": "Trải nghiệm cùng Adam 3",
                "biDanh": "trai-nghiem-cung-adam-3",
                "trailer": "https://youtu.be/Fva_W_AF0IM",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/black-adam_gp01.jpg",
                "moTa": "Dwayne Johnson sẽ góp mặt trong tác phẩm hành động - phiêu lưu mới của New Line Cinema “Black Adam”. Đây là bộ phim đầu tiên trên màn ảnh rộng khai thác câu chuyện của siêu anh hùng DC này, dưới sự sáng tạo của đạo diễn Jaume Collet-Serra (“Jungle Cruise”). ",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2023-02-26T10:15:51.27",
                "danhGia": 8,
                "hot": true,
                "dangChieu": true,
                "sapChieu": false
              },
              {
                "maPhim": 11325,
                "tenPhim": "NGƯỜI NHỆN: KHÔNG CÒN NHÀ",
                "biDanh": "nguoi-nhen-khong-con-nha",
                "trailer": "https://youtu.be/o4NzWTNqSto",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nguoi-nhen-khong-con-nha_gp01.jpg",
                "moTa": "iệc các Spider - Man sẽ họp tụ lại với nhau đã vui rồi, những phản diện của các phần phim trước trở lại mà còn giúp Spider - Man nữa thì lại càng vui hơn, về phía phản diện mà đã hoàn lương thì tôi lại thích Giáo Sư Bạch Tuộc và Sand - Man và phần này hai người đó lại xuất hiện thì quá tuyệt vời, đúng là sống tốt thì sẽ có người tốt lại với mình, và tôi thích các câu nói đùa của những người phản diện",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2023-02-10T10:20:18.74",
                "danhGia": 9,
                "hot": true,
                "dangChieu": true,
                "sapChieu": false
              },
              {
                "maPhim": 11327,
                "tenPhim": "Your name 2",
                "biDanh": "your-name-2",
                "trailer": "https://youtu.be/Fva_W_AF0IM",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/your-name_gp01.jpg",
                "moTa": "Your Name – Kimi No Na Wa kể về nữ sinh trung học Mitsuha. Chán ngán cuộc sống tẻ nhạt ở thị trấn nhỏ vùng Itomori, Mitsuha luôn ước ao kiếp sau mình sẽ trở thành một chàng đẹp trai ở thủ đô Tokyo phồn hoa đô hội. Trong khi đó, chàng trai Taki ở Tokyo đang hài lòng với cuộc sống và công việc làm thêm của mình. Khi Sao chổi tiến tới gần Trái đất tạo ra sự kiện ngàn năm có một, Taki và Mitsuha bị hoán đổi cơ thể cho nhau!",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2023-01-09T20:48:50.75",
                "danhGia": 8,
                "hot": true,
                "dangChieu": true,
                "sapChieu": true
              },
              {
                "maPhim": 11339,
                "tenPhim": "Guardians of the Galaxy Vol. 10",
                "biDanh": "guardians-of-the-galaxy-vol-10",
                "trailer": "https://www.youtube.com/watch?v=bXjK1yliXsQ",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/guardians-of-the-galaxy-vol-10_gp01.jpeg",
                "moTa": "Phim này siêu hay nha",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2023-02-10T17:47:54.727",
                "danhGia": 10,
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
              },
              {
                "maPhim": 11343,
                "tenPhim": "Tranformer",
                "biDanh": "tranformer",
                "trailer": "https://www.youtube.com/watch?v=CFl9gTcyOoA",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tranformer_gp01.jpg",
                "moTa": "Tranformer Robot đại chiến",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2022-11-28T00:00:00",
                "danhGia": 10,
                "hot": false,
                "dangChieu": false,
                "sapChieu": false
              },
              {
                "maPhim": 11374,
                "tenPhim": "Vũ Động Càng Khôn p5",
                "biDanh": "vu-dong-cang-khon-p5",
                "trailer": "https://www.youtube.com/watch?v=MVg1XeoqLoE",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/vu-dong-cang-khon-p5_gp01.jpg",
                "moTa": "Vũ Động Càng khôn p5",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2022-12-31T00:00:00",
                "danhGia": 8,
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
              },
              {
                "maPhim": 11401,
                "tenPhim": "Thôn phệ tinh không 2",
                "biDanh": "thon-phe-tinh-khong-2",
                "trailer": "https://youtu.be/04kUryhzrcw",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/thon-phe-tinh-khong_gp01.jpg",
                "moTa": "Thôn Phệ Tinh Không Tập 63 Trailer",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2023-02-10T17:59:26.58",
                "danhGia": 8,
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
              },
              {
                "maPhim": 11597,
                "tenPhim": "Baby",
                "biDanh": "baby",
                "trailer": "https://youtu.be/sYk0dDAyBbM",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/babylon_gp01.jpg",
                "moTa": "Từ đạo diễn của La La Land và Whiplash",
                "maNhom": "GP01",
                "ngayKhoiChieu": "2023-02-10T00:00:00",
                "danhGia": 6,
                "hot": true,
                "dangChieu": true,
                "sapChieu": false
              },
        ]
          const onChange = (pagination, filters, sorter, extra) => {
            console.log('params', pagination, filters, sorter, extra);
          };
          const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

          
 return(
    <div className='container'>
<h3 className='text-4xl'>Quản Lý Phim</h3>
<button>Them Phim</button>
<Search
      placeholder="input search text"
      allowClear
      enterButton="Tim Kiem"
      size="large"
      onSearch={onSearch}
    />
<Table columns={columns} dataSource={data} onChange={onchange}></Table>
    </div>
 )
}
